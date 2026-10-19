import QRCode from "qrcode";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const url = process.argv[2];

if (!url) {
  console.error("Укажи URL первым аргументом, например:");
  console.error("node scripts/generate-qr.mjs https://prostranstvo-restaurant.ru/menu");
  process.exit(1);
}

const outputDir = path.resolve("public", "qr");
const colors = {
  dark: "#0b0a08",
  light: "#ece3d3",
};

async function generate() {
  await mkdir(outputDir, { recursive: true });

  await QRCode.toFile(path.join(outputDir, "menu-qr.svg"), url, {
    type: "svg",
    width: 1000,
    margin: 2,
    color: colors,
  });

  await QRCode.toFile(path.join(outputDir, "menu-qr.png"), url, {
    type: "png",
    width: 1000,
    margin: 2,
    color: colors,
  });

  console.log(`QR-код сгенерирован для: ${url}`);
  console.log(`SVG: public/qr/menu-qr.svg`);
  console.log(`PNG: public/qr/menu-qr.png`);
}

generate();