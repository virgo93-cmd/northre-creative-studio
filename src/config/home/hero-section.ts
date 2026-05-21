export interface HeroCTAButton {
  label: string;
  href: string;
  type: "primary" | "secondary";
}

export interface HomeHeroData {
  typewriterItems: string[];
  ctaButtons: HeroCTAButton[];
}

export const homeHeroContent: HomeHeroData = {
  typewriterItems: [
    "EKSEKUSI KONTEN VIRAL",
    "STRATEGI MANAJEMEN INFLUENCER",
    "PRODUKSI VISUAL CINEMATIC",
    "OPTIMASI KATALOG PRODUK"
  ],
  ctaButtons: [
    { label: "Mulai Kolaborasi", href: "https://wa.me/your-number", type: "primary" },
    { label: "Lihat Portofolio", href: "#portfolio-showcase", type: "secondary" }
  ]
};