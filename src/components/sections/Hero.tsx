import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import Ornament from "@/components/ui/Ornament";
import { RESTAURANT } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-background">
      <Ornament className="left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <Container className="relative z-10 flex flex-col items-center text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-muted">
          Ресторан
        </span>

        <h1 className="mt-6 flex flex-col leading-[0.95] text-beige">
          <span className="text-6xl font-medium tracking-wide sm:text-7xl lg:text-8xl">
            ПРОСТРА
          </span>
          <span className="text-6xl font-medium tracking-wide sm:text-7xl lg:text-8xl">
            НСТВО
          </span>
        </h1>

        <Divider className="mt-10" />

        <p className="mt-10 max-w-md text-sm leading-relaxed text-muted sm:text-base">
          Тишина, свет и пространство для настоящего вкуса —
          место, где хочется задержаться.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="/menu"
            className="border border-gold/50 px-10 py-3 text-center text-xs uppercase tracking-[0.3em] text-gold transition-colors hover:border-gold hover:bg-gold/10"
          >
            Посмотреть меню
          </a>
          <a
            href="#booking"
            className="border border-transparent bg-gold px-10 py-3 text-center text-xs uppercase tracking-[0.3em] text-background transition-colors hover:bg-gold-light"
          >
            Забронировать стол
          </a>
        </div>

        <p className="mt-10 text-xs text-muted sm:text-sm">
          {RESTAURANT.address} · {RESTAURANT.hoursNote}: {RESTAURANT.hours}
        </p>
      </Container>
    </section>
  );
}