import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const APP_DIR = path.resolve(".next/server/app");

console.log("==========================================");
console.log("GROSBYTE TECHNOLOGIES - AUTOMATED SEO TEST");
console.log("==========================================");

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`✓ PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`✗ FAIL: ${name}`);
    console.error(`  ${err.message}`);
    failed++;
  }
}

// 1. ROBOTS.TXT VERIFICATION
test("robots.txt existence and directives", () => {
  const robotsPath = path.join(APP_DIR, "robots.txt.body");
  assert.ok(fs.existsSync(robotsPath), "robots.txt.body must exist in build output");

  const content = fs.readFileSync(robotsPath, "utf-8");
  assert.match(content, /User-Agent:\s*\*/i, "Must contain User-Agent: *");
  assert.match(content, /Allow:\s*\//i, "Must allow root /");
  assert.match(content, /Disallow:\s*\/api\//i, "Must disallow /api/");
  assert.match(content, /Sitemap:\s*https:\/\/grosbyte\.com\/sitemap\.xml/i, "Must reference canonical sitemap");
});

// 2. SITEMAP.XML VERIFICATION
test("sitemap.xml completeness, canonical URLs and zero duplicates", () => {
  const sitemapPath = path.join(APP_DIR, "sitemap.xml.body");
  assert.ok(fs.existsSync(sitemapPath), "sitemap.xml.body must exist in build output");

  const content = fs.readFileSync(sitemapPath, "utf-8");
  assert.ok(content.startsWith("<?xml"), "Must be XML document");
  assert.ok(content.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'), "Must have sitemap namespace");

  const locMatches = [...content.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  assert.equal(locMatches.length, 20, `Expected 20 URLs in sitemap, got ${locMatches.length}`);

  // Check unique URLs
  const uniqueUrls = new Set(locMatches);
  assert.equal(uniqueUrls.size, locMatches.length, "Sitemap must have 0 duplicate URLs");

  // Check all URLs are absolute HTTPS grosbyte.com
  for (const url of locMatches) {
    assert.ok(url.startsWith("https://grosbyte.com"), `URL must start with https://grosbyte.com: ${url}`);
    assert.ok(!url.includes("/api/"), `API routes must be excluded: ${url}`);
    assert.ok(url !== "https://grosbyte.com/services", `Redirecting /services route must be excluded: ${url}`);
  }

  // Check blog posts have lastmod
  const lastmodMatches = [...content.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map(m => m[1]);
  assert.equal(lastmodMatches.length, 6, `Expected 6 lastmod entries for blog posts, got ${lastmodMatches.length}`);
});

// 3. METADATA TESTS ACROSS SAMPLE PAGES
const samplePages = [
  { file: "index.html", expectedCanonical: "https://grosbyte.com" },
  { file: "about.html", expectedCanonical: "https://grosbyte.com/about" },
  { file: "contact.html", expectedCanonical: "https://grosbyte.com/contact" },
  { file: "custom-software-development.html", expectedCanonical: "https://grosbyte.com/custom-software-development" },
  { file: "web-mobile-applications.html", expectedCanonical: "https://grosbyte.com/web-mobile-applications" },
  { file: "digital-marketing.html", expectedCanonical: "https://grosbyte.com/digital-marketing" },
  { file: "blogs.html", expectedCanonical: "https://grosbyte.com/blogs" },
  { file: "blogs/planning-a-business-website.html", expectedCanonical: "https://grosbyte.com/blogs/planning-a-business-website" },
  { file: "services/website-ecommerce-development.html", expectedCanonical: "https://grosbyte.com/services/website-ecommerce-development" },
];

test("Metadata correctness, unique titles, and canonical normalization", () => {
  const seenCanonicals = new Set();

  for (const { file, expectedCanonical } of samplePages) {
    const filePath = path.join(APP_DIR, file);
    assert.ok(fs.existsSync(filePath), `HTML file must exist: ${file}`);

    const html = fs.readFileSync(filePath, "utf-8");

    // Title test
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    assert.ok(titleMatch, `Page must have <title>: ${file}`);
    const title = titleMatch[1];
    assert.ok(title.length > 5, `Title must be descriptive: ${title}`);
    assert.ok(!title.includes("Grosbyte | Grosbyte Technologies"), `Duplicate brand suffix detected in ${file}: ${title}`);
    assert.ok(!title.includes("Grosbyte Technologies | Grosbyte Technologies"), `Duplicate template suffix detected in ${file}: ${title}`);

    // Meta description test
    const descMatch = html.match(/<meta name="description" content="(.*?)"\/>/);
    assert.ok(descMatch, `Page must have meta description: ${file}`);
    assert.ok(descMatch[1].length > 15, `Description must be substantive: ${descMatch[1]}`);

    // Canonical link test
    const canonicalMatch = html.match(/<link rel="canonical" href="(.*?)"\/>/);
    assert.ok(canonicalMatch, `Page must have canonical link: ${file}`);
    assert.equal(canonicalMatch[1], expectedCanonical, `Canonical mismatch for ${file}`);
    seenCanonicals.add(canonicalMatch[1]);

    // OpenGraph & Twitter image test
    assert.ok(html.includes('property="og:image"'), `Page must have og:image: ${file}`);
    assert.ok(html.includes('name="twitter:card" content="summary_large_image"'), `Page must have twitter summary_large_image: ${file}`);
  }

  // Ensure canonicals are distinct and do not all resolve to homepage
  assert.equal(seenCanonicals.size, samplePages.length, "All sampled pages must have distinct canonical URLs");
});

