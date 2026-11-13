"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  Home,
  Info,
  Blocks,
  BookOpen,
  Mail,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { navigation, navKeys } from "@/lib/site-data";
import { useTranslation } from "@/contexts/language-context";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Button } from "@/components/ui/button";
import { ServicesMegaMenu } from "@/components/layout/mega-menu/services-mega-menu";

const icons = {
  "#home": Home,
  "/about": Info,
  "/services": Blocks,
  "/contact": Mail,
  "/blogs": BookOpen,
} as const;

function subscribeToHowWeWork(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  window.addEventListener("resize", callback, { passive: true });
  return () => {
    window.removeEventListener("scroll", callback);
    window.removeEventListener("resize", callback);
  };
}

function getHowWeWorkSnapshot() {
  if (typeof window === "undefined") return false;
  const section = document.getElementById("how-we-work");
  if (!section) return false;
  const rect = section.getBoundingClientRect();
  return rect.top <= 80 && rect.bottom >= 80;
}

function getHowWeWorkServerSnapshot() {
  return false;
}

export function Navbar() {
  const pathname = usePathname();
  const resolveHref = (href: string) =>
    href.startsWith("#") && pathname !== "/" ? `/${href}` : href;
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const isHowWeWorkVisible = useSyncExternalStore(
    subscribeToHowWeWork,
    getHowWeWorkSnapshot,
    getHowWeWorkServerSnapshot,
  );
  const isInHowWeWork = pathname === "/" && isHowWeWorkVisible;
  const [prevPathname, setPrevPathname] = useState(pathname);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useTranslation();

  // Reset mega menu state immediately during render if pathname changes
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsServicesOpen(false);
  }

  // Mega menu hover bridge handlers with grace period
  const handleServicesEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 160);
  };

  const handleServicesBlur = (e: React.FocusEvent<HTMLAnchorElement>) => {
    const nextTarget = e.relatedTarget as Node | null;
    const navShell = e.currentTarget.closest(".nav-shell");
    if (!navShell || !nextTarget || !navShell.contains(nextTarget)) {
      setIsServicesOpen(false);
    }
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = navigation
      .filter(({ href }) => href.startsWith("#"))
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
  }, [pathname]);

  const activeItem =
    pathname === "/about"
      ? "about"
      : pathname === "/services" || pathname.startsWith("/services/")
        ? "services"
        : pathname === "/contact"
          ? "contact"
          : pathname.startsWith("/blogs")
            ? "blogs"
            : active;

  return (
    <>
      <header
        className={`site-header ${isScrolled ? "is-scrolled" : ""} ${
          isInHowWeWork ? "in-how-we-work" : ""
        }`}
      >
        <nav className="nav-shell relative" aria-label="Main navigation">
          <Link
            className="brand"
            href={resolveHref("#home")}
            aria-label="Grosbyte Technologies home"
          >
            <span className="navbar-logo">
              <Image
                src="/logo.png"
                alt="Grosbyte Technologies Logo"
                width={42}
                height={42}
                preload
                className="w-full h-full object-contain"
              />
            </span>
            <span className="font-extrabold tracking-tight">
              Grosbyte Technologies
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="nav-links">
            {navigation.map((item) => {
              const isServices = item.href === "/services";
              const isActive = activeItem === item.href.slice(1);

              if (isServices) {
                return (
                  <div
                    key={item.href}
                    className="relative inline-flex items-center"
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                  >
                    <Link
                      href={resolveHref(item.href)}
                      className={`inline-flex items-center gap-1 ${
                        isActive ? "active" : ""
                      } ${isServicesOpen ? "text-[var(--text-primary)]" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                      aria-expanded={isServicesOpen}
                      aria-controls="services-mega-menu"
                      aria-haspopup="true"
                      onFocus={handleServicesEnter}
                      onBlur={handleServicesBlur}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <span>{t(navKeys[item.href])}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={resolveHref(item.href)}
                  className={isActive ? "active" : ""}
                  onMouseEnter={() => {
                    // Instantly close services mega menu when user moves to another nav item
                    if (isServicesOpen) setIsServicesOpen(false);
                  }}
                  aria-current={
                    isActive
                      ? item.href.startsWith("/")
                        ? "page"
                        : "location"
                      : undefined
                  }
                >
                  {t(navKeys[item.href])}
                </Link>
              );
            })}
          </div>

          {/* Mega Menu Dropdown */}
          <ServicesMegaMenu
            isOpen={isServicesOpen}
            onClose={() => setIsServicesOpen(false)}
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          />

          <div className="flex items-center gap-2 sm:gap-2.5 ml-auto md:ml-0">
            <LanguageSwitcher />
            <div className="hidden md:inline-flex">
              <Button
                href={resolveHref("/contact")}
                variant="glowing"
                size="sm"
                className="nav-cta"
              >
                {t("nav.cta")}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Floating Glassmorphism Sticky Bottom Navigation for Mobile */}
      <div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] max-w-[450px] h-[62px] rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.18)] flex justify-around items-center px-5 md:hidden border transition-all duration-250 backdrop-blur-[24px] saturate-[180%] bg-white/60 border-slate-900/10"
        style={{
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
        }}
      >
        {navigation.map((item) => {
          const Icon = icons[item.href];
          const isActive = activeItem === item.href.slice(1);
          return (
            <Link
              key={item.href}
              href={resolveHref(item.href)}
              aria-current={
                isActive
                  ? item.href.startsWith("/")
                    ? "page"
                    : "location"
                  : undefined
              }
              className={`flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1 transition-all duration-200 ${
                isActive
                  ? "text-[var(--brand-blue-hover)] scale-110 font-bold"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
              <span className="text-[9px] font-semibold tracking-wider uppercase">
                {t(navKeys[item.href])}
              </span>
            </Link>
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
