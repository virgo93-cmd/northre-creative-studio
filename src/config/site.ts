export const siteConfig = {
  // Identitas Utama Brand
  name: "NORTHRE CREATIVE STUDIO",
  description: "Solusi kreatif digital untuk mengembangkan brand dan bisnis Anda.",
  url: "https://northreofficial.com",

  // Data Kontak Resmi Kantor
  contact: {
    address: "Perumahan Griya Nugraha Blok B9, Kersanagara, Kec. Cibeureum, Kota Tasikmalaya, Jawa barat 46196",
    email: "northre26@gmail.com",
    whatsapp: "085147326083",
  },

  // Menu Navigasi Global (Bakal ditarik secara modular oleh Navbar & Footer)
  mainNav: [
    { title: "Beranda", href: "/" },
    { title: "Layanan", href: "#services" },
    { title: "Portofolio", href: "#portfolio" },
    { title: "Tentang Kami", href: "#about" },
    { title: "Kontak", href: "#contact" },
  ],

  // Link Sosial Media Resmi
  links: {
    facebook: "https://www.facebook.com/profile.php?id=61568480603408",
    youtube: "https://www.youtube.com/@Northre-Official/shorts",
    instagram: "https://www.instagram.com/northre_creative/",
  },
};

// Type definition untuk keamanan TypeScript
export type SiteConfig = typeof siteConfig;