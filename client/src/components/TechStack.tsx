import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const techCategories = [
  {
    category: "Core",
    items: ["TypeScript"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vite", "React Native", "Expo"]
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "GraphQL", "REST API"]
  },
  {
    category: "Infrastructure",
    items: ["AWS", "GCP", "Terraform"]
  },
  {
    category: "Native",
    items: ["Swift", "Kotlin"]
  }
];

export default function TechStack() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 scroll-animate">{t.tech.title}</h2>
        
        <div className="space-y-12">
          {techCategories.map((cat, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline border-b border-border/40 pb-8 last:border-0 scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="md:col-span-3">
                <h3 className="text-lg font-mono font-medium text-muted-foreground uppercase tracking-wider">
                  {cat.category}
                </h3>
              </div>
              <div className="md:col-span-9 flex flex-wrap gap-3">
                {cat.items.map((item, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="px-4 py-2 text-base font-mono font-normal bg-secondary hover:bg-secondary/80 text-foreground rounded-md"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
