import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      // Salva os arquivos de script e estilização
      {
        source: "/(.*)\\.(js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          }
        ]
      },

      // Salva as imagens em cache
      {
        source: "/(.*)\\.(png|webp|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          }
        ]
      }
    ]
  }
};

export default nextConfig;
