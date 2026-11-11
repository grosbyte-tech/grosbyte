"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { MegaMenuServiceItem } from "./mega-menu-data";

export interface MegaMenuItemProps {
  item: MegaMenuServiceItem;
  onClick?: () => void;
}

export function MegaMenuItem({ item, onClick }: MegaMenuItemProps) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="mega-menu-card group relative flex flex-col p-4 sm:p-5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="mega-menu-icon-box w-10 h-10 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5" aria-hidden="true" />
        </div>
        <div className="mega-menu-arrow-box w-7 h-7 rounded-full flex items-center justify-center">
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </div>
      </div>
      <span className="mega-menu-item-title font-bold text-[15px] sm:text-[16px] tracking-tight block">
        {item.title}
      </span>
      <p className="mega-menu-item-desc mt-1.5 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
        {item.description}
      </p>
    </Link>
  );
}