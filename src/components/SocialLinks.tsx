import { socialLinks } from "@/data/social";

interface SocialLinksProps {
  size?: number;
  className?: string;
}

export default function SocialLinks({ size = 20, className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon;

        if (social.isPlaceholder) {
          return (
            <span
              key={social.id}
              aria-label={`${social.name} — ссылка появится позже`}
              className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-full border border-border text-muted/40"
            >
              <Icon size={size} />
            </span>
          );
        }

        return (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}