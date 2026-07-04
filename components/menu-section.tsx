import { MenuCategory } from "@/types/menu";
import MenuCard from "./menu-card";

interface MenuSectionProps {
  category: MenuCategory;
  lang: "it" | "en";
}

export default function MenuSection({ category, lang }: MenuSectionProps) {
  // Se la lingua è inglese, usiamo 'subtitle' (che contiene il testo inglese) come titolo principale
  const sectionTitle = lang === "en" && category.subtitle ? category.subtitle : category.title;

  return (
    <section id={category.id} className="mb-12 scroll-mt-32">
      {/* Divisore di categoria stilizzato */}
      <div className="mb-6 flex items-center gap-4">
        <div className="h-1px flex-1 bg-linear-to-r from-transparent to-scirocco-line" />
        <div className="text-center min-w-35">
          <h2 className="font-bold uppercase tracking-[0.3em] text-primary">
            {sectionTitle}
          </h2>
        </div>
        <div className="h-1px flex-1 bg-linear-to-l from-transparent to-scirocco-line" />
      </div>

      {/* Griglia */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {category.items.map((item) => (
          <MenuCard key={item.id} item={item} lang={lang} />
        ))}
      </div>
    </section>
  );
}
