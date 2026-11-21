export interface HeroCtaButtonConfig {
  href: string;
  variant: "glowing" | "outline";
  translationKey: "hero.ctaPrimary" | "hero.ctaSecondary";
}

export const HERO_CTA_BUTTONS: HeroCtaButtonConfig[] = [
  {
    href: "/contact",
    variant: "glowing",
    translationKey: "hero.ctaPrimary",
  },
  {
    href: "/services",
    variant: "outline",
    translationKey: "hero.ctaSecondary",
  },
];
