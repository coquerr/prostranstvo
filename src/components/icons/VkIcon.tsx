interface IconProps {
  size?: number;
  className?: string;
}

export function VkIcon({ size = 20, className = "" }: IconProps) {
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
      <rect x="3" y="3" width="18" height="18" rx="6" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="9"
        fontFamily="sans-serif"
        fontWeight="600"
        fill="currentColor"
        stroke="none"
      >
        VK
      </text>
    </svg>
  );
}