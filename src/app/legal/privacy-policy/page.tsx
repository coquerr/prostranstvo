import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных — ПРОСТРАНСТВО",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background py-24 sm:py-32">
      <Container className="mx-auto max-w-2xl text-center">
                <SectionHeading
          subtitle="Документ в разработке"
          title="Политика обработки персональных данных"
        />

        <div className="mt-10 space-y-4 text-left text-sm leading-relaxed text-muted">
          <p>
            Данная страница является временной заглушкой. Полная редакция
            политики обработки персональных данных будет опубликована после
            получения от владельца ресторана юридического адреса и
            контактного email оператора персональных данных.
          </p>
          <p>
            Оператор персональных данных: <strong>ИП Гаппаева Зумрут Магомедовна</strong>
            <br />
            ИНН: <strong>054700938521</strong>
            <br />
            ОГРНИП: <strong>326050000073181</strong>
            <br />
            Адрес: <strong>PLACEHOLDER</strong>
            <br />
            Email для обращений: <strong>PLACEHOLDER</strong>
          </p>
          <p>
            До заполнения фактических данных данная страница не является
            юридически значимым документом.
          </p>
        </div>
      </Container>
    </main>
  );
}