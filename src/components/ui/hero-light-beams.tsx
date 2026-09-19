"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { useTheme } from "@/contexts/theme-context";

// Generate deterministic particles for ambient stardust effect (like in reference image)
function useStardustParticles(count = 28) {
  return useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      // Deterministic pseudo-random generation based on index
      const seed = (i * 9301 + 49297) % 233280;
      const seed2 = (seed * 9301 + 49297) % 233280;
      const seed3 = (seed2 * 9301 + 49297) % 233280;
      const seed4 = (seed3 * 9301 + 49297) % 233280;

      const left = ((seed / 233280) * 100).toFixed(2);
      const top = ((seed2 / 233280) * 85).toFixed(2); // mostly in upper & middle hero
      const size = 1.2 + (seed3 / 233280) * 2.2;
      const duration = 5 + (seed4 / 233280) * 6;
      const delay = (seed / 233280) * 4;
      const maxOpacity = 0.35 + (seed2 / 233280) * 0.55;

      return {
        id: i,
        left: `${left}%`,
        top: `${top}%`,
        size,
        duration,
        delay,
        maxOpacity,
      };
    });
  }, [count]);
}

export function HeroLightBeams() {
  const reduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isLight = theme === "light";
  const particles = useStardustParticles(32);

  // In dark mode: pure ethereal glowing white beams with "screen" blend mode
  // In light mode: elegant cool slate gray beams with "multiply" blend mode
  const coreColor = isLight ? "#475569" : "#ffffff";
  const diffuseColor = isLight ? "#64748b" : "#ffffff";
  const flareColor = isLight ? "#334155" : "#ffffff";
  const blendMode = isLight ? ("multiply" as const) : ("screen" as const);

  const opacities = isLight
    ? {
        diffuse: ["0.36", "0.22", "0.09", "0.02", "0"],
        core1: ["0.52", "0.30", "0.10", "0"],
        core2: ["0.44", "0.24", "0.07", "0"],
        flare: ["0.55", "0.28", "0.08", "0"],
        cluster: [0.8, 1.0, 0.8],
      }
    : {
        diffuse: ["0.55", "0.32", "0.10", "0.02", "0"],
        core1: ["0.75", "0.45", "0.12", "0"],
        core2: ["0.65", "0.35", "0.08", "0"],
        flare: ["0.85", "0.40", "0.12", "0"],
        cluster: [0.72, 0.95, 0.72],
      };

  return (
    <div
      className="hidden md:block pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* 
        ========================================================================
        LEFT BEAMS CLUSTER (Originating from top-left, shining diagonally inward)
        ========================================================================
      */}
      <motion.div
        className="absolute -top-[120px] -left-[140px] w-[750px] h-[750px] lg:w-[950px] lg:h-[850px]"
        initial={{ opacity: 0 }}
        animate={
          reduceMotion
            ? { opacity: 0.85 }
            : {
                opacity: opacities.cluster,
                rotate: [-0.5, 1.2, -0.5],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "top left" }}
      >
        <svg
          viewBox="0 0 900 800"
          fill="none"
          className="w-full h-full transition-all duration-500"
          style={{ mixBlendMode: blendMode }}
        >
          <defs>
            {/* Primary soft diffuse beam */}
            <linearGradient
              id="beamLeftDiffuse"
              x1="0%"
              y1="0%"
              x2="85%"
              y2="90%"
            >
              <stop
                offset="0%"
                stopColor={diffuseColor}
                stopOpacity={opacities.diffuse[0]}
              />
              <stop
                offset="25%"
                stopColor={diffuseColor}
                stopOpacity={opacities.diffuse[1]}
              />
              <stop
                offset="55%"
                stopColor={diffuseColor}
                stopOpacity={opacities.diffuse[2]}
              />
              <stop
                offset="85%"
                stopColor={diffuseColor}
                stopOpacity={opacities.diffuse[3]}
              />
              <stop
                offset="100%"
                stopColor={diffuseColor}
                stopOpacity={opacities.diffuse[4]}
              />
            </linearGradient>

            {/* Sharp core ray 1 */}
            <linearGradient id="beamLeftCore1" x1="5%" y1="0%" x2="90%" y2="75%">
              <stop
                offset="0%"
                stopColor={coreColor}
                stopOpacity={opacities.core1[0]}
              />
              <stop
                offset="20%"
                stopColor={coreColor}
                stopOpacity={opacities.core1[1]}
              />
              <stop
                offset="60%"
                stopColor={coreColor}
                stopOpacity={opacities.core1[2]}
              />
              <stop
                offset="100%"
                stopColor={coreColor}
                stopOpacity={opacities.core1[3]}
              />
            </linearGradient>

            {/* Sharp core ray 2 */}
            <linearGradient
              id="beamLeftCore2"
              x1="0%"
              y1="10%"
              x2="75%"
              y2="95%"
            >
              <stop
                offset="0%"
                stopColor={coreColor}
                stopOpacity={opacities.core2[0]}
              />
              <stop
                offset="25%"
                stopColor={coreColor}
                stopOpacity={opacities.core2[1]}
              />
              <stop
                offset="65%"
                stopColor={coreColor}
                stopOpacity={opacities.core2[2]}
              />
              <stop
                offset="100%"
                stopColor={coreColor}
                stopOpacity={opacities.core2[3]}
              />
            </linearGradient>

            {/* Corner hotspot radial glow */}
            <radialGradient
              id="leftCornerFlare"
              cx="10%"
              cy="10%"
              r="60%"
              fx="10%"
              fy="10%"
            >
              <stop
                offset="0%"
                stopColor={flareColor}
                stopOpacity={opacities.flare[0]}
              />
              <stop
                offset="25%"
                stopColor={flareColor}
                stopOpacity={opacities.flare[1]}
              />
              <stop
                offset="60%"
                stopColor={flareColor}
                stopOpacity={opacities.flare[2]}
              />
              <stop
                offset="100%"
                stopColor={flareColor}
                stopOpacity={opacities.flare[3]}
              />
            </radialGradient>

            {/* Gaussian blurs for ray dispersion */}
            <filter
              id="blurDiffuse"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur stdDeviation="38" />
            </filter>
            <filter id="blurCore" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="16" />
            </filter>
            <filter id="blurSoft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="24" />
            </filter>
          </defs>

          {/* Diffuse wide ambient beam */}
          <polygon
            points="40,30 840,480 620,780 20,90"
            fill="url(#beamLeftDiffuse)"
            filter="url(#blurDiffuse)"
          />

          {/* Focused Core Ray 1 */}
          <polygon
            points="60,40 820,380 730,450 70,60"
            fill="url(#beamLeftCore1)"
            filter="url(#blurCore)"
          />

          {/* Secondary Core Ray 2 (slightly steeper angle) */}
          <polygon
            points="40,50 680,680 570,740 50,80"
            fill="url(#beamLeftCore2)"
            filter="url(#blurSoft)"
          />

          {/* Subtle 3rd beam streak */}
          <polygon
            points="70,30 880,560 810,610 80,50"
            fill="url(#beamLeftCore1)"
            opacity={isLight ? 0.45 : 0.6}
            filter="url(#blurCore)"
          />

          {/* Intense origin hotspot */}
          <ellipse
            cx="80"
            cy="70"
            rx="190"
            ry="160"
            fill="url(#leftCornerFlare)"
            filter="url(#blurDiffuse)"
          />
        </svg>
      </motion.div>

      {/* 
        ========================================================================
        RIGHT BEAMS CLUSTER (Originating from top-right, shining diagonally inward)
        ========================================================================
      */}
      <motion.div
        className="absolute -top-[120px] -right-[140px] w-[750px] h-[750px] lg:w-[950px] lg:h-[850px]"
        initial={{ opacity: 0 }}
        animate={
          reduceMotion
            ? { opacity: 0.85 }
            : {
                opacity: opacities.cluster,
                rotate: [0.5, -1.2, 0.5],
              }
        }
        transition={{
          duration: 9.5,
          delay: 1, // Desynchronized breathing for natural organic interplay
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "top right" }}
      >
        <svg
          viewBox="0 0 900 800"
          fill="none"
          className="w-full h-full transition-all duration-500"
          style={{ mixBlendMode: blendMode }}
        >
          <defs>
            {/* Primary soft diffuse beam */}
            <linearGradient
              id="beamRightDiffuse"
              x1="100%"
              y1="0%"
              x2="15%"
              y2="90%"
            >
              <stop
                offset="0%"
                stopColor={diffuseColor}
                stopOpacity={opacities.diffuse[0]}
              />
              <stop
                offset="25%"
                stopColor={diffuseColor}
                stopOpacity={opacities.diffuse[1]}
              />
              <stop
                offset="55%"
                stopColor={diffuseColor}
                stopOpacity={opacities.diffuse[2]}
              />
              <stop
                offset="85%"
                stopColor={diffuseColor}
                stopOpacity={opacities.diffuse[3]}
              />
              <stop
                offset="100%"
                stopColor={diffuseColor}
                stopOpacity={opacities.diffuse[4]}
              />
            </linearGradient>

            {/* Sharp core ray 1 */}
            <linearGradient
              id="beamRightCore1"
              x1="95%"
              y1="0%"
              x2="10%"
              y2="75%"
            >
              <stop
                offset="0%"
                stopColor={coreColor}
                stopOpacity={opacities.core1[0]}
              />
              <stop
                offset="20%"
                stopColor={coreColor}
                stopOpacity={opacities.core1[1]}
              />
              <stop
                offset="60%"
                stopColor={coreColor}
                stopOpacity={opacities.core1[2]}
              />
              <stop
                offset="100%"
                stopColor={coreColor}
                stopOpacity={opacities.core1[3]}
              />
            </linearGradient>

            {/* Sharp core ray 2 */}
            <linearGradient
              id="beamRightCore2"
              x1="100%"
              y1="10%"
              x2="25%"
              y2="95%"
            >
              <stop
                offset="0%"
                stopColor={coreColor}
                stopOpacity={opacities.core2[0]}
              />
              <stop
                offset="25%"
                stopColor={coreColor}
                stopOpacity={opacities.core2[1]}
              />
              <stop
                offset="65%"
                stopColor={coreColor}
                stopOpacity={opacities.core2[2]}
              />
              <stop
                offset="100%"
                stopColor={coreColor}
                stopOpacity={opacities.core2[3]}
              />
            </linearGradient>

            {/* Corner hotspot radial glow */}
            <radialGradient
              id="rightCornerFlare"
              cx="90%"
              cy="10%"
              r="60%"
              fx="90%"
              fy="10%"
            >
              <stop
                offset="0%"
                stopColor={flareColor}
                stopOpacity={opacities.flare[0]}
              />
              <stop
                offset="25%"
                stopColor={flareColor}
                stopOpacity={opacities.flare[1]}
              />
              <stop
                offset="60%"
                stopColor={flareColor}
                stopOpacity={opacities.flare[2]}
              />
              <stop
                offset="100%"
                stopColor={flareColor}
                stopOpacity={opacities.flare[3]}
              />
            </radialGradient>
          </defs>

          {/* Diffuse wide ambient beam */}
          <polygon
            points="860,30 60,480 280,780 880,90"
            fill="url(#beamRightDiffuse)"
            filter="url(#blurDiffuse)"
          />

          {/* Focused Core Ray 1 */}
          <polygon
            points="840,40 80,380 170,450 830,60"
            fill="url(#beamRightCore1)"
            filter="url(#blurCore)"
          />

          {/* Secondary Core Ray 2 */}
          <polygon
            points="860,50 220,680 330,740 850,80"
            fill="url(#beamRightCore2)"
            filter="url(#blurSoft)"
          />

          {/* Subtle 3rd beam streak */}
          <polygon
            points="830,30 20,560 90,610 820,50"
            fill="url(#beamRightCore1)"
            opacity={isLight ? 0.45 : 0.6}
            filter="url(#blurCore)"
          />

          {/* Intense origin hotspot */}
          <ellipse
            cx="820"
            cy="70"
            rx="190"
            ry="160"
            fill="url(#rightCornerFlare)"
            filter="url(#blurDiffuse)"
          />
        </svg>
      </motion.div>

      {/* 
        ========================================================================
        FLOATING STARDUST / LUMINOUS PARTICLES (Matching reference image)
        ========================================================================
      */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute rounded-full transition-colors duration-500 ${
              isLight
                ? "bg-slate-500 shadow-[0_0_6px_rgba(71,85,105,0.45)]"
                : "bg-white shadow-[0_0_8px_rgba(255,255,255,0.95)]"
            }`}
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            initial={{ opacity: 0.1 }}
            animate={
              reduceMotion
                ? { opacity: isLight ? p.maxOpacity * 0.75 : p.maxOpacity }
                : {
                    opacity: [
                      0.15,
                      isLight ? p.maxOpacity * 0.75 : p.maxOpacity,
                      0.15,
                    ],
                    y: [-8, 8, -8],
                    x: [-3, 3, -3],
                  }
            }
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Soft gradient mask at the bottom so beams fade cleanly into lower sections */}
      <div
        className="absolute inset-x-0 bottom-0 h-36 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--background) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
