"use client";

import Image from "next/image";
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
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a
            className="brand"
            href="#home"
            aria-label="Grosbyte Technologies home"
          >
            <span className="navbar-logo">
              <Image
                src="/logo.png"
                alt="Grosbyte Technologies Logo"
                width={38}
                height={38}
                preload
                className="w-full h-full object-contain"
              />
            </span>
            <span className="font-extrabold tracking-tight">
              Grosbyte Technologies
            </span>
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
          <div className="flex items-center gap-2.5 ml-auto md:ml-0">
            <ThemeToggle />
            <LanguageSwitcher />
            <a className="nav-cta hidden md:inline-flex" href="#contact">
              {t("nav.cta")}
            </a>
          </div>
        </nav>
      </header>

      {/* Floating Glassmorphism Sticky Bottom Navigation for Mobile */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] max-w-[450px] h-[62px] rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.18)] flex justify-around items-center px-5 md:hidden border transition-all duration-250 backdrop-blur-[24px] saturate-[180%] ${
          theme === "light"
            ? "bg-white/60 border-slate-900/10"
            : "bg-[#08080a]/80 border-white/10"
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
                {item.href === "#how-we-work"
                  ? t("nav.processMobile")
                  : t(navKeys[item.href])}
              </span>
            </a>
          );
        })}
      </div>

      {/* Scroll to Top Button for Mobile */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-[90px] right-6 z-50 h-11 w-11 rounded-full border border-white/10 bg-[#08080a]/85 backdrop-blur-xl shadow-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 active:scale-90 md:hidden"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
