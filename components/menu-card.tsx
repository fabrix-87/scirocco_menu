"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, X } from "lucide-react";
import { MenuItem } from "@/types/menu";

interface MenuCardProps {
  item: MenuItem;
  lang: "it" | "en";
}

export default function MenuCard({ item, lang }: MenuCardProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Logica di switch dei testi in base alla lingua attiva
  const mainName = lang === "en" && item.nameEn ? item.nameEn : item.name;
  const subName = lang === "en" ? item.name : item.nameEn;
  const description = lang === "en" ? item.descriptionEn : item.description;

  return (
    <>
      {/* CARD PRINCIPALE */}
      <div className="group bg-scirocco-card rounded-xl overflow-hidden border border-scirocco-line shadow-sm flex h-36 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-scirocco-gold/60 hover:shadow-md">
        
        {/* Immagine in formato Quadrato Perfetto maggiorato con cursore zoom-in */}
        <div 
          onClick={() => item.image && setIsZoomed(true)}
          className={`w-36 h-36 shrink-0 bg-scirocco-surface flex items-center justify-center border-r border-scirocco-line relative overflow-hidden ${item.image ? "cursor-zoom-in" : ""}`}
        >
          {item.image ? (
            <Image 
              src={`/images/${item.image}`} 
              alt={mainName} 
              fill 
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-w-768px) 144px, 144px"
            />
          ) : (
            <Camera className="h-6 w-6 text-scirocco-muted transition-transform duration-300 group-hover:scale-110" />
          )}
        </div>
        
        {/* Contenuto Testuale */}
        <div className="flex-1 flex flex-col justify-between p-4 min-w-0">
          <div>
            <div className="flex justify-between items-start gap-3 mb-1.5">
              <h4 className="font-bold text-scirocco-text text-[16px] sm:text-lg leading-tight whitespace-normal wrap-break-word flex-1 transition-colors duration-300 group-hover:text-scirocco-gold">
                {mainName}
              </h4>
              <span className="font-semibold text-scirocco-gold text-[16px] sm:text-lg whitespace-nowrap shrink-0">
                €{item.price.toFixed(2)}
              </span>
            </div>
            
            {(description || subName) && (
              <p className="text-xs text-scirocco-muted font-medium leading-normal whitespace-normal wrap-break-word italic">
                {description || subName}
              </p>
            )}
          </div>
          <div className="h-1" />
        </div>

      </div>

      {/* OVERLAY LIGHTBOX (Mostrato solo quando isZoomed è true) */}
      {isZoomed && item.image && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsZoomed(false)}
        >
          {/* Pulsante per Chiudere in alto a destra */}
          <button 
            className="absolute top-4 right-4 z-55 rounded-full bg-black/50 p-2 text-white/80 hover:text-white hover:bg-black/80 transition-colors cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(false);
            }}
            aria-label="Chiudi ingrandimento"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Contenitore Immagine Ingrandita */}
          <div 
            className="relative w-[90vw] h-[70vh] max-w-3xl cursor-zoom-out"
            onClick={() => setIsZoomed(false)}
          >
            <Image
              src={`/images/${item.image}`}
              alt={mainName}
              fill
              className="object-contain rounded-lg select-none"
              sizes="(max-w-1200px) 90vw, 800px"
              priority
            />
            {/* Didascalia del piatto sotto l'immagine */}
            <div className="absolute -bottom-10 left-0 right-0 text-center">
              <p className="text-sm font-semibold text-white tracking-wide uppercase">{mainName}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}