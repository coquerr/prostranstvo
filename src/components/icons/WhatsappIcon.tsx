interface IconProps {
  size?: number;
  className?: string;
}

export function WhatsappIcon({ size = 20, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3a9 9 0 0 0-7.75 13.5L3 21l4.6-1.21A9 9 0 1 0 12 3Z" />
      <path d="M9 9.5c0-.5.4-1 1-1 .3 0 .5.15.6.4l.5 1.3c.1.25 0 .5-.15.7l-.4.45a4.5 4.5 0 0 0 2.1 2.1l.45-.4c.2-.15.45-.25.7-.15l1.3.5c.25.1.4.3.4.6 0 .6-.5 1-1 1-3 0-5.5-2.5-5.5-5.5Z" />
    </svg>
  );
}