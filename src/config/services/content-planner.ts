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

export interface ContentPlannerData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    imagePath: string;
  };
  pillars: ServiceDetail[];
  benefits: ServiceDetail[];
  workflow: WorkflowStep[];
  portfolio: PortfolioItem[];
}

// Data Utama Layanan Content Planner NORTHRE CREATIVE STUDIO
export const contentPlannerContent: ContentPlannerData = {
  hero: {
    title: "Content Planner",
    subtitle: "Strategic Content Architecture",
    description: "Kami merancang cetak biru strategi konten jangka panjang yang terukur untuk brand Anda. Melalui riset audiens yang mendalam, pemetaan pilar konten, tren siber terkini, dan kalender editorial yang presisi guna memastikan setiap konten yang rilis memiliki tujuan konversi yang jelas.",
    imagePath: "/assets/img/content-planner/smm-bg.png" // Placeholder latar kanan kosong bawaan tema studio
  },
  pillars: [
    {
      id: "pillar-1",
      title: "Auditing & Market Research",
      description: "Analisis mendalam terhadap performa akun lama Anda, bedah strategi kompetitor, dan pemetaan demografi target audiens untuk menemukan peluang celah pasar."
    },
    {
      id: "pillar-2",
      title: "Content Pillars & Buckets Blueprint",
      description: "Penyusunan kategori topik utama yang seimbang antara edukasi, interaksi, hiburan, dan promosi jualan agar lini feed Anda memiliki struktur visual yang kuat."
    },
    {
      id: "pillar-3",
      title: "Editorial Calendar & Scheduling",
      description: "Pembuatan kalender kerja konten bulanan yang rapi, lengkap dengan taktik instruksi prime-time tayang, panduan caption, dan optimalisasi frekuensi postingan."
    },
    {
      id: "pillar-4",
      title: "Analytics & Performance Brief",
      description: "Evaluasi data metrik performa secara berkala untuk memantau grafik pertumbuhan jangkauan siber, engagement, hingga efektivitas konversi strategi promosi."
    }
  ],
  benefits: [
    {
      id: "benefit-1",
      title: "Feed Konsisten & Terstruktur",
      description: "Menghilangkan kendala kebingungan topik harian; seluruh aset materi konten Anda sudah direncanakan, dijadwalkan, dan tertata rapi sejak awal bulan."
    },
    {
      id: "benefit-2",
      title: "Strategi Berbasis Goals Bisnis",
      description: "Setiap ide konten yang kami rancang memiliki fungsi konversi yang jelas, baik untuk membangun kesadaran brand (awareness) maupun memicu penjualan rill."
    },
    {
      id: "benefit-3",
      title: "Efisiensi Waktu & Resource",
      description: "Tim internal atau kreator visual Anda bisa fokus penuh pada proses produksi karena seluruh konsep kreatif, skrip, dan struktur hook sudah matang disiapkan."
    }
  ],
  workflow: [
    {
      step: 1,
      title: "Brand Voice Discovery",
      description: "Sesi diskusi intensif untuk membedah nilai unik produk, gaya komunikasi (tone of voice), target audiens spesifik, dan tujuan utama gol bisnis Anda."
    },
    {
      step: 2,
      title: "Trend & Keyword Extraction",
      description: "Proses pencarian tren industri siber terbaru, riset topik viral potensial, serta penarikan kata kunci yang paling banyak dicari oleh target pasar."
    },
    {
      step: 3,
      title: "Strategy & Hook Ideation",
      description: "Pengembangan ide kreatif ke dalam draf konsep konten matang, lengkap dengan perancangan struktur kalimat hook pembuka yang memikat perhatian."
    },
    {
      step: 4,
      title: "Editorial Board Creation",
      description: "Penataan seluruh draf ide ke dalam sistem kalender kerja digital terintegrasi yang dapat dipantau dan diulas oleh klien secara real-time."
    },
    {
      step: 5,
      title: "Monthly Evaluation Brief",
      description: "Tinjauan menyeluruh terhadap data performa konten yang telah tayang sebagai bahan evaluasi mutlak untuk menyusun arsitektur strategi bulan berikutnya."
    }
  ],
  portfolio: [
    { id: 1, imagePath: "/assets/img/content-planner/1.png", alt: "Northre Content Planner Blueprint Mockup 1" },
    { id: 2, imagePath: "/assets/img/content-planner/2.png", alt: "Northre Content Planner Calendar Grid 2" },
    { id: 3, imagePath: "/assets/img/content-planner/3.png", alt: "Northre Content Planner Strategy Document 3" },
    { id: 4, imagePath: "/assets/img/content-planner/4.png", alt: "Northre Content Planner Performance Analytics 4" }
  ]
};