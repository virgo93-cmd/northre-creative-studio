export interface SubMenuItem {
  title: string;
  description: string;
  href: string;
  // Menyimpan path SVG ikon agar struktur ikon data-driven and bersih
  iconPath: string;
}

export interface MegaMenuCategory {
  categoryTitle: string;
  items: SubMenuItem[];
}

export interface NavItem {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
  megaMenuCategories?: MegaMenuCategory[];
}

// Konfigurasi Navigasi Global Terpusat NORTHRE Creative Studio
export const navigationContent: NavItem[] = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Produk",
    href: "/produk",
    hasMegaMenu: true,
    megaMenuCategories: [
      {
        categoryTitle: "Creative Marketing",
        items: [
          {
            title: "Social Media Management",
            description: "Optimasi dan pengelolaan konten siber brand secara profesional.",
            href: "/services/creative-marketing/social-media-management",
            iconPath: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1",
          },
          {
            title: "Product Photography",
            description: "Produksi foto produk komersial berkualitas tinggi dan estetik.",
            href: "/services/creative-marketing/product-photography",
            iconPath: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z", // Ditambah circle terpisah di komponen nanti
          },
          {
            title: "Video Production",
            description: "Pembuatan video kreatif, iklan, dan kebutuhan sinematik brand.",
            href: "/services/creative-marketing/video-production",
            iconPath: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
          },
          {
            title: "Content Planner",
            description: "Perancangan strategi dan pilar konten jangka panjang.",
            href: "/services/creative-marketing/content-planner",
            iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
          },
          {
            title: "KOL Management",
            description: "Kerjasama strategis dengan influencer untuk memperluas jangkauan.",
            href: "/services/creative-marketing/kol-management",
            iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
          },
        ],
      },
      {
        categoryTitle: "Design & Development",
        items: [
          {
            title: "Logo Design",
            description: "Konseptualisasi identitas visual dan logo yang berkarakter kuat.",
            href: "/services/design-development/logo-design",
            iconPath: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
          },
          {
            title: "Web Design",
            description: "Perancangan UI/UX website modern, interaktif, dan responsif.",
            href: "/services/design-development/web-design",
            iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
          },
        ],
      },
      // REVISI FIX: Mengubah /services/legal-brand-protection menjadi /services/legal-protection
      {
        categoryTitle: "Legal & Brand Protection",
        items: [
          {
            title: "Corporate Legality",
            description: "Pendirian badan usaha CV dan PT secara resmi, cepat, dan legal transparan.",
            href: "/services/legal-protection/corporate-legality",
            iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0V11m0 10V11m12 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
          },
          {
            title: "Intellectual Property",
            description: "Perlindungan aset merek dagang, hak cipta, dan pendaftaran HAKI komprehensif.",
            href: "/services/legal-protection/intellectual-property",
            iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
          },
        ],
      },
    ],
  },
  {
    label: "Paket",
    href: "/paket",
  },
  {
    label: "Tentang Kami",
    href: "/tentang-kami",
  },
  {
    label: "Karir",
    href: "/karir",
  },
  {
    label: "Kontak",
    href: "/kontak",
  },
];