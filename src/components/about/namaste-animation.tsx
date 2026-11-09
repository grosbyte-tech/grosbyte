"use client";

import { useEffect, useState } from "react";
import { GradientText } from "@/components/ui/gradient-text";

/**
 * Exact vector paths parsed directly from ARAP007.TTF
 * Mapping:
 * - g  -> 'na'  (न)
 * - d  -> 'ma'  (म)
 * - :  -> 'half-sa' (स्)
 * - t  -> 'ta'  (त)
 * - ]  -> 'e-kar' matra (े)
 * Total glyph composition: "नमस्ते"
 */
const GLYPHS = [
  {
    id: "glyph-na",
    label: "na",
    delay: 0.1,
    path: "M 343.0 395.0 L 343.0 732.0 Q 343.0 765.0 361.0 792.0 Q 379.0 819.0 410.0 824.0 Q 410.0 818.0 413.0 814.0 Q 420.0 805.0 441.0 804.0 Q 458.0 808.0 458.0 827.0 Q 458.0 842.0 444.0 852.0 Q 428.0 865.0 400.0 863.0 Q 361.0 861.0 304.0 798.0 Q 277.0 765.0 250.0 732.0 L 250.0 543.0 L 148.0 543.0 Q 199.0 578.0 199.0 640.0 Q 199.0 676.0 177.0 700.0 Q 155.0 724.0 118.0 725.0 Q 90.0 726.0 48.5 669.5 Q 7.0 613.0 5.0 566.0 Q 2.0 509.0 11.0 491.0 Q 29.0 455.0 86.0 455.0 L 250.0 455.0 L 250.0 405.0 Q 250.0 385.0 248.0 383.0 Q 241.0 377.0 206.0 377.0 L 3.0 377.0 L -29.0 297.0 L 245.0 297.0 L 343.0 395.0 Z M 97.0 543.0 Q 96.0 543.0 91.5 543.5 Q 87.0 544.0 74.0 571.0 Q 73.0 573.0 73.0 603.0 Q 73.0 625.0 86.0 642.0 Q 99.0 659.0 107.0 657.0 Q 131.0 651.0 131.0 616.0 Q 131.0 586.0 119.5 564.0 Q 108.0 542.0 97.0 543.0 Z M 363.0 377.0 L 291.0 297.0 L 461.0 297.0 L 493.0 377.0 L 363.0 377.0 Z ",
  },
  {
    id: "glyph-ma",
    label: "ma",
    delay: 0.35,
    path: "M 377.0 297.0 L 507.0 297.0 L 590.0 390.0 L 590.0 484.0 L 728.0 484.0 L 728.0 408.0 Q 728.0 388.0 720.5 382.5 Q 713.0 377.0 694.0 377.0 L 614.0 377.0 L 546.0 297.0 L 737.0 297.0 Q 740.0 297.0 779.5 344.0 Q 819.0 391.0 820.0 397.0 L 820.0 732.0 Q 820.0 765.0 838.0 792.0 Q 856.0 819.0 887.0 824.0 Q 887.0 818.0 890.0 814.0 Q 897.0 805.0 918.0 804.0 Q 935.0 808.0 935.0 827.0 Q 935.0 842.0 921.0 852.0 Q 905.0 865.0 877.0 863.0 Q 843.0 861.0 729.0 734.0 L 728.0 576.0 L 590.0 576.0 L 590.0 650.0 Q 590.0 710.0 551.0 710.0 Q 529.0 710.0 508.0 686.0 Q 494.0 670.0 463.0 608.0 Q 439.0 560.0 439.0 533.0 Q 439.0 503.0 455.0 493.0 Q 468.0 484.0 499.0 484.0 L 499.0 417.0 Q 499.0 392.0 498.0 388.0 Q 494.0 377.0 478.0 377.0 L 409.0 377.0 L 377.0 297.0 Z M 839.0 377.0 L 777.0 297.0 L 967.0 297.0 L 999.0 377.0 L 839.0 377.0 Z ",
  },
  {
    id: "glyph-half-sa",
    label: "half-sa",
    delay: 0.6,
    path: "M 1321.0 588.0 Q 1309.0 597.0 1282.0 600.0 Q 1230.0 605.0 1201.0 548.0 Q 1195.0 561.0 1170.0 593.0 Q 1128.0 638.0 1087.0 638.0 Q 1065.0 638.0 1039.0 628.0 L 1102.0 797.0 Q 1120.0 814.0 1142.0 814.0 Q 1162.0 814.0 1176.0 797.0 L 1167.0 877.0 Q 1153.0 886.0 1133.0 886.0 Q 1089.0 886.0 1069.0 848.0 L 992.0 666.0 Q 942.0 548.0 942.0 508.0 Q 942.0 483.0 961.0 483.0 Q 974.0 483.0 1018.5 502.5 Q 1063.0 522.0 1084.0 522.0 Q 1128.0 522.0 1128.0 451.0 Q 1128.0 425.0 1103.0 401.0 Q 1078.0 377.0 1053.0 377.0 L 925.0 377.0 L 893.0 297.0 L 1043.0 297.0 Q 1089.0 321.0 1161.0 377.0 Q 1209.0 433.0 1209.0 494.0 Q 1220.0 501.0 1230.0 509.0 Q 1248.0 520.0 1263.0 519.0 Q 1297.0 516.0 1321.0 487.0 L 1321.0 588.0 Z M 1205.0 377.0 L 1103.0 297.0 L 1313.0 297.0 L 1345.0 377.0 L 1205.0 377.0 Z ",
  },
  {
    id: "glyph-ta",
    label: "ta",
    delay: 0.85,
    path: "M 1646.0 397.0 L 1646.0 731.0 Q 1646.0 777.0 1666.0 804.0 Q 1683.0 826.0 1703.0 826.0 Q 1709.0 826.0 1713.0 823.0 Q 1713.0 817.0 1716.0 813.0 Q 1723.0 804.0 1744.0 803.0 Q 1761.0 807.0 1761.0 826.0 Q 1761.0 841.0 1747.0 851.0 Q 1731.0 864.0 1703.0 862.0 Q 1646.0 859.0 1550.0 734.0 L 1550.0 544.0 L 1479.0 544.0 Q 1435.0 544.0 1431.0 545.0 Q 1387.0 575.0 1387.0 621.0 Q 1387.0 645.0 1402.0 672.0 Q 1435.0 731.0 1481.0 807.0 L 1449.0 830.0 Q 1414.0 777.0 1388.0 736.0 Q 1325.0 637.0 1320.0 614.0 Q 1316.0 596.0 1316.0 579.0 Q 1316.0 524.0 1350.0 481.0 Q 1381.0 443.0 1404.0 449.0 Q 1404.0 449.0 1550.0 449.0 L 1550.0 405.0 Q 1550.0 377.0 1514.0 377.0 L 1304.0 377.0 L 1272.0 297.0 L 1542.0 297.0 L 1646.0 397.0 Z M 1674.0 377.0 L 1592.0 297.0 L 1762.0 297.0 L 1794.0 377.0 L 1674.0 377.0 Z ",
  },
  {
    id: "glyph-e-kar",
    label: "e-kar",
    delay: 1.1,
    path: "M 1555.0 304.0 Q 1507.0 220.0 1426.0 220.0 Q 1415.0 220.0 1398.0 223.0 L 1337.0 139.0 Q 1361.0 135.0 1377.0 135.0 Q 1451.0 135.0 1509.0 189.0 Q 1541.0 219.0 1599.0 304.0 L 1555.0 304.0 Z ",
  },
];

