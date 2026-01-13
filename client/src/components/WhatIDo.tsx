import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const icons = [
  "/images/icon-web-mobile.png",
  "/images/icon-backend.png",
  "/images/icon-ai.png",
  "/images/icon-prototype.png"
];

export default function WhatIDo() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 scroll-animate">{t.works.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.works.items.map((item, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-background group h-full scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mb-6 p-3 bg-secondary rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                  <img 
                    src={icons[index]} 
                    alt={item.title} 
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
