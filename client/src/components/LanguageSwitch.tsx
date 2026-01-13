import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageSwitch({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn("fixed top-6 right-6 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm p-1 rounded-full border border-border shadow-sm", className)}>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          "px-3 py-1 rounded-full text-xs font-bold transition-all duration-300",
          language === 'en' 
            ? "bg-primary text-primary-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ja')}
        className={cn(
          "px-3 py-1 rounded-full text-xs font-bold transition-all duration-300",
          language === 'ja' 
            ? "bg-primary text-primary-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        JP
      </button>
    </div>
  );
}
