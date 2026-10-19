import Container from "@/components/ui/Container";
import Ornament from "@/components/ui/Ornament";
import Reveal from "@/components/ui/Reveal";

export default function Atmosphere() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <Ornament className="left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-40" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <p className="max-w-xl text-lg font-medium leading-relaxed tracking-wide text-beige sm:text-2xl">
            Тишина пространства, тепло света и внимание к каждой детали —
            всё создано для того, чтобы время здесь текло иначе.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}