interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  as = "h2",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  const Heading = as;

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {subtitle && (
        <span className="text-xs uppercase tracking-[0.3em] text-muted">
          {subtitle}
        </span>
      )}
      <Heading className="text-4xl font-medium tracking-wide text-beige sm:text-5xl">
        {title}
      </Heading>
    </div>
  );
}