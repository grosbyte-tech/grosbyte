import Image from "next/image";

export interface HeroImageItem {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface HeroImageGridProps {
  images: HeroImageItem[];
  className?: string;
}

export function HeroImageGrid({ images, className = "" }: HeroImageGridProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className={`hero-image-grid-container ${className}`}>
      <div
        className="hero-image-grid"
        aria-label="Custom software development showcase"
      >
        {images.map((item, index) => (
          <div key={item.id} className="hero-image-card">
            <div className="hero-image-inner">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 290px"
                className="hero-image-element"
                priority={index < 2}
              />
              <div className="hero-image-overlay" aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
