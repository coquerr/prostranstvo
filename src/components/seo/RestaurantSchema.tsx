/**
 * Structured data (Schema.org/Restaurant) для главной страницы.
 *
 * Сознательно НЕ заполнены следующие поля, так как данных нет
 * и я не должен их придумывать:
 * - aggregateRating / review — нет реальных отзывов/рейтинга;
 * - image — нет реальных фото заведения;
 * - priceRange — не подтверждено владельцем как отдельный факт;
 * - geo (координаты) — точные координаты не подтверждены;
 * - servesCuisine — тип кухни явно не заявлен владельцем.
 *
 * Если владелец предоставит эти данные — поля можно добавить.
 */
export default function RestaurantSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "ПРОСТРАНСТВО",
    telephone: "+7-938-888-62-62",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Островского, 42",
      addressLocality: "Кизляр",
      addressRegion: "Республика Дагестан",
      addressCountry: "RU",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "23:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}