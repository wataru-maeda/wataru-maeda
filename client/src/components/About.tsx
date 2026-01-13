import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-5 scroll-animate flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight sticky top-24 z-10 mix-blend-difference text-foreground">
            {t.about.title}
          </h2>
          <div className="relative w-48 md:w-64 aspect-square overflow-hidden bg-secondary/20 mt-8 lg:mt-0">
            <img 
              src="/images/profile-wataru.jpg" 
              alt="Wataru Maeda" 
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />
          </div>
        </div>
        
        <div className="lg:col-span-7 space-y-12 scroll-animate flex flex-col justify-center" style={{ animationDelay: '0.2s' }}>
          <div className="prose prose-lg prose-neutral max-w-none">
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
              {t.about.description}
            </p>
          </div>

          <div className="relative pl-8 border-l-4 border-primary py-2">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
              "{t.about.vision}"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
