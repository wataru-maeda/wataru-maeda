import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 pb-10 relative overflow-hidden">
      {/* Grid Background (Subtle) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: 'linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="z-10 max-w-7xl w-full mx-auto">
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="font-mono text-sm md:text-base tracking-wider text-muted-foreground uppercase">
            {t.hero.role}
          </span>
        </div>

        <h1 className="font-sans font-black text-[12vw] leading-[0.9] tracking-tighter text-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          WATARU<br />MAEDA
        </h1>

        <p className="font-sans text-xl md:text-2xl lg:text-3xl font-normal max-w-2xl mb-12 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {t.hero.catchphrase.prefix}
          <span className="text-foreground font-medium">{t.hero.catchphrase.highlight1}</span>
          {t.hero.catchphrase.middle}
          <span className="text-foreground font-medium">{t.hero.catchphrase.highlight2}</span>
          {t.hero.catchphrase.suffix}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="mailto:contact@watarumaeda.com">
            <Button size="lg" className="w-full sm:w-auto rounded-md px-8 py-6 text-lg font-medium bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              {t.hero.buttons.contact}
            </Button>
          </a>
          <a href="#works">
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-md px-8 py-6 text-lg font-medium border-2 hover:bg-accent transition-all duration-300 group">
              {t.hero.buttons.projects} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
