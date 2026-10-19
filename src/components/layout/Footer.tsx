import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import Ornament from "@/components/ui/Ornament";
import { RESTAURANT } from "@/lib/constants";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer id="contacts" className="relative overflow-hidden bg-surface py-20 sm:py-24">
      <Ornament className="left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <Container className="relative z-10 flex flex-col items-center text-center">
        <span className="text-2xl font-medium tracking-wide text-beige sm:text-3xl">
          {RESTAURANT.name}
        </span>

        <Divider className="mt-6" />

        <div className="mt-10 flex flex-col gap-3 text-sm text-muted sm:text-base">
          <a
            href={RESTAURANT.phoneHref}
            className="transition-colors hover:text-gold"
          >
            {RESTAURANT.phone}
          </a>
          <span>{RESTAURANT.address}</span>
          <span>
            {RESTAURANT.hoursNote}: {RESTAURANT.hours}
          </span>
        </div>

        <SocialLinks className="mt-10" />

        <span className="mt-12 text-xs text-muted/60">
          © {new Date().getFullYear()} {RESTAURANT.name}
        </span>

        <div className="mt-4 flex flex-col items-center gap-1 text-[10px] text-muted/40">
                    <span>Исполнитель услуг: ИП Гаппаева З. М. (ИНН 054700938521, ОГРНИП 326050000073181)</span>
          <a href="/legal/privacy-policy" className="underline underline-offset-2 hover:text-gold">
            Политика обработки персональных данных
          </a>
        </div>
      </Container>
    </footer>
  );
}