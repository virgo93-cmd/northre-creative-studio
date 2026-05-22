import { siteConfig } from "./site";

export interface ContactInfoItem {
  title: string;
  value: string;
  href?: string;
}

export interface ContactContentData {
  title: string;
  subtitle: string;
  description: string;
  whatsappNumber: string;
  infoItems: ContactInfoItem[];
  serviceOptions: string[];
}

export const contactContent: ContactContentData = {
  subtitle: "Get In Touch",
  // Judul lama diganti total & diubah ke HURUF BESAR SEMUA
  title: "MARI BANGUN IDENTITAS BRAND KAMU DENGAN KONTEN-KONTEN YANG BERKELAS BERSAMA NORTHRE CREATIVE STUDIO.",
  // Deskripsi lama tetap ada, dan ditambahkan kata-kata baru di bawahnya
  description: "Punya ide kreatif, proyek media sosial, atau kebutuhan produksi aset visual yang ingin didiskusikan? Tim kami di NORTHRE siap membantu menerjemahkan visi brand Anda menjadi kenyataan. Karena brand yang kuat dimulai dari visual yang menarik, strategi yang tepat, dan konten yang mampu membangun kepercayaan.",
  // Otomatis mengambil nomor WA dari site.ts, diubah formatnya ke 62 di fungsi page.tsx nanti
  whatsappNumber: siteConfig.contact.whatsapp, 
  infoItems: [
    {
      title: "Email Resmi",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`
    },
    {
      title: "Studio Lokasi",
      value: siteConfig.contact.address,
    },
    {
      title: "Jam Operasional",
      value: "Senin - Sabtu, 09:00 - 17:00 WIB"
    }
  ],
  serviceOptions: [
    "Social Media Management",
    "Product Photography",
    "Video Production",
    "Content Planner",
    "KOL Management",
    "Logo Design",
    "Web Design"
  ]
};