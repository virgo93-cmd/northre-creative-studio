// Interface untuk memastikan tipe data konsisten dan aman (Type-Safe)
export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  imagePath: string;
  alt: string;
}

export interface SocialMediaData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    imagePath: string; // Tambahan property path gambar hero kustom lu
  };
  pillars: ServiceDetail[];
  benefits: ServiceDetail[];
  workflow: WorkflowStep[];
  portfolio: PortfolioItem[];
}

// Data Utama Layanan Social Media Management NORTHRE (Sudah Bahasa Indonesia)
export const socialMediaContent: SocialMediaData = {
  hero: {
    title: "Manajemen Media Sosial",
    subtitle: "Tingkatkan Kehadiran Digital Anda",
    description: "Kami mengambil alih pengelolaan media sosial bisnis Anda secara ujung-ke-ujung. Mulai dari riset mendalam, perancangan strategi konten, produksi visual yang estetik, hingga analisis performa berkala untuk mendongkrak value dan jangkauan pasar brand Anda secara profesional.",
    imagePath: "/assets/img/social-media-management/smm-bg.png" // Mendaftarkan file aset baru lu
  },
  pillars: [
    {
      id: "pillar-1",
      title: "Riset & Strategi Konten",
      description: "Analisis kompetitor secara mendalam, riset tren pasar terkini, dan penentuan pilar konten serta tone of voice yang relevan dengan target audiens bisnis Anda."
    },
    {
      id: "pillar-2",
      title: "Copywriting Kreatif",
      description: "Pembuatan caption yang persuasif, penulisan hashtag strategis, serta penyusunan skrip video pendek (Reels/TikTok) yang memicu interaksi dan konversi."
    },
    {
      id: "pillar-3",
      title: "Desain Visual & Animasi",
      description: "Produksi aset grafis feed/stories dengan visual premium yang konsisten, serta editing video kreatif dengan ritme sinematik khas anak muda."
    },
    {
      id: "pillar-4",
      title: "Penjadwalan & Analisis",
      description: "Manajemen jadwal tayang di jam-jam prime time operasional siber serta pemberian laporan performa bulanan (insight report) berbasis data nyata."
    }
  ],
  benefits: [
    {
      id: "benefit-1",
      title: "Efisiensi Waktu Bisnis",
      description: "Anda bisa fokus sepenuhnya pada operasional dan pengembangan bisnis, sementara konsistensi digital brand Anda diurus oleh tim ahli kami."
    },
    {
      id: "benefit-2",
      title: "Visual Premium & Konsisten",
      description: "Membangun kepercayaan konsumen lewat tampilan media sosial yang rapi, profesional, dan mencerminkan identitas unik brand Anda."
    },
    {
      id: "benefit-3",
      title: "Strategi Berbasis Data",
      description: "Bukan sekadar asal posting konten. Setiap langkah produksi didasari oleh riset tren dan evaluasi metrik performa berkala."
    }
  ],
  workflow: [
    {
      step: 1,
      title: "Discovery & Briefing",
      description: "Sesi diskusi awal untuk memahami visi bisnis, produk, keunikan, serta tujuan jangka panjang yang ingin dicapai oleh brand Anda."
    },
    {
      step: 2,
      title: "Planning & Strategy",
      description: "Penyusunan kalender konten sebulan penuh (content calendar) yang berisi draf ide, konsep visual, dan pilar komunikasi untuk disetujui."
    },
    {
      step: 3,
      title: "Production Phase",
      description: "Proses eksekusi kreatif di studio, mulai dari perancangan desain grafis, penulisan copy, hingga proses editing video aset."
    },
    {
      step: 4,
      title: "Review & Approval",
      description: "Kami memberikan akses penuh bagi Klien untuk meninjau seluruh draf konten sebelum dijadwalkan mengudara di media sosial."
    },
    {
      step: 5,
      title: "Publish & Report",
      description: "Konten resmi ditayangkan sesuai jadwal terbaik. Di akhir periode, kami menyajikan laporan evaluasi metrik pertumbuhan akun."
    }
  ],
  portfolio: [
    { id: 1, imagePath: "/assets/img/social-media-management/1.png", alt: "Northre SMM Portfolio 1" },
    { id: 2, imagePath: "/assets/img/social-media-management/2.png", alt: "Northre SMM Portfolio 2" },
    { id: 3, imagePath: "/assets/img/social-media-management/3.png", alt: "Northre SMM Portfolio 3" },
    { id: 4, imagePath: "/assets/img/social-media-management/4.png", alt: "Northre SMM Portfolio 4" },
    { id: 5, imagePath: "/assets/img/social-media-management/5.png", alt: "Northre SMM Portfolio 5" },
    { id: 6, imagePath: "/assets/img/social-media-management/6.png", alt: "Northre SMM Portfolio 6" },
    { id: 7, imagePath: "/assets/img/social-media-management/7.png", alt: "Northre SMM Portfolio 7" },
    { id: 8, imagePath: "/assets/img/social-media-management/8.png", alt: "Northre SMM Portfolio 8" },
    { id: 9, imagePath: "/assets/img/social-media-management/9.png", alt: "Northre SMM Portfolio 9" },
    { id: 10, imagePath: "/assets/img/social-media-management/10.png", alt: "Northre SMM Portfolio 10" },
    { id: 11, imagePath: "/assets/img/social-media-management/11.png", alt: "Northre SMM Portfolio 11" },
    { id: 12, imagePath: "/assets/img/social-media-management/12.png", alt: "Northre SMM Portfolio 12" }
  ]
};