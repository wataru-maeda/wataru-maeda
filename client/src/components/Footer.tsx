import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 scroll-animate">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              {t.contact.title}
            </h2>
            <a href="mailto:contact@watarumaeda.com">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                <Mail className="mr-2 h-5 w-5" /> {t.contact.email}
              </Button>
            </a>
          </div>
          
          <div className="flex flex-col justify-end items-start lg:items-end space-y-6">
            <a href="mailto:contact@watarumaeda.com" className="group flex items-center text-2xl font-medium hover:text-primary transition-colors">
              {t.contact.email} <ArrowUpRight className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex items-center text-2xl font-medium hover:text-primary transition-colors">
              {t.contact.github} <Github className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center text-2xl font-medium hover:text-primary transition-colors">
              {t.contact.linkedin} <Linkedin className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Wataru Maeda. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-mono">Designed & Built with precision.</p>
        </div>
      </div>
    </footer>
  );
}
