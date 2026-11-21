import NextImage, { ImageProps } from "next/image";

export function Image(props: ImageProps) {
  return (
    <NextImage
      {...props}
      // 85: the highest of next.config images.qualities below 100 (90 isn't allowed and was silently clamped to 85)
      quality={props.quality || 85}

      // Default responsive sizes for images that stretch with the layout
      // (`fill`, or a large intrinsic width scaled down by CSS): 100% width on
      // mobile, 50% on tablets, 33% on desktop. Small fixed-size images (logo,
      // icons) keep Next's 1x/2x srcset — a default `sizes` there makes phones
      // fetch a 750px+ file for a 100px icon.
      // ponytail: 256px cut-off is a heuristic; pass `sizes` where it guesses wrong.
      sizes={
        props.sizes ??
        (props.fill || Number(props.width) > 256
          ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          : undefined)
      }
    />
  );
}
