import clsx from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
  centered?: boolean;
}) {
  return (
    <div
      className={clsx(
        "section-heading",
        centered && "section-heading--center",
        light && "section-heading--light",
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-copy">{text}</p>}
    </div>
  );
}
