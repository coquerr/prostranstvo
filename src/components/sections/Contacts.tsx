import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { contactInfo, getRouteUrl } from "@/data/contact";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Divider from "@/components/ui/Divider";
import Reveal from "@/components/ui/Reveal";

const contactItems = [
  {
    icon: MapPin,
    label: "Адрес",
    value: contactInfo.addressDisplay,
  },
  {
    icon: Phone,
    label: "Телефон",
    value: contactInfo.phoneDisplay,
    href: `tel:${contactInfo.phoneHref}`,
  },
  {
    icon: Clock,
    label: "Часы работы",
    value: `${contactInfo.hoursDisplay} · ${contactInfo.hoursNote}`,
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading as="h2" align="center" title="Контакты" />
        </Reveal>
        <Reveal>
          <Divider />
        </Reveal>

        <Reveal>
          <div className="relative mt-12 border border-border/40 p-6 sm:p-10">
            <span className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l border-t border-gold" />
            <span className="pointer-events-none absolute right-0 top-0 h-6 w-6 border-r border-t border-gold" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b border-l border-gold" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-gold" />

            <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="text-gold" size={28} strokeWidth={1.5} />
                    <span className="font-body text-xs uppercase tracking-[0.2em] text-muted">
                      {item.label}
                    </span>
                    <span className="font-heading text-lg text-foreground">
                      {item.value}
                    </span>
                  </>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex flex-col items-center gap-2 text-center transition-colors duration-300 hover:text-gold"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex justify-center border-t border-border/40 pt-8">
              <a
                href={getRouteUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gold px-6 py-3 font-body text-sm uppercase tracking-[0.15em] text-gold transition-colors duration-300 hover:bg-gold hover:text-background"
              >
                <Navigation size={18} strokeWidth={1.5} />
                Построить маршрут
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}