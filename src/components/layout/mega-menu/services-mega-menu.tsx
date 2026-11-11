"use client";

import { useEffect, useRef } from "react";
import { featuredServices, type MegaMenuServiceItem } from "./mega-menu-data";
import { MegaMenuItem } from "./mega-menu-item";

export interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items?: MegaMenuServiceItem[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function ServicesMegaMenu({
  isOpen,
  onClose,
  items = featuredServices,
  onMouseEnter,
  onMouseLeave,
}: ServicesMegaMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press for keyboard accessibility
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      ref={containerRef}
      id="services-mega-menu"
      role="region"
      aria-label="Services navigation menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[min(980px,calc(100vw-2rem))] z-50 transition-all duration-200 origin-top pointer-events-auto ${
        isOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-2 invisible pointer-events-none"
      }`}
    >
      <div className="mega-menu-panel bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
        {/* Services Grid (3 Columns) */}
        <div className="p-4 sm:p-5 lg:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {items.map((service) => (
              <MegaMenuItem key={service.id} item={service} onClick={onClose} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
