import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных — ПРОСТРАНСТВО",
};

export default function ConsentPage() {
  return (
    <main className="bg-background py-24 sm:py-32">
      <Container className="mx-auto max-w-2xl text-center">
        <SectionHeading
          subtitle="Документ в разработке"
          title="Согласие на обработку персональных данных"
        />

        <div className="mt-10 space-y-4 text-left text-sm leading-relaxed text-muted">
          <p>
            Отправляя форму бронирования, пользователь предоставляет
            согласие на обработку указанных им персональных данных
            (имя, номер телефона) исключительно в целях обработки
            заявки на бронирование столика в ресторане «ПРОСТРАНСТВО».
          </p>
                    <p>
            Оператор персональных данных: <strong>ИП Гаппаева Зумрут Магомедовна</strong>
            <br />
            Срок хранения данных: <strong>PLACEHOLDER</strong>
            <br />
            Способ обработки данных: <strong>PLACEHOLDER</strong> (будет
            указан после выбора сервиса отправки заявок — Telegram, email,
            CRM или собственный backend).
          </p>
          <p>
            Пользователь вправе отозвать согласие в любой момент, обратившись
            по контактным данным, указанным в{" "}
            <a href="/legal/privacy-policy" className="text-gold underline underline-offset-4">
              Политике обработки персональных данных
            </a>
            .
          </p>
        </div>
      </Container>
    </main>
  );
}