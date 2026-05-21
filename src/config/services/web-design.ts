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

export interface WebDesignData {
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

// Data Utama Layanan Web Desain - NORTHRE CREATIVE STUDIO (Kategori: Design & Development)
export const webDesignContent: WebDesignData = {
  hero: {
    title: "Web Desain",
    subtitle: "High-Conversion UI/UX Architecture",
    description: "Kami merancang antarmuka website yang modern, interaktif, dan responsif untuk mengonversi pengunjung menjadi pelanggan setia. Melalui pendekatan riset user experience (UX) yang mendalam dan estetika user interface (UI) yang premium, kami memastikan platform digital brand Anda tampil menonjol dan bekerja optimal.",
    imagePath: "/assets/img/web-design/smm-bg.png" // Menggunakan aset banner latar kanan terpadu studio
  },
  pillars: [
    {
      id: "pillar-1",
      title: "Custom UI/UX Design & Prototyping",
      description: "Perancangan tata letak visual (wireframe) hingga prototype interaktif tingkat tinggi menggunakan Figma, disesuaikan khusus dengan karakteristik unik brand Anda."
    },
    {
      id: "pillar-2",
      title: "Responsive Corporate & Landing Pages",
      description: "Desain halaman web adaptif yang tampil sempurna dan proporsional di berbagai ukuran layar, mulai dari smartphone, tablet, hingga monitor desktop."
    },
    {
      id: "pillar-3",
      title: "E-Commerce Interface Architecture",
      description: "Arsitektur desain toko online yang fokus pada kenyamanan alur belanja (user journey), kemudahan navigasi produk, hingga optimalisasi tombol checkout."
    },
    {
      id: "pillar-4",
      title: "Design System & Asset Handoff",
      description: "Penyusunan dokumentasi komponen UI yang terstandarisasi (warna, tipografi, tombol, ikon) untuk mempermudah developer melakukan coding tanpa deviasi visual."
    }
  ],
  benefits: [
    {
      id: "benefit-1",
      title: "Peningkatan Retensi Pengunjung",
      description: "Navigasi yang intuitif dan struktur informasi yang rapi membuat pengunjung betah berlama-lama mengeksplorasi seluruh konten di dalam website Anda."
    },
    {
      id: "benefit-2",
      title: "Kepercayaan Brand Meningkat",
      description: "Tampilan visual yang premium, bersih, dan profesional secara instan mendongkrak kredibilitas dan nilai jual bisnis Anda di mata calon klien siber."
    },
    {
      id: "benefit-3",
      title: "Kesiapan Konversi Optimal",
      description: "Penempatan elemen Call-to-Action (CTA) dirancang secara strategis berdasarkan psikologi pengguna untuk memaksimalkan angka penjualan atau leads."
    }
  ],
  workflow: [
    {
      step: 1,
      title: "User Research & Discovery",
      description: "Riset mendalam mengenai target audiens, analisis kebutuhan fitur, dan pemetaan arsitektur informasi (sitemap) awal untuk fondasi website."
    },
    {
      step: 2,
      title: "Wireframing & Structural Layout",
      description: "Pembuatan kerangka struktural hitam-putih tanpa visual kompleks untuk menyepakati alur informasi dan penempatan konten utama."
    },
    {
      step: 3,
      title: "High-Fidelity UI Design",
      description: "Transformasi wireframe menjadi desain visual penuh warna yang mewah, menerapkan elemen branding, sistem tipografi, dan aset grafis studio."
    },
    {
      step: 4,
      title: "Interactive Prototyping",
      description: "Menghidupkan draf desain статис menjadi purwarupa interaktif yang dapat diklik untuk menyimulasikan pengalaman nyata sebelum masuk tahap coding."
    },
    {
      step: 5,
      title: "Design System & Dev Handoff",
      description: "Pengepakan seluruh aset desain, ikon, dan dokumentasi komponen UI secara rapi untuk diserahkan kepada tim developer agar siap dieksekusi."
    }
  ],
  portfolio: [
    { id: 1, imagePath: "/assets/img/web-design/1.png", alt: "Northre Web Design SaaS Dashboard Interface Presentation" },
    { id: 2, imagePath: "/assets/img/web-design/2.png", alt: "Northre Web Design Premium Corporate Landing Page" },
    { id: 3, imagePath: "/assets/img/web-design/3.png", alt: "Northre Web Design Minimalist E-Commerce Layout" },
    { id: 4, imagePath: "/assets/img/web-design/4.png", alt: "Northre Web Design Mobile App UI Responsive View" }
  ]
};