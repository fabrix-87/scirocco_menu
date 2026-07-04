import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Se usi l'import delle immagini locale senza un server di ottimizzazione:
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
