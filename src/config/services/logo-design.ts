// Interface untuk memastikan konsistensi dan keamanan tipe data (Type-Safe)
export interface ServicePillar {
  id: string;
  title: string;
  description: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface PortfolioImageItem {
  id: number;
  imagePath: string;
  alt: string;
}

export interface LogoDesignData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    imagePath: string;
  };
  pillars: ServicePillar[];
  benefits: ServicePillar[];
  workflow: WorkflowStep[];
  portfolio: PortfolioImageItem[];
}

// Data Utama Layanan Logo Design - NORTHRE CREATIVE STUDIO (Kategori: Design & Development)
export const logoDesignContent: LogoDesignData = {
  hero: {
    title: "Logo Design",
    subtitle: "Conceptual Brand Identity Engineering",
    description: "Kami membangun identitas visual yang ikonik, berkarakter kuat, dan timeless untuk brand Anda. Melalui proses konseptualisasi yang mendalam, riset filosofi, dan eksekusi geometri yang presisi guna melahirkan sebuah logo yang mampu menyampaikan pesan bisnis Anda secara instan di pasar siber.",
    imagePath: "/assets/img/logo-design/smm-bg.png" // Menggunakan aset banner latar kanan terpadu studio
  },
  pillars: [
    {
      id: "pillar-1",
      title: "Corporate & Brand Logo Design",
      description: "Perancangan logo utama untuk perusahaan, produk, atau layanan baru dengan pendekatan visual yang profesional, bersih, dan adaptif di berbagai platform."
    },
    {
      id: "pillar-2",
      title: "Comprehensive Visual Guidelines",
      description: "Penyusunan buku panduan standarisasi logo (Branding Book) lengkap, mulai dari aturan penggunaan warna resmi, anatomi logo, sistem grid, hingga batasan penempatan visual."
    },
    {
      id: "pillar-3",
      title: "Typography & Custom Lettering",
      description: "Pemilihan sistem tipografi pendamping logo yang harmonis atau pembuatan logotype kustom yang unik untuk mempertegas karakteristik esensial brand Anda."
    },
    {
      id: "pillar-4",
      title: "Brand Identity Collateral Mockups",
      description: "Simulasi dan visualisasi penerapan logo pada berbagai media rill seperti kartu nama, kop surat, kemasan produk, hingga merchandise eksklusif agensi."
    }
  ],
  benefits: [
    {
      id: "benefit-1",
      title: "Ketahanan Visual Timeless",
      description: "Logo dirancang menggunakan prinsip kesederhanaan geometris yang kuat, memastikan identitas brand Anda tetap relevan, segar, dan kokoh hingga puluhan tahun ke depan."
    },
    {
      id: "benefit-2",
      title: "Skalabilitas Vektor Sempurna",
      description: "Konstruksi logo dibangun berbasis vektor murni yang super fleksibel, aman dan tajam saat diaplikasikan di media sekecil ikon aplikasi hingga sebesar baliho jalanan."
    },
    {
      id: "benefit-3",
      title: "Diferensiasi Pasar yang Otentik",
      description: "Desain yang orisinal dan sarat akan filosofi mendalam membuat entitas brand Anda langsung tampil mencolok dan mudah dikenali di tengah ketatnya persaingan industri."
    }
  ],
  workflow: [
    {
      step: 1,
      title: "Brand Core Immersion",
      description: "Sesi diskusi mendalam untuk membedah visi, misi, nilai unik perusahaan, serta pesan emosional terdalam yang ingin disampaikan melalui identitas visual."
    },
    {
      step: 2,
      title: "Visual Research & Moodboarding",
      description: "Analisis kompetitor industri dan penyusunan papan referensi visual (moodboard) untuk menyepakati arah estetika, gaya desain, dan psikologi warna."
    },
    {
      step: 3,
      title: "Sketching & Geometric Concept",
      description: "Proses eksplorasi ide secara organik lewat sketsa kasar tangan, dilanjutkan dengan rekayasa reka bentuk konstruksi geometri digital yang presisi."
    },
    {
      step: 4,
      title: "Presentation & Refinement",
      description: "Pemaparan beberapa konsep logo alternatif beserta filosofinya di atas mockup produk rill, dilanjutkan dengan sesi umpan balik untuk penyempurnaan detail."
    },
    {
      step: 5,
      title: "Golden Master Assets Delivery",
      description: "Penyerahan seluruh berkas file master komersial dalam format vektor resolusi tinggi (AI, SVG, EPS, PDF) beserta ringkuman dokumen panduan logo siap pakai."
    }
  ],
  portfolio: [
    { id: 1, imagePath: "/assets/img/logo-design/1.png", alt: "Northre Logo Design Blueprint Construction Showcase" },
    { id: 2, imagePath: "/assets/img/logo-design/2.png", alt: "Northre Logo Design Luxury Product Packaging Mockup" },
    { id: 3, imagePath: "/assets/img/logo-design/3.png", alt: "Northre Logo Design Corporate Stationery Branding" },
    { id: 4, imagePath: "/assets/img/logo-design/4.png", alt: "Northre Logo Design Minimalist Icon Typography" }
  ]
};