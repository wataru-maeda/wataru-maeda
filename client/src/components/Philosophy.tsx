import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Philosophy() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-24 text-background scroll-animate">{t.philosophy.title}</h2>
        
        <div className="grid grid-cols-1 gap-0">
          {t.philosophy.items.map((item, index) => (
            <div 
              key={index} 
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-background/20 transition-colors duration-500 hover:bg-background/5 scroll-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="md:col-span-2">
                <span className="text-4xl md:text-5xl font-mono font-light text-background/40 group-hover:text-primary transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-background group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-lg text-background/70 max-w-2xl group-hover:text-background/90 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-background/20"></div>
        </div>
      </div>
    </section>
  );
}
