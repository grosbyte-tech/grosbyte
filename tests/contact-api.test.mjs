import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
import { randomUUID } from "node:crypto";
import ts from "typescript";

const require = createRequire(import.meta.url);
function loadApi({
  configured = true,
  providerStatus = 200,
  throws = false,
} = {}) {
  const calls = [];
  const cache = new Map();
  function load(path) {
    if (cache.has(path)) return cache.get(path);
    const module = { exports: {} };
    const code = ts.transpileModule(fs.readFileSync(path, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
      },
    }).outputText;
    vm.runInNewContext(
      code,
      {
        module,
        exports: module.exports,
        require: (name) =>
          name === "@/lib/contact"
            ? load("src/lib/contact.ts")
            : name === "./service-options"
              ? load("src/lib/service-options.ts")
              : require(name),
        Request,
        Response,
        Buffer,
        AbortSignal,
        URL,
        Date,
        console: { error() {} },
        process: {
          env: configured
            ? {
                RESEND_API_KEY: "test-only",
                EMAIL_FROM: "test@example.com",
                CONTACT_EMAIL: "team@example.com",
              }
            : {},
        },
        fetch: async (url, options) => {
          calls.push({ url, options });
          if (throws) throw new Error("Network unavailable");
          return new Response(JSON.stringify({ data: [] }), {
            status: providerStatus,
          });
        },
      },
      { filename: path },
    );
    cache.set(path, module.exports);
    return module.exports;
  }
  return { POST: load("src/app/api/contact/route.ts").POST, calls };
}
const valid = () => ({
  name: "Test Person",
  email: "person@example.com",
  phone: "+977 9800000000",
  company: "Example & Co",
  service: "Custom Software Development",
  message: "We need an internal reporting tool.",
  budget: "USD 5,000",
  website: "",
  submissionId: randomUUID(),
});
function request(payload, headers = {}) {
  return new Request("https://grosbyte.com/api/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: "https://grosbyte.com",
      ...headers,
    },
    body: typeof payload === "string" ? payload : JSON.stringify(payload),
  });
}

test("accepts an enquiry and sends both escaped emails with optional fields", async () => {
  const { POST, calls } = loadApi();
  const payload = {
    ...valid(),
    name: "<Test Person>",
    message: "<script>alert('test')</script>",
  };
  assert.equal((await POST(request(payload))).status, 200);
  assert.equal(calls.length, 1);
  const batch = JSON.parse(calls[0].options.body);
  assert.equal(batch.length, 2);
  assert.deepEqual(batch[0].to, ["team@example.com"]);
  assert.deepEqual(batch[1].to, [payload.email]);
  assert.equal(batch[0].reply_to, payload.email);
  assert.match(batch[0].html, /&lt;script&gt;/);
  assert.doesNotMatch(batch[0].html, /<script>/);
  assert.match(batch[0].html, /Example &amp; Co/);
  assert.match(batch[0].text, /USD 5,000/);
  assert.equal(calls[0].url, "https://api.resend.com/emails/batch");
  assert.ok(calls[0].options.signal);
  await POST(request(payload));
  assert.equal(
    calls[0].options.headers["Idempotency-Key"],
    calls[1].options.headers["Idempotency-Key"],
  );
});
test("validates every required field and optional field limits", async () => {
  const { POST, calls } = loadApi();
  for (const [field, value] of Object.entries({
    name: "x",
    email: "bad",
    phone: "not a phone",
    company: "x".repeat(151),
    service: "Not a service",
    message: "short",
    budget: "x".repeat(101),
  })) {
    const response = await POST(request({ ...valid(), [field]: value }));
    assert.equal(response.status, 400);
    assert.ok((await response.json()).errors[field]);
  }
  assert.equal(calls.length, 0);
});
test("accepts all ten real offerings and omitted optional fields", async () => {
  const titles = [
    ...fs
      .readFileSync("src/lib/service-options.ts", "utf8")
      .matchAll(/  "([^"]+)"/g),
  ].map((match) => match[1]);
  assert.equal(titles.length, 10);
  for (const service of titles) {
    const { POST } = loadApi();
    const payload = valid();
    delete payload.phone;
    delete payload.company;
    delete payload.budget;
    assert.equal((await POST(request({ ...payload, service }))).status, 200);
  }
});
test("rejects malformed, null, array, oversized, and non-JSON requests", async () => {
  const { POST, calls } = loadApi();
  for (const payload of ["{bad", "null", "[]"])
    assert.equal((await POST(request(payload))).status, 400);
  assert.equal((await POST(request("x".repeat(24001)))).status, 413);
  assert.equal(
    (await POST(request(valid(), { "content-type": "text/plain" }))).status,
    415,
  );
  assert.equal(calls.length, 0);
});
test("rejects foreign origins, honeypots, invalid IDs, and header injection", async () => {
  const { POST, calls } = loadApi();
  assert.equal(
    (await POST(request(valid(), { origin: "https://unrelated.example" })))
      .status,
    403,
  );
  for (const patch of [
    { website: "spam.example" },
    { submissionId: "invalid" },
    { name: "Name\r\nBcc: test@example.com" },
  ])
    assert.equal((await POST(request({ ...valid(), ...patch }))).status, 400);
  assert.equal(calls.length, 0);
});
test("limits repeated email attempts and provides Retry-After", async () => {
  const { POST, calls } = loadApi();
  for (let i = 0; i < 5; i++)
    assert.equal((await POST(request(valid()))).status, 200);
  const response = await POST(request(valid()));
  assert.equal(response.status, 429);
  assert.equal(response.headers.get("Retry-After"), "600");
  assert.equal(calls.length, 5);
});
test("reports missing configuration and provider failure without fake success", async () => {
  for (const [options, expected] of [
    [{ configured: false }, 503],
    [{ providerStatus: 422 }, 502],
    [{ throws: true }, 502],
  ]) {
    const { POST } = loadApi(options);
    assert.equal((await POST(request(valid()))).status, expected);
  }
});

test("accepts the public host when Next uses an internal route hostname", async () => {
  const { POST } = loadApi();
  const request = new Request("http://localhost:3100/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      host: "127.0.0.1:3100",
      origin: "http://127.0.0.1:3100",
    },
    body: JSON.stringify(valid()),
  });
  assert.equal((await POST(request)).status, 200);
});
