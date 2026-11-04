interface MenuPatternProps {
  className?: string;
}

const FADE =
  "linear-gradient(to bottom, transparent 0, black 220px, black calc(100% - 160px), transparent 100%)";

export default function MenuPattern({ className = "" }: MenuPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 bg-[length:700px_auto] opacity-[0.07] sm:bg-[length:1100px_auto] ${className}`}
      style={{
        backgroundImage: "url('/images/logo/menu-pattern.webp')",
        backgroundRepeat: "repeat",
        maskImage: FADE,
        WebkitMaskImage: FADE,
      }}
    />
  );
}