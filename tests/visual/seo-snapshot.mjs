import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const APP_DIR = path.resolve(".next/server/app");
const SNAPSHOT_FILE = path.resolve("tests/visual/seo-snapshot.json");

const ROUTES_TO_SNAPSHOT = [
  { file: "index.html", url: "/" },
  { file: "about.html", url: "/about" },
  { file: "contact.html", url: "/contact" },
  { file: "blogs.html", url: "/blogs" },
  { file: "blogs/building-a-content-plan.html", url: "/blogs/building-a-content-plan" },
  { file: "blogs/ai-assistance-with-human-review.html", url: "/blogs/ai-assistance-with-human-review" },
  { file: "blogs/seo-before-a-website-launch.html", url: "/blogs/seo-before-a-website-launch" },
  { file: "blogs/planning-a-business-website.html", url: "/blogs/planning-a-business-website" },
  { file: "blogs/choosing-your-first-automation.html", url: "/blogs/choosing-your-first-automation" },
  { file: "blogs/custom-software-or-existing-tools.html", url: "/blogs/custom-software-or-existing-tools" },
  { file: "custom-software-development.html", url: "/custom-software-development" },
  { file: "web-mobile-applications.html", url: "/web-mobile-applications" },
  { file: "digital-marketing.html", url: "/digital-marketing" },
  { file: "services/website-ecommerce-development.html", url: "/services/website-ecommerce-development" },
  { file: "services/crm-erp-solutions.html", url: "/services/crm-erp-solutions" },
  { file: "services/business-automation.html", url: "/services/business-automation" },
  { file: "services/ai-automation-integrations.html", url: "/services/ai-automation-integrations" },
  { file: "services/branding-design.html", url: "/services/branding-design" },
  { file: "services/seo.html", url: "/services/seo" },
  { file: "services/social-media-marketing.html", url: "/services/social-media-marketing" },
  { file: "_not-found.html", url: "/_not-found" },
];

function extractSeoData(html) {
  const title = (html.match(/<title>(.*?)<\/title>/) || [])[1] || "";
  const desc = (html.match(/<meta name="description" content="(.*?)"\/>/) || [])[1] || "";
  const canonical = (html.match(/<link rel="canonical" href="(.*?)"\/>/) || [])[1] || "";
  const robots = (html.match(/<meta name="robots" content="(.*?)"\/>/) || [])[1] || "";
  const ogTitle = (html.match(/<meta property="og:title" content="(.*?)"\/>/) || [])[1] || "";
  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(
    (m) => m[1],
  );

  return { title, desc, canonical, robots, ogTitle, jsonLd };
}

const isUpdate = process.argv.includes("--update");

function main() {
  console.log("==========================================");
  console.log(`SEO SNAPSHOT TEST ${isUpdate ? "(UPDATE)" : "(VERIFY)"}`);
  console.log("==========================================");

  const currentSnapshots = {};

  for (const { file, url } of ROUTES_TO_SNAPSHOT) {
    const filePath = path.join(APP_DIR, file);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Build HTML missing for ${url}: ${filePath}`);
    }
    const html = fs.readFileSync(filePath, "utf-8");
    currentSnapshots[url] = extractSeoData(html);
  }

  if (isUpdate || !fs.existsSync(SNAPSHOT_FILE)) {
    fs.writeFileSync(SNAPSHOT_FILE, JSON.stringify(currentSnapshots, null, 2));
    console.log(`Saved SEO baseline snapshot for ${ROUTES_TO_SNAPSHOT.length} routes to ${SNAPSHOT_FILE}`);
    return;
  }

  const baseline = JSON.parse(fs.readFileSync(SNAPSHOT_FILE, "utf-8"));
  let passed = 0;
  let failed = 0;

  for (const { url } of ROUTES_TO_SNAPSHOT) {
    try {
      assert.deepEqual(currentSnapshots[url], baseline[url], `SEO metadata mismatch on route: ${url}`);
      console.log(`✓ PASS: ${url}`);
      passed++;
    } catch (err) {
      console.error(`✗ FAIL: ${url}`);
      console.error(err.message);
      failed++;
    }
  }

  console.log("==========================================");
  console.log(`SEO SNAPSHOT SUMMARY: ${passed} PASSED, ${failed} FAILED`);
  console.log("==========================================");

  if (failed > 0) process.exit(1);
}

main();
