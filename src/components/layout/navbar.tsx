"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Home, Info, Blocks, Workflow, Mail, ChevronUp } from "lucide-react";
import { navigation } from "@/lib/site-data";
import { useTranslation } from "@/contexts/language-context";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "@/contexts/theme-context";

const icons = {
  "#home": Home,
  "#about": Info,
  "#services": Blocks,
  "#how-we-work": Workflow,
  "#contact": Mail,
} as const;

const navKeys: Record<string, string> = {
  "#home": "nav.home",
  "#about": "nav.about",
  "#services": "nav.services",
  "#how-we-work": "nav.process",
  "#contact": "nav.contact",
};

export function Navbar() {
  const [active, setActive] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const reduceMotion = useReducedMotion();
  const { t } = useTranslation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60%" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        className="site-header"
        initial={reduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <nav className="nav-shell" aria-label="Main navigation">
          <a
            className="brand"
            href="#home"
            aria-label="Grosbyte Technologies home"
          >
            <span className="brand-logo">
              <Image
                src="/icons/logo-removebg.png"
                alt=""
                width={40}
                height={24}
                priority
                className="object-center scale-200"
              />
            </span>
            <span>Grosbyte Technologies</span>
          </a>
          <div className="nav-links">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={active === item.href.slice(1) ? "active" : ""}
              >
                {t(navKeys[item.href])}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 ml-auto md:ml-0">
            <ThemeToggle />
            <LanguageSwitcher />
            <a className="nav-cta" href="#contact">
              {t("nav.cta")}
            </a>
          </div>
        </nav>
      </motion.header>

      {/* Floating Glassmorphism Sticky Bottom Navigation for Mobile */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] max-w-[450px] h-[62px] rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.18)] flex justify-around items-center px-5 md:hidden border transition-all duration-250 backdrop-blur-[24px] saturate-[180%] ${
          theme === "light"
            ? "bg-white/60 border-slate-900/10"
            : "bg-[#030b1c]/50 border-white/10"
        }`}
        style={{
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
        }}
      >
        {navigation.map((item) => {
          const Icon = icons[item.href];
          const isActive = active === item.href.slice(1);
          return (
            <a
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 transition-all duration-200 ${
                isActive
                  ? "text-[var(--brand-blue-hover)] scale-110 font-bold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
              <span className="text-[9px] font-semibold tracking-wider uppercase">
                {item.href === "#how-we-work" ? t("nav.processMobile") : t(navKeys[item.href])}
              </span>
            </a>
          );
        })}
      </div>

      {/* Scroll to Top Button for Mobile */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-[90px] right-6 z-50 h-11 w-11 rounded-full border border-white/10 bg-[#030b1c]/70 backdrop-blur-xl shadow-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 active:scale-90 md:hidden"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
