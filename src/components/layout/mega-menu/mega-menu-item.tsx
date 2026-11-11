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
      className="group relative flex flex-col p-4 sm:p-5 rounded-xl transition-all duration-200 hover:bg-slate-50 border border-slate-100/80 hover:border-blue-100 hover:shadow-[0_4px_16px_rgba(9,102,250,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
          <Icon
            className="w-5 h-5 transition-transform duration-200"
            aria-hidden="true"
          />
        </div>
        <div className="w-7 h-7 rounded-full bg-slate-100/70 border border-slate-200/60 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors duration-200">
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </div>
      </div>
      <span className="font-bold text-[15px] sm:text-[16px] text-slate-900 transition-colors duration-200 group-hover:text-blue-600 tracking-tight block">
        {item.title}
      </span>
      <p className="mt-1.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3">
        {item.description}
      </p>
    </Link>
  );
}