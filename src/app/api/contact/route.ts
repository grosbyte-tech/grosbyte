import { createHash } from "node:crypto";

import {
  emptyContact,
  validateContactFields,
  type ContactValues,
} from "@/lib/contact";

// Best-effort per-instance protection; deployment-level limits should complement this.
const attempts = new Map<string, { count: number; expires: number }>();
function rateLimited(key: string) {
  const now = Date.now();
  for (const [key, value] of attempts)
    if (value.expires <= now) attempts.delete(key);
  const entry = attempts.get(key) ?? { count: 0, expires: now + 600_000 };
  entry.count++;
  if (attempts.size >= 5000 && !attempts.has(key)) return true;
  attempts.set(key, entry);
  return entry.count > 5;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  // Next.js may use an internal hostname behind a reverse proxy. Compare the
  // browser origin with the public Host header without trusting forwarded hosts.
  let validOrigin = !origin;
  if (origin) {
    try {
      const source = new URL(origin);
      validOrigin =
        ["http:", "https:"].includes(source.protocol) &&
        source.host ===
          (request.headers.get("host") ?? new URL(request.url).host);
    } catch {
      validOrigin = false;
    }
  }
  if (!validOrigin) {
    return Response.json(
      { message: "Invalid request origin." },
      { status: 403 },
    );
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ message: "Expected JSON." }, { status: 415 });
  }
  if (Number(request.headers.get("content-length")) > 24000) {
    return Response.json({ message: "Enquiry is too large." }, { status: 413 });
  }
  let payload: Record<string, unknown>;
  try {
    // Bound streamed bodies as well as requests with Content-Length.
    const reader = request.body?.getReader();
    if (!reader) throw new Error("Missing body");
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 24000) {
        await reader.cancel();
        return Response.json(
          { message: "Enquiry is too large." },
          { status: 413 },
        );
      }
      chunks.push(value);
    }
    const parsed: unknown = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      throw new Error("Invalid body");
    payload = parsed as Record<string, unknown>;
  } catch {
    return Response.json(
      { message: "Please check the form and try again." },
      { status: 400 },
    );
  }
  if (payload.website)
    return Response.json(
      { message: "Unable to accept this enquiry." },
      { status: 400 },
    );
  const values = Object.fromEntries(
    Object.keys(emptyContact).map((key) => [key, stringValue(payload[key])]),
  ) as ContactValues;
  const errors = validateContactFields(values);
  const submissionId = stringValue(payload.submissionId);
  if (
    Object.keys(errors).length ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      submissionId,
    )
  ) {
    return Response.json(
      {
        message: "Please correct the highlighted fields and try again.",
        errors,
      },
      { status: 400 },
    );
  }
  const emailKey = createHash("sha256")
    .update(values.email.toLowerCase())
    .digest("hex");
  if (rateLimited(emailKey))
    return Response.json(
      {
        message:
          "Too many enquiries. Please wait ten minutes before trying again.",
      },
      { status: 429, headers: { "Retry-After": "600" } },
    );

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !from || !contactEmail) {
    console.error("Contact email configuration is incomplete.");
    return Response.json(
      {
        message:
          "We could not send your enquiry right now. Please try again shortly.",
      },
      { status: 503 },
    );
  }

  const { name, email, phone, company, service, message, budget } = values;
  const idempotencyKey = createHash("sha256")
    .update(`grosbyte-contact:${submissionId}`)
    .digest("hex");

  try {
    const resendResponse = await fetch("https://api.resend.com/emails/batch", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": idempotencyKey,
      },
      body: JSON.stringify([
        {
          from,
          to: [contactEmail],
          reply_to: email,
          subject: `New website enquiry from ${name}`,
          html: businessEmail({
            name,
            email,
            phone,
            company,
            service,
            message,
            budget,
          }),
          text: [
            "New website enquiry",
            "",
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone || "Not provided"}`,
            `Company: ${company || "Not provided"}`,
            `Budget: ${budget || "Not provided"}`,
            `Service: ${service}`,
            "",
            "Message:",
            message,
          ].join("\n"),
        },
        {
          from,
          to: [email],
          reply_to: contactEmail,
          subject: "Thank you for contacting Grosbyte Technologies",
          html: acknowledgementEmail(name),
          text: [
            `Hello ${name},`,
            "",
            "Thank you for contacting Grosbyte Technologies. We have received your enquiry and will review the details carefully. Our team will get back to you as soon as possible.",
            "",
            "Best regards,",
            "Grosbyte Technologies",
          ].join("\n"),
        },
      ]),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    if (!resendResponse.ok) {
      console.error("Resend rejected the contact email batch.", {
        status: resendResponse.status,
      });
      return Response.json(
        {
          message:
            "We could not send your enquiry right now. Please try again shortly.",
        },
        { status: 502 },
      );
    }

    return Response.json({
      message:
        "Thank you! Your enquiry has been sent. We’ll get back to you soon.",
    });
  } catch {
    console.error("Contact email request failed.");
    return Response.json(
      {
        message:
          "We could not send your enquiry right now. Please check your connection and try again.",
      },
      { status: 502 },
    );
  }
}

function stringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

function emailShell(content: string, preview: string) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(preview)}</title>
  </head>
  <body style="margin:0;background:#f3f6fb;font-family:Arial,Helvetica,sans-serif;color:#10203b;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preview)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f6fb;padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border:1px solid #dce4f0;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="background:#09090b;padding:24px 30px;border-top:5px solid #2a68e1;">
                <p style="margin:0;color:#ffffff;font-size:20px;font-weight:700;">Grosbyte Technologies</p>
                <p style="margin:6px 0 0;color:#9ca3af;font-size:13px;">Technology built around real business goals</p>
              </td>
            </tr>
            <tr>
              <td style="padding:30px;">${content}</td>
            </tr>
            <tr>
              <td style="background:#f7f9fc;padding:18px 30px;border-top:1px solid #e3e9f2;color:#687891;font-size:12px;line-height:1.6;">
                Grosbyte Technologies · Kathmandu, Nepal<br>
                <a href="https://grosbyte.com" style="color:#2a68e1;text-decoration:none;">grosbyte.com</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function businessEmail({
  name,
  email,
  phone,
  company,
  budget,
  service,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  service: string;
  message: string;
}) {
  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "Not provided"],
    ["Company", company || "Not provided"],
    ["Budget", budget || "Not provided"],
    ["Selected service", service],
  ]
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;color:#687891;font-size:13px;border-bottom:1px solid #e7ecf3;width:34%;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;color:#10203b;font-size:14px;font-weight:600;border-bottom:1px solid #e7ecf3;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return emailShell(
    `<h1 style="margin:0 0 10px;font-size:24px;line-height:1.3;color:#10203b;">New website enquiry</h1>
     <p style="margin:0 0 22px;color:#687891;font-size:15px;line-height:1.65;">A potential client submitted the Grosbyte contact form.</p>
     <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e7ecf3;border-radius:9px;border-collapse:separate;border-spacing:0;overflow:hidden;">${rows}</table>
     <h2 style="margin:24px 0 8px;font-size:15px;color:#10203b;">Message</h2>
     <div style="padding:16px;background:#f7f9fc;border-left:4px solid #2a68e1;border-radius:6px;color:#34445e;font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</div>`,
    `New enquiry from ${name}`,
  );
}

function acknowledgementEmail(name: string) {
  return emailShell(
    `<h1 style="margin:0 0 20px;font-size:24px;line-height:1.3;color:#10203b;">Thank you for reaching out.</h1>
     <p style="margin:0 0 16px;color:#34445e;font-size:15px;line-height:1.75;">Hello ${escapeHtml(name)},</p>
     <p style="margin:0;color:#34445e;font-size:15px;line-height:1.75;">Thank you for contacting Grosbyte Technologies. We have received your enquiry and will review the details carefully. Our team will get back to you as soon as possible.</p>
     <div style="margin-top:26px;padding-top:20px;border-top:1px solid #e3e9f2;">
       <p style="margin:0;color:#34445e;font-size:15px;line-height:1.7;">Best regards,<br><strong style="color:#2a68e1;">Grosbyte Technologies</strong></p>
     </div>`,
    "We have received your enquiry.",
  );
}