// 4. STRUCTURED DATA (JSON-LD) TESTS
test("Structured data validity and Schema.org entity presence", () => {
  // Test root layout schemas in index.html
  const indexHtml = fs.readFileSync(path.join(APP_DIR, "index.html"), "utf-8");
  const jsonLdMatches = [...indexHtml.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)];
  assert.ok(jsonLdMatches.length >= 1, "index.html must have JSON-LD script");

  let hasOrg = false;
  let hasWebSite = false;

  for (const match of jsonLdMatches) {
    const data = JSON.parse(match[1]);
    const items = Array.isArray(data) ? data : [data];
    for (const item of items) {
      if (item["@type"] === "Organization") hasOrg = true;
      if (item["@type"] === "WebSite") hasWebSite = true;
    }
  }

  assert.ok(hasOrg, "Organization schema must be present");
  assert.ok(hasWebSite, "WebSite schema must be present");

  // Test BlogPosting schema in blog post
  const blogHtml = fs.readFileSync(path.join(APP_DIR, "blogs/planning-a-business-website.html"), "utf-8");
  const blogJsonLd = [...blogHtml.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)];
  let hasBlogPosting = false;
  let hasBreadcrumbs = false;

  for (const match of blogJsonLd) {
    const data = JSON.parse(match[1]);
    const items = Array.isArray(data) ? data : [data];
    for (const item of items) {
      if (item["@type"] === "BlogPosting") {
        hasBlogPosting = true;
        assert.ok(item.headline, "BlogPosting must have headline");
        assert.ok(item.datePublished, "BlogPosting must have datePublished");
        assert.ok(item.author, "BlogPosting must have author");
        assert.ok(item.publisher, "BlogPosting must have publisher");
      }
      if (item["@type"] === "BreadcrumbList") {
        hasBreadcrumbs = true;
        assert.ok(Array.isArray(item.itemListElement), "BreadcrumbList must have itemListElement");
      }
    }
  }
  assert.ok(hasBlogPosting, "BlogPosting schema must be present on blog post");
  assert.ok(hasBreadcrumbs, "BreadcrumbList schema must be present on blog post");

  // Test Service schema on service page
  const serviceHtml = fs.readFileSync(path.join(APP_DIR, "custom-software-development.html"), "utf-8");
  const serviceJsonLd = [...serviceHtml.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)];
  let hasService = false;

  for (const match of serviceJsonLd) {
    const data = JSON.parse(match[1]);
    const items = Array.isArray(data) ? data : [data];
    for (const item of items) {
      if (item["@type"] === "Service") {
        hasService = true;
        assert.equal(item.name, "Custom Software Development");
        assert.ok(item.provider, "Service must have provider");
      }
    }
  }
  assert.ok(hasService, "Service schema must be present on service page");
});

// 5. NOT-FOUND (404) VERIFICATION
test("Custom 404 page contains noindex directive and branded recovery UI", () => {
  const notFoundPath = path.join(APP_DIR, "_not-found.html");
  assert.ok(fs.existsSync(notFoundPath), "_not-found.html must exist");

  const html = fs.readFileSync(notFoundPath, "utf-8");
  assert.ok(html.includes('<meta name="robots" content="noindex"/>'), "404 page must have noindex robots meta");
  assert.ok(html.includes("Page"), "Must render Page Not Found heading");
  assert.ok(html.includes("Not Found"), "Must render Not Found text");
  assert.ok(html.includes('href="/"'), "Must have link to return home");
  assert.ok(html.includes('href="/custom-software-development"'), "Must link to main services");
});

console.log("==========================================");
console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log("==========================================");

if (failed > 0) {
  process.exit(1);
}
