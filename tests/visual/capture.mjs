import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { chromium } from "playwright";

const PORT = 3100;
const BASE_URL = `http://127.0.0.1:${PORT}`;

const VIEWPORTS = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

const ROUTES = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
  { name: "blogs", path: "/blogs" },
  { name: "blog-content-plan", path: "/blogs/building-a-content-plan" },
  { name: "blog-ai-review", path: "/blogs/ai-assistance-with-human-review" },
  { name: "blog-seo-launch", path: "/blogs/seo-before-a-website-launch" },
  { name: "blog-business-site", path: "/blogs/planning-a-business-website" },
  { name: "blog-first-automation", path: "/blogs/choosing-your-first-automation" },
  { name: "blog-software-or-tools", path: "/blogs/custom-software-or-existing-tools" },
  { name: "custom-software", path: "/custom-software-development" },
  { name: "web-mobile", path: "/web-mobile-applications" },
  { name: "digital-marketing", path: "/digital-marketing" },
  { name: "service-ecommerce", path: "/services/website-ecommerce-development" },
  { name: "service-crm-erp", path: "/services/crm-erp-solutions" },
  { name: "service-automation", path: "/services/business-automation" },
  { name: "service-ai-automation", path: "/services/ai-automation-integrations" },
  { name: "service-branding-design", path: "/services/branding-design" },
  { name: "service-seo", path: "/services/seo" },
  { name: "service-social-media", path: "/services/social-media-marketing" },
  { name: "not-found", path: "/_not-found" },
];

const isBaseline = process.argv.includes("--baseline");
const targetDir = path.resolve(`tests/visual/${isBaseline ? "baseline" : "current"}`);

fs.mkdirSync(targetDir, { recursive: true });

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.status < 500) return true;
    } catch {}
    await new Promise((r) => setTimeout(r, 400));
  }
  throw new Error(`Server at ${url} failed to respond within ${timeoutMs}ms`);
}

async function main() {
  console.log(`========================================`);
  console.log(`VISUAL REGRESSION CAPTURE: ${isBaseline ? "BASELINE" : "CURRENT"}`);
  console.log(`Target directory: ${targetDir}`);
  console.log(`========================================`);

  let serverProcess = null;
  let serverRunning = false;
  try {
    const res = await fetch(`${BASE_URL}/api/health`);
    if (res.status === 200) serverRunning = true;
  } catch {}

  if (!serverRunning) {
    console.log(`Starting Next.js production server on port ${PORT}...`);
    serverProcess = spawn("npx", ["next", "start", "-p", String(PORT)], {
      stdio: "ignore",
      detached: false,
    });
    await waitForServer(`${BASE_URL}/api/health`);
    console.log(`Server ready on ${BASE_URL}`);
  } else {
    console.log(`Reusing running server on ${BASE_URL}`);
  }

  const browser = await chromium.launch({
    executablePath: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
    headless: true,
  });

  try {
    let captured = 0;
    for (const route of ROUTES) {
      for (const vp of VIEWPORTS) {
        const page = await browser.newPage({
          viewport: { width: vp.width, height: vp.height },
          deviceScaleFactor: 1,
        });

        await page.emulateMedia({ reducedMotion: "reduce" });

        const url = `${BASE_URL}${route.path}`;
        try {
          await page.goto(url, { waitUntil: "networkidle", timeout: 15000 });
        } catch {
          await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
        }

        // Disable all CSS animations and transitions for deterministic capture
        await page.addStyleTag({
          content: `
            *, *::before, *::after {
              animation-duration: 0s !important;
              animation-delay: 0s !important;
              transition-duration: 0s !important;
              transition-delay: 0s !important;
            }
          `,
        });

        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(100);

        const filename = `${route.name}_${vp.name}.png`;
        const filepath = path.join(targetDir, filename);

        await page.screenshot({ path: filepath, fullPage: true });
        captured++;
        process.stdout.write(`Captured [${captured}/${ROUTES.length * VIEWPORTS.length}] ${filename}\r`);

        await page.close();
      }
    }
    console.log(`\nSuccessfully captured ${captured} screenshots into ${targetDir}`);
  } finally {
    await browser.close();
    if (serverProcess) {
      serverProcess.kill();
    }
  }
}

main().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
