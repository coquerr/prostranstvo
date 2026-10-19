export const contactInfo = {
  addressDisplay: "г. Кизляр, ул. Островского, 42",
  addressForRoute: "Кизляр, улица Островского, 42",
  phoneDisplay: "8 (938) 888-62-62",
  phoneHref: "+79388886262",
  hoursDisplay: "10:00–23:00",
  hoursNote: "ежедневно",
};

export function getRouteUrl(): string {
  const query = encodeURIComponent(contactInfo.addressForRoute);
  return `https://yandex.ru/maps/?text=${query}`;
}