interface OrnamentProps {
  className?: string;
}

/**
 * Декоративный фоновый узор: тонкие пересекающиеся линии
 * и полуокружности-арки, вдохновлённые фирменным меню.
 * Используется как ненавязчивый фон на всю секцию.
 */
export default function Ornament({ className = "" }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 800 800"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute text-gold ${className}`}
    >
      {/* Вертикальные и горизонтальные направляющие линии */}
      <line x1="0" y1="200" x2="800" y2="200" stroke="currentColor" strokeOpacity="0.08" />
      <line x1="0" y1="400" x2="800" y2="400" stroke="currentColor" strokeOpacity="0.08" />
      <line x1="0" y1="600" x2="800" y2="600" stroke="currentColor" strokeOpacity="0.08" />
      <line x1="200" y1="0" x2="200" y2="800" stroke="currentColor" strokeOpacity="0.08" />
      <line x1="400" y1="0" x2="400" y2="800" stroke="currentColor" strokeOpacity="0.08" />
      <line x1="600" y1="0" x2="600" y2="800" stroke="currentColor" strokeOpacity="0.08" />

      {/* Арки-полуокружности на пересечениях, как на фото меню */}
      <path d="M100 200a100 100 0 0 1 200 0" stroke="currentColor" strokeOpacity="0.12" />
      <path d="M500 400a100 100 0 0 1 200 0" stroke="currentColor" strokeOpacity="0.12" />
      <path d="M100 600a100 100 0 0 1 200 0" stroke="currentColor" strokeOpacity="0.12" />
      <path d="M500 0a100 100 0 0 1 200 0" stroke="currentColor" strokeOpacity="0.12" />

      {/* Тонкие окружности */}
      <circle cx="400" cy="400" r="180" stroke="currentColor" strokeOpacity="0.06" />
      <circle cx="400" cy="400" r="260" stroke="currentColor" strokeOpacity="0.04" />
    </svg>
  );
}