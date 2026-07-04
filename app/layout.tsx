import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Scirocco - Menu Digitale",
  description: "Menu digitale ufficiale di Scirocco",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${arimo.variable} scroll-smooth`}>
      <body className="bg-scirocco-bg font-sans text-scirocco-text antialiased">{children}</body>
    </html>
  );
}
