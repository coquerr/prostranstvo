import type { ComponentType } from "react";
import { Camera, Send } from "lucide-react";
import { VkIcon } from "@/components/icons/VkIcon";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";

export type SocialIconComponent = ComponentType<{
  size?: number;
  className?: string;
}>;

export interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: SocialIconComponent;
  isPlaceholder: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/itss.prostranstvo/",
    icon: Camera,
    isPlaceholder: false,
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=89388886262&text&type=phone_number&app_absent=0",
    icon: WhatsappIcon,
    isPlaceholder: false,
  },
];