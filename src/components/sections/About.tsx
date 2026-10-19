import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-background py-24 sm:py-32">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <SectionHeading subtitle="О ресторане" title="Пространство вкуса" />
        </Reveal>

        <Reveal className="mt-8">
          <Divider />
        </Reveal>

        <Reveal className="mt-10">
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Место, где встречаются разные кухни мира — от азиатских супов
            и стейков на гриле до итальянской пасты и авторских десертов.
            Спокойная атмосфера, продуманные детали и внимание к каждому
            блюду создают ощущение настоящего пространства для отдыха.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}