export function NamasteAnimation() {
  const [isFormed, setIsFormed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormed(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="namaste-hero-visual" aria-label="नमस्ते">
      {/* Top Large Display Calligraphy Vector */}
      <div className={`namaste-svg-wrapper ${isFormed ? "is-formed" : ""}`}>
        <svg
          viewBox="-40 120 1870 770"
          className="namaste-svg"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Grosbyte Brand Gradient */}
            <linearGradient
              id="grosbyte-blue-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0966fa" />
              <stop offset="50%" stopColor="#0084ff" />
              <stop offset="100%" stopColor="#00d2ff" />
            </linearGradient>

            {/* Glowing Accent Filter */}
            <filter
              id="grosbyte-glow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {GLYPHS.map((glyph) => (
            <path
              key={glyph.id}
              d={glyph.path}
              className="namaste-forming-path"
              style={{ animationDelay: `${glyph.delay}s` }}
              fill="url(#grosbyte-blue-gradient)"
              stroke="url(#grosbyte-blue-gradient)"
            />
          ))}
        </svg>

        {/* Accessible screen-reader text */}
        <span className="sr-only">नमस्ते</span>
      </div>

      {/* Brand tagline placed cleanly at bottom */}
      <div className="namaste-brand-tagline">
        <p className="namaste-brand-line">
          <span className="namaste-brand-intro">We are</span>{" "}
          <GradientText className="namaste-brand-name">Grosbyte</GradientText>
        </p>
        <p className="namaste-brand-desc">
          Engineering modern digital solutions from Nepal to the world.
        </p>
      </div>
    </div>
  );
}
