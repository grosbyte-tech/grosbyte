import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const BASELINE_DIR = path.resolve("tests/visual/baseline");
const CURRENT_DIR = path.resolve("tests/visual/current");
const DIFF_DIR = path.resolve("tests/visual/diffs");

fs.mkdirSync(DIFF_DIR, { recursive: true });

async function main() {
  console.log("==========================================");
  console.log("VISUAL REGRESSION PIXEL DIFF COMPARISON");
  console.log("==========================================");

  if (!fs.existsSync(BASELINE_DIR) || !fs.existsSync(CURRENT_DIR)) {
    console.error("Missing baseline or current directory. Run capture first.");
    process.exit(1);
  }

  const baselineFiles = fs.readdirSync(BASELINE_DIR).filter((f) => f.endsWith(".png"));
  if (baselineFiles.length === 0) {
    console.error("No baseline images found.");
    process.exit(1);
  }

  let totalCompared = 0;
  let totalMismatched = 0;
  const results = [];

  for (const file of baselineFiles) {
    const basePath = path.join(BASELINE_DIR, file);
    const currPath = path.join(CURRENT_DIR, file);

    if (!fs.existsSync(currPath)) {
      console.warn(`Missing current screenshot for ${file}`);
      totalMismatched++;
      results.push({ file, status: "MISSING", diffPercent: 100 });
      continue;
    }

    const img1 = PNG.sync.read(fs.readFileSync(basePath));
    const img2 = PNG.sync.read(fs.readFileSync(currPath));

    const width = Math.max(img1.width, img2.width);
    const height = Math.max(img1.height, img2.height);

    // Normalize buffers if dimensions differ slightly due to document flow
    const padded1 = padImage(img1, width, height);
    const padded2 = padImage(img2, width, height);

    const diff = new PNG({ width, height });

    const diffPixels = pixelmatch(padded1.data, padded2.data, diff.data, width, height, {
      threshold: 0.1,
      alpha: 0.5,
    });

    const diffPercent = (diffPixels / (width * height)) * 100;
    totalCompared++;

    const isMatch = diffPercent <= 0.1;
    if (!isMatch) {
      totalMismatched++;
      const diffPath = path.join(DIFF_DIR, file);
      fs.writeFileSync(diffPath, PNG.sync.write(diff));
    }

    results.push({
      file,
      diffPixels,
      totalPixels: width * height,
      diffPercent: Number(diffPercent.toFixed(3)),
      status: isMatch ? "PASS" : "FAIL",
    });

    const mark = isMatch ? "✓" : "✗";
    console.log(`${mark} ${file}: ${diffPercent.toFixed(3)}% diff (${diffPixels} pixels)`);
  }

  console.log("==========================================");
  console.log(`SUMMARY: ${totalCompared - totalMismatched} PASSED, ${totalMismatched} FAILED (${totalCompared} total)`);
  console.log("==========================================");

  fs.writeFileSync(
    path.join(DIFF_DIR, "report.json"),
    JSON.stringify({ timestamp: new Date().toISOString(), totalCompared, totalMismatched, results }, null, 2),
  );

  if (totalMismatched > 0) {
    console.error(`Visual regression detected differences in ${totalMismatched} screenshots.`);
    process.exit(1);
  }
}

function padImage(src, width, height) {
  if (src.width === width && src.height === height) return src;
  const dst = new PNG({ width, height });
  dst.data.fill(255); // Fill with white background
  for (let y = 0; y < src.height; y++) {
    for (let x = 0; x < src.width; x++) {
      const srcIdx = (src.width * y + x) << 2;
      const dstIdx = (width * y + x) << 2;
      dst.data[dstIdx] = src.data[srcIdx];
      dst.data[dstIdx + 1] = src.data[srcIdx + 1];
      dst.data[dstIdx + 2] = src.data[srcIdx + 2];
      dst.data[dstIdx + 3] = src.data[srcIdx + 3];
    }
  }
  return dst;
}

main().catch((err) => {
  console.error("Comparison failed:", err);
  process.exit(1);
});
