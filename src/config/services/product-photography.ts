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

export interface ProductPhotographyData {
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

// Data Utama Layanan Product Photography NORTHRE CREATIVE STUDIO
export const productPhotographyContent: ProductPhotographyData = {
  hero: {
    title: "Product Photography",
    subtitle: "Tingkatkan Kehadiran Digital Anda",
    description: "Kami mentransformasi produk fisik Anda menjadi aset visual berskala komersial tingkat tinggi. Lewat penataan cahaya yang dramatis, komposisi artistik yang presisi, dan eksekusi kamera profesional untuk menonjolkan detail premium serta memicu keputusan pembelian klien secara instan.",
    imagePath: "/assets/img/product-photography/smm-bg.png" // Menggunakan background hero siber yang sinkron dengan tema studio
  },
  pillars: [
    {
      id: "pillar-1",
      title: "Studio Clean-Shot Commercial",
      description: "Foto produk dengan latar polos berstandar e-commerce internasional, fokus tajam pada detail material, serta akurasi warna objek yang presisi."
    },
    {
      id: "pillar-2",
      title: "Creative Concept & Stylized Crafting",
      description: "Foto produk bertema dengan penataan properti kustom, background tematik, dan konsep artistik yang memperkuat identitas unik brand Anda."
    },
    {
      id: "pillar-3",
      title: "Human Interest & Model Session",
      description: "Sesi foto produk yang diaplikasikan langsung oleh model profesional untuk membangun lifestyle feel dan kedekatan emosional dengan konsumen."
    },
    {
      id: "pillar-4",
      title: "High-End Macro & Detail Modeling",
      description: "Spesialisasi pengambilan gambar super dekat (macro) untuk produk bernilai tinggi guna menonjolkan kemewahan tekstur dan kilau material."
    }
  ],
  benefits: [
    {
      id: "benefit-1",
      title: "Menaikkan Value Produk",
      description: "Mengubah tampilan produk biasa kelihatan mahal dan eksklusif sehingga Anda bisa meningkatkan posisi harga jual di pasaran."
    },
    {
      id: "benefit-2",
      title: "Stopping Power Tinggi",
      description: "Visual komersial yang tajam dan berkarakter kuat memancing mata audiens untuk berhenti scrolling saat melihat materi promosi Anda."
    },
    {
      id: "benefit-3",
      title: "Akurasi Warna 99%",
      description: "Kalibrasi kamera studio menjamin warna produk asli dan warna di layar monitor akurat, menekan risiko retur dari pembeli."
    }
  ],
  workflow: [
    {
      step: 1,
      title: "Concept & Moodboard",
      description: "Diskusi detail mengenai arahan visual, referensi sudut pandang (angle), properti pendukung, dan pencahayaan yang diinginkan."
    },
    {
      step: 2,
      title: "Product Shipment",
      description: "Klien mengirimkan sampel produk fisik ke studio kami dengan aman beserta instruksi penanganan khusus jika ada."
    },
    {
      step: 3,
      title: "Studio Shooting Setup",
      description: "Proses penataan studio, kalibrasi warna lampu, penyusunan properti estetis, dan eksekusi pemotretan oleh tim fotografer."
    },
    {
      step: 4,
      title: "Digital Retouching",
      description: "Tahap pasca-produksi meliputi pembersihan debu, koreksi warna (color grading), manipulasi bayangan, dan penajaman resolusi."
    },
    {
      step: 5,
      title: "High-Res Delivery",
      description: "Penyerahan hasil akhir foto resolusi tinggi melalui cloud storage yang siap pakai untuk kebutuhan promosi cetak maupun siber."
    }
  ],
  portfolio: [
    { id: 1, imagePath: "/assets/img/product-photography/1.png", alt: "Northre Product Photography Portfolio 1" },
    { id: 2, imagePath: "/assets/img/product-photography/2.png", alt: "Northre Product Photography Portfolio 2" },
    { id: 3, imagePath: "/assets/img/product-photography/3.png", alt: "Northre Product Photography Portfolio 3" },
    { id: 4, imagePath: "/assets/img/product-photography/4.png", alt: "Northre Product Photography Portfolio 4" },
    { id: 5, imagePath: "/assets/img/product-photography/5.png", alt: "Northre Product Photography Portfolio 5" },
    { id: 6, imagePath: "/assets/img/product-photography/6.png", alt: "Northre Product Photography Portfolio 6" },
    { id: 7, imagePath: "/assets/img/product-photography/7.png", alt: "Northre Product Photography Portfolio 7" },
    { id: 8, imagePath: "/assets/img/product-photography/8.png", alt: "Northre Product Photography Portfolio 8" }
  ]
};