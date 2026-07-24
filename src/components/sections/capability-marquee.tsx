import {
  BadgeDollarSign,
  Code2,
  Globe2,
  Megaphone,
  Palette,
  PanelsTopLeft,
  Search,
  Share2,
  Smartphone,
  Sparkles,
} from "lucide-react";

const items = [
  [Code2, "Custom Software"],
  [PanelsTopLeft, "Web Applications"],
  [Smartphone, "Mobile Applications"],
  [Globe2, "Modern Websites"],
  [Sparkles, "AI Integration"],
  [Megaphone, "Digital Marketing"],
  [Search, "SEO"],
  [Share2, "Social Media"],
  [BadgeDollarSign, "Paid Advertising"],
  [Palette, "Digital Branding"],
] as const;

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="marquee-set" aria-hidden={hidden || undefined}>
      {items.map(([Icon, label]) => (
        <div className="marquee-item" key={label}>
          <Icon size={18} aria-hidden="true" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function CapabilityMarquee() {
  return (
    <div
      className="capability-marquee"
      tabIndex={0}
      aria-label="Grosbyte capabilities"
    >
      <div className="marquee-track">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}
