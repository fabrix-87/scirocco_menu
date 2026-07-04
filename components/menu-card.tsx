import Image from "next/image";
import { Camera } from "lucide-react";
import { MenuItem } from "@/types/menu";

interface MenuCardProps {
  item: MenuItem;
  lang: "it" | "en";
}

export default function MenuCard({ item, lang }: MenuCardProps) {
  // Logica di switch dei testi in base alla lingua attiva
  const mainName = lang === "en" && item.nameEn ? item.nameEn : item.name;
  const subName = lang === "en" ? item.name : item.nameEn;

  return (
    <div className="bg-card rounded-xl overflow-hidden border border-card-border shadow-sm flex h-30 transition-all duration-200 hover:border-primary/40">
      
      {/* Immagine */}
      <div className="w-1/3 shrink-0 bg-secondary flex items-center justify-center border-r border-border relative overflow-hidden">
        {item.image ? (
          <Image 
            src={item.image} 
            alt={mainName} 
            fill 
            className="object-cover"
            sizes="(max-w-768px) 33vw, 20vw"
          />
        ) : (
          <Camera className="h-6 w-6 text-muted-foreground/60" />
        )}
      </div>
      
      {/* Testi */}
      <div className="flex-1 flex flex-col justify-between p-4 min-w-0">
        <div>
          <div className="flex justify-between items-start gap-3 mb-1">
            <h4 className="font-bold text-foreground text-[16px] sm:text-lg leading-tight whitespace-normal wrap-break-word flex-1">
              {mainName}
            </h4>
            <span className="font-semibold text-primary text-[16px] sm:text-lg whitespace-nowrap shrink-0">
              €{item.price.toFixed(2)}
            </span>
          </div>
          
          {subName && (
            <p className="text-xs text-muted-foreground font-medium leading-normal whitespace-normal wrap-break-word italic">
              {subName}
            </p>
          )}
        </div>
        <div className="h-1" />
      </div>

    </div>
  );
}