"use client";

import { useState, useEffect } from "react";
import menuData from "@/data/menu.json";
import MenuSection from "@/components/menu-section";
import { MenuData } from "@/types/menu";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react"; 

const data = menuData as MenuData;

export default function HomePage() {
  const [lang, setLang] = useState<"it" | "en">("it");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Monitora lo scroll per attivare la topbar compatta
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsMenuOpen(false); // Chiude il menu se l'utente torna in cima
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
{/* UNIQUE STICKY NAVBAR */}
<div className="sticky top-0 z-50 w-full border-b border-card-border bg-background/95 backdrop-blur-md">
  <div className="container mx-auto max-w-5xl px-4">
    {/* Layout flessibile: mantiene la struttura a 3 colonne su mobile, ma si allinea a destra su desktop */}
    <div className="grid h-12 grid-cols-3 items-center md:flex md:justify-end">
      
      {/* COLONNA SINISTRA: Hamburger (Nascosto completamente su PC con md:hidden) */}
      <div className="flex items-center justify-start md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`flex items-center gap-2 rounded-lg p-1 text-foreground transition-all ${
            isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
          }`}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5 text-primary" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hidden sm:inline">
            Menu
          </span>
        </button>
      </div>

      {/* COLONNA CENTRALE: Logo in piccolo (Nascosto completamente su PC con md:hidden) */}
      <div className="flex items-center justify-center md:hidden">
        <div className={`relative h-6 w-24 transition-all duration-300 ${
          isScrolled ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
        }`}>
          <Image
            src="/images/scirocco-logo.png"
            alt="Scirocco Mini"
            fill
            sizes="96px"
            className="object-contain"
          />
        </div>
      </div>

      {/* COLONNA DESTRA: Selettore Lingua (Sempre visibile a destra su qualsiasi dispositivo) */}
      <div className="flex items-center justify-end shrink-0">
        <button 
          onClick={() => setLang(lang === "it" ? "en" : "it")}
          className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer select-none"
        >
          <Globe
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="h-3.5 w-3.5" 
            aria-hidden="true"
          />
          <span className="uppercase tracking-wider font-semibold">
            <span className={lang === "it" ? "text-primary" : ""}>IT</span>
            <span className="text-card-border mx-1">/</span>
            <span className={lang === "en" ? "text-primary" : ""}>en</span>
          </span>
        </button>
      </div>

    </div>
  </div>

  {/* TENDINA OVERLAY PER MOBILE (Resta protetta da md:hidden) */}
  <div className={`absolute left-0 w-full border-b border-card-border bg-card/98 shadow-xl transition-all duration-300 md:hidden ${
    isMenuOpen && isScrolled 
      ? "opacity-100 translate-y-0 max-h-[80vh] overflow-y-auto" 
      : "opacity-0 -translate-y-4 max-h-0 overflow-hidden pointer-events-none"
  }`}>
    <div className="px-4 py-4 space-y-1">
      {data.categories.map((cat) => {
        const categoryName = lang === "en" && cat.subtitle ? cat.subtitle : cat.title;
        return (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            onClick={() => setIsMenuOpen(false)}
            className="block w-full rounded-xl bg-secondary/40 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-foreground border border-transparent active:border-primary/40 active:bg-secondary"
          >
            {categoryName}
          </a>
        );
      })}
    </div>
  </div>
</div>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header Standard */}
        <header className="mb-12 text-center">
          <div className="relative mx-auto w-112.5 h-60">
            <Image
              src="/images/scirocco-logo.png"
              alt="Scirocco 2025"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 280px, 450px"   
              loading="eager"   
            />
          </div>
          <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
            {lang === "it" ? "Carne & Pesce • Insalate & Bevande" : "Meat & Fish • Salads & Drinks"}
          </p>
        </header>

        {/* Navigazione Estesa Standard (Visibile quando si è in cima alla pagina) */}
        <nav className="mb-12 flex flex-wrap justify-center gap-2 border-b border-card-border pb-6">
          {data.categories.map((cat) => {
            const categoryName = lang === "en" && cat.subtitle ? cat.subtitle : cat.title;
            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full border border-card-border bg-secondary px-4 py-2 text-[12px] font-medium uppercase tracking-wider text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
              >
                {categoryName}
              </a>
            );
          })}
        </nav>

        {/* Griglie dei Menu */}
        <div className="space-y-4">
          {data.categories.map((category) => (
            <MenuSection key={category.id} category={category} lang={lang} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 rounded-2xl border border-card-border bg-card p-8 text-center sm:text-left">
          <p className="mb-4 text-[15px] font-bold text-primary">
            {lang === "it" ? "Servizio ai tavoli" : "Table service charge"}: €
            {data.tableServiceCharge.toFixed(2)}
          </p>
          <div className="text-[12px] leading-relaxed text-muted-foreground">
            <p className="italic">
              {lang === "it" ? data.allergenNotice.it : data.allergenNotice.en}
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
