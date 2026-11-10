"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "@/contexts/language-context";

export function HeroIllustration() {
  const reduceMotion = useReducedMotion();
  const { t } = useTranslation();

  const dx = 52;
  const dy = 30;

  // Background isometric diamond boxes that form when loaded
  const backgroundBoxes = useMemo(() => {
    const items: Array<{
      id: string;
      d: string;
      cx: number;
      cy: number;
      delay: number;
      isAccent: boolean;
    }> = [];

    for (let row = -2; row <= 16; row++) {
      for (let col = -2; col <= 13; col++) {
        const cx = col * (dx * 2) + (row % 2) * dx;
        const cy = row * dy;

        if (cx >= -40 && cx <= 660 && cy >= -20 && cy <= 520) {
          // Distance from center of grid
          const dist = Math.hypot(cx - 320, cy - 260);
          const delay = Math.min(0.8, (dist / 440) * 0.65);
          const d = `M ${cx} ${cy - dy} L ${cx + dx} ${cy} L ${cx} ${cy + dy} L ${cx - dx} ${cy} Z`;

          // Subtle filled accent boxes like in the reference image
          const isAccent =
            (cx === 312 && cy === 390) ||
            (cx === 208 && cy === 270) ||
            (cx === 468 && cy === 270) ||
            (cx === 156 && cy === 330) ||
            (cx === 520 && cy === 330);

          items.push({
            id: `box-${row}-${col}`,
            d,
            cx,
            cy,
            delay,
            isAccent,
          });
        }
      }
    }

    return items;
  }, [dx, dy]);

  return (
    <div className="relative w-full max-w-[640px] xl:max-w-[680px] 2xl:max-w-[720px] mx-auto select-none">
      <svg
        viewBox="45 55 530 455"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible drop-shadow-[0_20px_40px_rgba(9,102,250,0.06)]"
        aria-hidden="true"
      >
        <defs>
          {/* Radial mask for soft fade of grid perimeter */}
          <radialGradient id="gridMaskGradient" cx="50%" cy="52%" r="52%">
            <stop offset="45%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="78%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <mask id="gridMask">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#gridMaskGradient)" />
          </mask>

          {/* Gradients for platforms and components */}
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#f0f7ff" />
            <stop offset="100%" stopColor="#dbeafe" />
          </linearGradient>

          <linearGradient id="serverFace" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="serverFaceAlt" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#253349" />
            <stop offset="100%" stopColor="#162235" />
          </linearGradient>

          <linearGradient id="serverSide" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a101d" />
            <stop offset="100%" stopColor="#05080f" />
          </linearGradient>

          <linearGradient id="plateTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>

          <linearGradient id="pedestalSideLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          <linearGradient id="pedestalSideRight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          <linearGradient id="windowTopBar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          {/* Realistic soft drop shadows */}
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="12"
              floodColor="#0966fa"
              floodOpacity="0.09"
            />
          </filter>

          <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="10"
              floodColor="#0f172a"
              floodOpacity="0.08"
            />
          </filter>
        </defs>

        {/* ========================================================
            1. ISOMETRIC GRID BOXES (Animated and formed on load)
            ======================================================== */}
        <g mask="url(#gridMask)">
          {backgroundBoxes.map((box) => (
            <motion.path
              key={box.id}
              d={box.d}
              fill={box.isAccent ? "#0966fa" : "none"}
              stroke="#e2e8f0"
              strokeWidth="1.1"
              initial={
                reduceMotion
                  ? { pathLength: 1, opacity: 0.85, fillOpacity: box.isAccent ? 0.035 : 0 }
                  : { pathLength: 0, opacity: 0, fillOpacity: 0 }
              }
              animate={{
                pathLength: 1,
                opacity: 0.85,
                fillOpacity: box.isAccent ? 0.035 : 0,
              }}
              transition={{
                duration: 1.25,
                delay: box.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}
        </g>

        {/* ========================================================
            2. BLUE NETWORK BUS & CONNECTION TRACES (Forming on load)
            ======================================================== */}
        <g>
          {/* Trace 1: From Product window to Central Server (single clean connected line) */}
          <motion.path
            d="M 175 210 L 175 255 L 245 295"
            stroke="#0966fa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={reduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Trace 2: From Cloud down to Central Server */}
          <motion.path
            d="M 465 220 L 415 248 L 375 272"
            stroke="#0966fa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={reduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Trace 3: From Central Server to Systems Rack */}
          <motion.path
            d="M 370 345 L 435 382 L 485 353"
            stroke="#0966fa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={reduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Network Junction Dots (Only on connected lines) */}
          {[
            { cx: 175, cy: 255, delay: 0.8 },
            { cx: 415, cy: 248, delay: 0.85 },
            { cx: 435, cy: 382, delay: 0.95 },
            { cx: 485, cy: 353, delay: 1.1 },
          ].map((dot, idx) => (
            <motion.g
              key={`node-${idx}`}
              initial={reduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, delay: dot.delay, ease: "backOut" }}
              style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}
            >
              <circle cx={dot.cx} cy={dot.cy} r="4.5" fill="#0966fa" />
              <circle cx={dot.cx} cy={dot.cy} r="2" fill="#ffffff" />
            </motion.g>
          ))}
        </g>

        {/* ========================================================
            3. NODE: PRODUCT (Floating Code Window, Upper Left)
            ======================================================== */}
        <g id="product-window-group">
          {/* Window Drop Shadow on floor */}
          <polygon
            points="140,245 220,290 170,320 90,275"
            fill="#0f172a"
            fillOpacity="0.05"
            filter="url(#softShadow)"
          />

          {/* Floating Window Unit */}
          <g>
            {/* Window Left Depth Face */}
            <polygon
              points="105,170 115,164 115,248 105,254"
              fill="#cbd5e1"
            />
            {/* Window Bottom Depth Face */}
            <polygon
              points="105,254 115,248 205,300 195,306"
              fill="#94a3b8"
            />

            {/* Window Front Main Isometric Face */}
            <polygon
              points="115,140 205,192 205,296 115,244"
              fill="#ffffff"
              stroke="#e2e8f0"
              strokeWidth="1.5"
            />

            {/* Dark Title Bar */}
            <polygon
              points="115,140 205,192 205,214 115,162"
              fill="url(#windowTopBar)"
            />

            {/* Title Bar Window Dots */}
            <circle cx="127" cy="151" r="2.5" fill="#ef4444" />
            <circle cx="134" cy="155" r="2.5" fill="#f59e0b" />
            <circle cx="141" cy="159" r="2.5" fill="#10b981" />

            {/* Isometric Code Symbol </ > inside window body */}
            <g
              transform="matrix(0.866, 0.5, 0, 1, 130, 202)"
              className="text-[#0966fa]"
            >
              {/* Left bracket < */}
              <path
                d="M 18 10 L 8 20 L 18 30"
                stroke="#0966fa"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Center slash / */}
              <line
                x1="28"
                y1="8"
                x2="22"
                y2="32"
                stroke="#00d2ff"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Right bracket > */}
              <path
                d="M 32 10 L 42 20 L 32 30"
                stroke="#0966fa"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>

            {/* Window base support stand */}
            <polygon
              points="130,265 180,294 170,300 120,271"
              fill="#ffffff"
              stroke="#e2e8f0"
              strokeWidth="1"
            />
          </g>

          {/* Guide Line & Label Badge: PRODUCT */}
          <line
            x1="160"
            y1="166"
            x2="160"
            y2="100"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="160" cy="166" r="2.5" fill="#0966fa" />

          {/* Pill Badge PRODUCT */}
          <g transform="translate(130, 74)">
            <rect
              width="60"
              height="22"
              rx="4"
              fill="#ffffff"
              stroke="#e2e8f0"
              strokeWidth="1"
              filter="url(#cardShadow)"
            />
            <text
              x="30"
              y="15"
              textAnchor="middle"
              fill="#475569"
              fontSize="9"
              fontWeight="700"
              letterSpacing="0.08em"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              {t("hero.badgeProduct") || "PRODUCT"}
            </text>
          </g>
        </g>

        {/* ========================================================
            4. NODE: CLOUD (Cloud Infrastructure, Upper Right)
            ======================================================== */}
        <g id="cloud-group">
          {/* Cloud Pedestal Base */}
          <g>
            {/* Pedestal Bottom Shadow */}
            <polygon
              points="480,205 540,240 480,275 420,240"
              fill="#0f172a"
              fillOpacity="0.05"
            />
            {/* Pedestal Top Surface */}
            <polygon
              points="480,200 535,232 480,264 425,232"
              fill="url(#plateTop)"
              stroke="#e2e8f0"
              strokeWidth="1"
            />
            {/* Pedestal Left Edge */}
            <polygon
              points="425,232 480,264 480,272 425,240"
              fill="url(#pedestalSideLeft)"
            />
            {/* Pedestal Right Edge */}
            <polygon
              points="480,264 535,232 535,240 480,272"
              fill="url(#pedestalSideRight)"
            />
          </g>

          {/* Stylized Volumetric Cloud (Seated directly on the pedestal base) */}
          {/* Cloud Contact Shadow on Pedestal Surface */}
          <ellipse
            cx="480"
            cy="232"
            rx="38"
            ry="11"
            fill="#0966fa"
            fillOpacity="0.10"
          />

          <g transform="translate(429, 172)">
            {/* Cloud 3D Back/Depth Layer */}
            <path
              d="M 28 65 C 16 65 8 55 10 44 C 11 34 20 28 30 29 C 34 16 48 8 63 12 C 75 15 84 25 85 36 C 94 36 102 44 100 54 C 99 64 89 67 80 67 Z"
              fill="#dbeafe"
            />

            {/* Cloud Front Main Shape */}
            <path
              d="M 24 60 C 12 60 4 50 6 39 C 7 29 16 23 26 24 C 30 11 44 3 59 7 C 71 10 80 20 81 31 C 90 31 98 39 96 49 C 95 59 85 62 76 62 Z"
              fill="url(#cloudGrad)"
              stroke="#bfdbfe"
              strokeWidth="1.5"
            />

            {/* Upward Blue Arrow (Inside cloud) */}
            <g transform="translate(44, 26)">
              <path
                d="M 12 24 L 12 6 M 12 6 L 6 12 M 12 6 L 18 12"
                stroke="#0966fa"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>

          {/* Guide Line & Label Badge: CLOUD */}
          <line
            x1="480"
            y1="179"
            x2="480"
            y2="96"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="480" cy="179" r="2.5" fill="#0966fa" />

          {/* Pill Badge CLOUD */}
          <g transform="translate(453, 74)">
            <rect
              width="54"
              height="22"
              rx="4"
              fill="#ffffff"
              stroke="#e2e8f0"
              strokeWidth="1"
              filter="url(#cardShadow)"
            />
            <text
              x="27"
              y="15"
              textAnchor="middle"
              fill="#475569"
              fontSize="9"
              fontWeight="700"
              letterSpacing="0.08em"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              {t("hero.badgeCloud") || "CLOUD"}
            </text>
          </g>
        </g>

        {/* ========================================================
            5. NODE: CENTRAL GROSBYTE SERVER (Centerpiece)
            ======================================================== */}
        <g id="center-server-group">
          {/* Tiered Base 1 (Lower Large White Platform) */}
          <polygon
            points="320,285 410,337 320,389 230,337"
            fill="url(#plateTop)"
            stroke="#e2e8f0"
            strokeWidth="1.25"
          />
          {/* Lower Platform Left Edge */}
          <polygon
            points="230,337 320,389 320,398 230,346"
            fill="url(#pedestalSideLeft)"
          />
          {/* Lower Platform Right Edge */}
          <polygon
            points="320,389 410,337 410,346 320,398"
            fill="url(#pedestalSideRight)"
          />

          {/* Tiered Base 2 (Upper Stepped Platform) */}
          <polygon
            points="320,270 395,313 320,356 245,313"
            fill="#ffffff"
            stroke="#cbd5e1"
            strokeWidth="1"
          />
          <polygon
            points="245,313 320,356 320,364 245,321"
            fill="#cbd5e1"
          />
          <polygon
            points="320,356 395,313 395,321 320,364"
            fill="#94a3b8"
          />

          {/* SERVER RACK UNIT 1 (Bottom Chassis) */}
          <polygon
            points="255,274 320,311 320,335 255,298"
            fill="url(#serverFace)"
            stroke="#334155"
            strokeWidth="0.75"
          />
          <polygon
            points="320,311 385,274 385,298 320,335"
            fill="url(#serverSide)"
          />
          <line
            x1="265"
            y1="285"
            x2="310"
            y2="311"
            stroke="#334155"
            strokeWidth="2"
          />
          <line
            x1="265"
            y1="291"
            x2="295"
            y2="308"
            stroke="#0966fa"
            strokeWidth="2"
          />
          <circle cx="305" cy="314" r="1.5" fill="#00d2ff" />
          <circle cx="312" cy="318" r="1.5" fill="#10b981" />

          {/* Divider between server units */}
          <polygon
            points="255,270 320,307 385,270 320,233"
            fill="#0f172a"
          />

          {/* SERVER RACK UNIT 2 (Top Chassis) */}
          <polygon
            points="255,246 320,283 320,307 255,270"
            fill="url(#serverFaceAlt)"
            stroke="#334155"
            strokeWidth="0.75"
          />
          <polygon
            points="320,283 385,246 385,270 320,307"
            fill="url(#serverSide)"
          />
          <line
            x1="265"
            y1="257"
            x2="310"
            y2="283"
            stroke="#334155"
            strokeWidth="2"
          />
          <line
            x1="265"
            y1="263"
            x2="300"
            y2="283"
            stroke="#00d2ff"
            strokeWidth="2"
          />
          <circle cx="308" cy="288" r="1.5" fill="#0966fa" />

          {/* TOP WHITE PLATFORM (With Grosbyte Logo) */}
          <polygon
            points="320,205 385,242 320,279 255,242"
            fill="url(#plateTop)"
            stroke="#e2e8f0"
            strokeWidth="1.25"
          />
          <polygon
            points="255,242 320,279 320,283 255,246"
            fill="#e2e8f0"
          />
          <polygon
            points="320,279 385,242 385,246 320,283"
            fill="#cbd5e1"
          />

          {/* Grosbyte Logo Emblem - Isometrically Projected on Top Face */}
          <g transform="matrix(0.866025, 0.5, -0.866025, 0.5, 320, 242)">
            <rect
              x="-24"
              y="-24"
              width="48"
              height="48"
              rx="10"
              fill="#ffffff"
              stroke="#0966fa"
              strokeWidth="1.5"
              strokeOpacity="0.3"
            />
            <image
              href="/logo.png"
              x="-18"
              y="-18"
              width="36"
              height="36"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        </g>

        {/* ========================================================
            6. NODE: SYSTEMS (Secondary Server Stack, Lower Right)
            ======================================================== */}
        <g id="systems-group">
          {/* Systems Pedestal */}
          <polygon
            points="495,385 555,420 495,455 435,420"
            fill="#0f172a"
            fillOpacity="0.04"
          />
          <polygon
            points="495,380 550,412 495,444 440,412"
            fill="url(#plateTop)"
            stroke="#e2e8f0"
            strokeWidth="1"
          />
          <polygon
            points="440,412 495,444 495,450 440,418"
            fill="url(#pedestalSideLeft)"
          />
          <polygon
            points="495,444 550,412 550,418 495,450"
            fill="url(#pedestalSideRight)"
          />

          {/* Pedestal Top Contact Shadow under Server Box */}
          <ellipse
            cx="495"
            cy="412"
            rx="35"
            ry="10"
            fill="#0f172a"
            fillOpacity="0.08"
          />

          {/* Systems Server Chassis 1 (Bottom) */}
          <polygon
            points="455,360 500,386 500,408 455,382"
            fill="url(#serverFace)"
            stroke="#334155"
            strokeWidth="0.75"
          />
          <polygon
            points="500,386 545,360 545,382 500,408"
            fill="url(#serverSide)"
          />
          <line
            x1="462"
            y1="368"
            x2="492"
            y2="385"
            stroke="#334155"
            strokeWidth="1.5"
          />
          <circle cx="468" cy="374" r="1.5" fill="#0966fa" />
          <circle cx="474" cy="378" r="1.5" fill="#00d2ff" />

          {/* Systems Server Chassis 2 (Top) */}
          <polygon
            points="455,334 500,360 500,382 455,356"
            fill="url(#serverFaceAlt)"
            stroke="#334155"
            strokeWidth="0.75"
          />
          <polygon
            points="500,360 545,334 545,356 500,382"
            fill="url(#serverSide)"
          />
          <line
            x1="462"
            y1="342"
            x2="492"
            y2="359"
            stroke="#334155"
            strokeWidth="1.5"
          />
          <circle cx="468" cy="348" r="1.5" fill="#00d2ff" />
          <circle cx="474" cy="352" r="1.5" fill="#10b981" />

          {/* Systems Server Top Surface */}
          <polygon
            points="495,308 540,334 495,360 450,334"
            fill="#1e293b"
            stroke="#334155"
            strokeWidth="1"
          />

          {/* Guide Line & Label Badge: SYSTEMS (Pointing directly to the Server Box) */}
          <line
            x1="500"
            y1="408"
            x2="500"
            y2="475"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="500" cy="408" r="2.5" fill="#0966fa" />

          {/* Pill Badge SYSTEMS */}
          <g transform="translate(468, 475)">
            <rect
              width="64"
              height="22"
              rx="4"
              fill="#ffffff"
              stroke="#e2e8f0"
              strokeWidth="1"
              filter="url(#cardShadow)"
            />
            <text
              x="32"
              y="15"
              textAnchor="middle"
              fill="#475569"
              fontSize="9"
              fontWeight="700"
              letterSpacing="0.08em"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              {t("hero.badgeSystems") || "SYSTEMS"}
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
