"use client";

import Link from "next/link";
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
      className="group relative flex items-start gap-3.5 p-3.5 rounded-xl transition-all duration-200 hover:bg-slate-50/90 border border-transparent hover:border-slate-100 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <div className="shrink-0 mt-0.5 text-slate-700 transition-colors duration-200 group-hover:text-blue-600">
        <Icon
          className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        />
      </div>
      <div className="min-w-0 flex-1">
        <span className="font-bold text-[14px] md:text-[15px] text-slate-900 transition-colors duration-200 group-hover:text-blue-600 tracking-tight block">
          {item.title}
        </span>
        <p className="mt-1 text-xs md:text-[13px] text-slate-600 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
      </div>
    </Link>
  );
}
