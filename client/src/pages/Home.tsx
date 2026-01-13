import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import TechStack from "@/components/TechStack";
import WhatIDo from "@/components/WhatIDo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LanguageSwitch } from "@/components/LanguageSwitch";

export default function Home() {
  useScrollAnimation();
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <LanguageSwitch />
      <main className="flex-grow">
        <Hero />
        <About />
        <WhatIDo />
        <TechStack />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}
