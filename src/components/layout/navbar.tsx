"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const reduceMotion = useReducedMotion();

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
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
              src="/logo.png"
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
              {item.label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="#contact">
          Start a Project
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mobile-cta"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Start a Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
