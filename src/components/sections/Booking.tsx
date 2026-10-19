import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Ornament from "@/components/ui/Ornament";
import { RESTAURANT } from "@/lib/constants";

export default function Booking() {
  return (
    <section id="booking" className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <Ornament className="left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <Container className="relative z-10 mx-auto flex max-w-xl flex-col items-center text-center">
        <Reveal>
          <SectionHeading subtitle="Бронирование" title="Забронировать стол" />
        </Reveal>

        <Reveal className="mt-8">
          <Divider />
        </Reveal>

        <Reveal className="mt-10">
          <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Чтобы забронировать стол, позвоните нам — мы подберём удобное
            время и разместим вас с комфортом.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <a
          href={RESTAURANT.phoneHref}
            className="inline-block border border-transparent bg-gold px-10 py-4 text-base font-semibold tracking-wider text-background transition-colors hover:bg-gold-light"
          >
            {RESTAURANT.phone}
          </a>
        </Reveal>

        <Reveal className="mt-6">
          <span className="text-xs text-muted sm:text-sm">
            Ежедневно {RESTAURANT.hours}
          </span>
        </Reveal>
      </Container>
    </section>
  );
}