"use client";

import { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  heading: string;
}

export interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export function TableOfContents({
  items,
  className = "",
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-90px 0px -65% 0px",
        threshold: 0,
      },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <nav
      className={`toc-nav ${className}`.trim()}
      aria-label="Table of contents"
    >
      <p className="toc-title">Table of contents</p>
      <ul className="toc-list">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className="toc-item">
              <a
                href={`#${item.id}`}
                className={`toc-link ${isActive ? "active" : ""}`}
                aria-current={isActive ? "location" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(item.id);
                  if (target) {
                    const top =
                      target.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top, behavior: "smooth" });
                    window.history.pushState(null, "", `#${item.id}`);
                    setActiveId(item.id);
                  }
                }}
              >
                {item.heading}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
