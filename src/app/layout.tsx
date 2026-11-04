import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RestaurantSchema from "@/components/seo/RestaurantSchema";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

// PLACEHOLDER: заменить на реальный домен, когда он будет куплен/подтверждён.
const SITE_URL = "https://prostranstvorestaurant.ru";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ПРОСТРАНСТВО — ресторан в Кизляре",
    template: "%s — ПРОСТРАНСТВО",
  },
  description:
    "Ресторан «ПРОСТРАНСТВО» в Кизляре, Республика Дагестан. Салаты, горячие блюда, супы, десерты, пиццы и роллы. ул. Островского, 42. Ежедневно 10:00–23:00.",
  keywords: [
    "ресторан Кизляр",
    "ресторан Дагестан",
    "Пространство ресторан",
    "меню ресторана Кизляр",
    "роллы Кизляр",
    "пицца Кизляр",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ПРОСТРАНСТВО — ресторан в Кизляре",
    description:
      "Салаты, горячие блюда, супы, десерты, пиццы и роллы. ул. Островского, 42, Кизляр. Ежедневно 10:00–23:00.",
    locale: "ru_RU",
    type: "website",
    url: "/",
    siteName: "ПРОСТРАНСТВО",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0a08",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>
        <RestaurantSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-background"
        >
          Перейти к содержимому
        </a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}