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

export interface PortfolioVideoItem {
  id: number;
  videoPath: string;
  alt: string;
}

export interface KolManagementData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    imagePath: string;
  };
  pillars: ServiceDetail[];
  benefits: ServiceDetail[];
  workflow: WorkflowStep[];
  portfolio: PortfolioVideoItem[];
}

// Data Utama Layanan KOL Management NORTHRE CREATIVE STUDIO
export const kolManagementContent: KolManagementData = {
  hero: {
    title: "KOL Management",
    subtitle: "Influencer & Key Opinion Leader Amplification",
    description: "Kami menghubungkan brand Anda dengan kreator konten dan Key Opinion Leader yang memiliki audiens loyal dan relevan. Mulai dari proses kurasi berbasis data metrik asli, negosiasi kontrak, penyusunan brief kreatif, hingga pelaporan analisis dampak kampanye siber secara transparan untuk memastikan efisiensi ROI Anda.",
    imagePath: "/assets/img/kol-management/smm-bg.png" // Placeholder latar kanan kosong bawaan tema studio
  },
  pillars: [
    {
      id: "pillar-1",
      title: "Data-Driven KOL Scouting",
      description: "Riset dan kurasi mendalam untuk memilih influencer berdasarkan demografi audiens rill, tingkat keterikatan metrik, dan kesesuaian karakter brand Anda."
    },
    {
      id: "pillar-2",
      title: "Endorsement Strategy Blueprint",
      description: "Perancangan konsep kampanye promosi yang kreatif dan penyusunan draf briefing yang jelas agar penyampaian pesan produk tetap natural namun menjual."
    },
    {
      id: "pillar-3",
      title: "Contract Negotiation & Liaison",
      description: "Manajemen legalitas, negosiasi rate card, pengaturan jadwal posting, hingga pengamanan hak distribusi aset konten secara profesional."
    },
    {
      id: "pillar-4",
      title: "Campaign Tracking & ROI Reporting",
      description: "Pemantauan langsung selama kampanye berjalan serta penyusunan laporan komprehensif terkait jangkauan siber, impresi, klik, hingga konversi penjualan."
    }
  ],
  benefits: [
    {
      id: "benefit-1",
      title: "Kurasi Kreator Bebas Fraud",
      description: "Anda terhindar dari KOL dengan fake followers atau bot karena seluruh kandidat telah kami audit performa metrik aslinya secara berkala."
    },
    {
      id: "benefit-2",
      title: "Komunikasi Terpusat & Praktis",
      description: "Tim Anda tidak perlu pusing mengurusi obrolan atau negosiasi dengan puluhan akun influencer; seluruh komunikasi dikelola terpusat oleh kami."
    },
    {
      id: "benefit-3",
      title: "Dampak Pemasaran Terukur",
      description: "Setiap rupiah yang Anda keluarkan untuk endorsement dapat dilacak dampaknya secara transparan lewat data analitik performa yang akurat."
    }
  ],
  workflow: [
    {
      step: 1,
      title: "Campaign Objective Mapping",
      description: "Penentuan gol utama kampanye endorsement (apakah untuk menaikkan kesadaran brand atau mengejar target konversi penjualan produk)."
    },
    {
      step: 2,
      title: "Persona Filtering & Roster",
      description: "Penyusunan daftar rekomendasi barisan KOL (Macro, Micro, atau Nano) yang paling sesuai dengan anggaran dana dan kriteria target pasar."
    },
    {
      step: 3,
      title: "Legal Contracting & Onboarding",
      description: "Proses penguncian kerja sama lewat kontrak resmi, pembayaran deposit rate card, dan pengiriman sampel produk fisik ke alamat kreator."
    },
    {
      step: 4,
      title: "Content Review & Approval",
      description: "Pemeriksaan kualitas draf video atau foto yang dibuat oleh KOL sebelum resmi diunggah ke media sosial guna menghindari kesalahan informasi."
    },
    {
      step: 5,
      title: "Performance Impact Audit",
      description: "Penarikan data metrik wawasan dari akun KOL setelah konten tayang untuk dianalisis efektivitas keberhasilan kampanyenya."
    }
  ],
  portfolio: [
    { id: 1, videoPath: "/assets/img/kol-management/1.mp4", alt: "Northre KOL Management Portfolio Model 1" },
    { id: 5, videoPath: "/assets/img/kol-management/5.mp4", alt: "Northre KOL Management Portfolio Model 5" },
    { id: 2, videoPath: "/assets/img/kol-management/2.mp4", alt: "Northre KOL Management Portfolio Model 2" },
    { id: 6, videoPath: "/assets/img/kol-management/6.mp4", alt: "Northre KOL Management Portfolio Model 6" },
    { id: 3, videoPath: "/assets/img/kol-management/3.mp4", alt: "Northre KOL Management Portfolio Model 3" },
    { id: 7, videoPath: "/assets/img/kol-management/7.mp4", alt: "Northre KOL Management Portfolio Model 7" },
    { id: 4, videoPath: "/assets/img/kol-management/4.mp4", alt: "Northre KOL Management Portfolio Model 4" },
    { id: 8, videoPath: "/assets/img/kol-management/8.mp4", alt: "Northre KOL Management Portfolio Model 8" }
  ]
};