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

export interface VideoProductionData {
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

// Data Utama Layanan Video Production NORTHRE CREATIVE STUDIO
export const videoProductionContent: VideoProductionData = {
  hero: {
    title: "Video Production",
    subtitle: "Tingkatkan Kehadiran Digital Anda",
    description: "Kami menghidupkan narasi brand Anda melalui produksi video komersial berstandar sinematik. Mulai dari perancangan skrip yang emosional, eksekusi kamera profesional, hingga sentuhan pasca-produksi modern untuk memikat perhatian audiens di platform siber.",
    imagePath: "/assets/img/video-production/smm-bg.png" // Placeholder latar kanan kosong bawaan tema studio
  },
  pillars: [
    {
      id: "pillar-1",
      title: "Commercial & Brand Advertisement",
      description: "Pembuatan video iklan produk digital, profil perusahaan, dan materi kampanye brand berskala premium untuk memperkuat conversion rate."
    },
    {
      id: "pillar-2",
      title: "Short-Form Content (Reels & TikTok)",
      description: "Produksi konten video pendek format portrait dengan ritme cepat, hook visual yang kuat, dan gaya editing dinamis khas anak muda."
    },
    {
      id: "pillar-3",
      title: "Event Aftermovie Documentation",
      description: "Dokumentasi kegiatan, peluncuran produk, eksibisi, atau aktivasi brand dengan penangkapan momen sinematografi yang hidup dan berenergi."
    },
    {
      id: "pillar-4",
      title: "Motion Graphics & Title Effects",
      description: "Sentuhan animasi grafis modern, elemen tipografi kinetik, serta perancangan VFX untuk memperkuat penyampaian pesan digital brand Anda."
    }
  ],
  benefits: [
    {
      id: "benefit-1",
      title: "Retensi Audiens Tertinggi",
      description: "Materi video komersial terbukti memiliki tingkat keterikatan dan retensi penonton yang jauh lebih lama dibandingkan media visual statis."
    },
    {
      id: "benefit-2",
      title: "Kredibilitas Brand Naik Class",
      description: "Kualitas audio visual berskala sinematik secara instan mendongkrak kelas dan tingkat kepercayaan konsumen terhadap brand Anda."
    },
    {
      id: "benefit-3",
      title: "Optimasi Multi-Platform",
      description: "Setiap aset video diproduksi dan dieksekusi dengan aspek rasio serta format teknis yang tepat untuk berbagai kebutuhan platform promosi."
    }
  ],
  workflow: [
    {
      step: 1,
      title: "Scripting & Storyboarding",
      description: "Penerjemahan ide mentah menjadi draf naskah matang, skenario matang, dan draf papan cerita visual sebelum proses syuting dimulai."
    },
    {
      step: 2,
      title: "Pre-Production Setup",
      description: "Penentuan lokasi syuting, pemilihan talent atau model, penyusunan jadwal eksekusi, serta penyiapan teknis set peralatan kamera."
    },
    {
      step: 3,
      title: "Production (On-Set)",
      description: "Sesi eksekusi pengambilan gambar langsung di lapangan atau studio dengan penataan tata cahaya dramatis dan pengarahan sutradara."
    },
    {
      step: 4,
      title: "Post-Production Phase",
      description: "Tahap perakitan materi video, pemotongan ritme (cutting), color grading sinematik, penyelarasan efek suara, dan lisensi audio musik."
    },
    {
      step: 5,
      title: "Final Master Delivery",
      description: "Penyerahan hasil akhir kompilasi video resolusi tinggi (4K/Full HD) yang siap diunggah ke berbagai ekosistem digital media."
    }
  ],
  portfolio: [
    { id: 1, videoPath: "/assets/img/video-production/vd1.mp4", alt: "Northre Video Production Portfolio 1" },
    { id: 2, videoPath: "/assets/img/video-production/vd2.mp4", alt: "Northre Video Production Portfolio 2" },
    { id: 3, videoPath: "/assets/img/video-production/vd3.mp4", alt: "Northre Video Production Portfolio 3" },
    { id: 4, videoPath: "/assets/img/video-production/vd4.mp4", alt: "Northre Video Production Portfolio 4" }
  ]
};