import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import MenuPreview from "@/components/sections/MenuPreview";
import { AtmosphereGallery } from "@/components/sections/AtmosphereGallery";
import Booking from "@/components/sections/Booking";
import Contacts from "@/components/sections/Contacts";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MenuPreview />
      <AtmosphereGallery />
      <Booking />
      <Contacts />
    </main>
  );
}