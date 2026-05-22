export interface ValueItem {
  id: string;
  title: string;
  iconType: "bold" | "chart" | "execution"; // Penentu komponen ikon dengan standardisasi Tailwind v4 nanti
  description: string;
}

export interface AboutContentData {
  subtitle: string;
  title: string;
  description: string;
  manifesto: {
    heading: string;
    text1: string;
    text2: string;
  };
  coreValues: ValueItem[];
}

// Konfigurasi Data Halaman Tentang Kami NORTHRE Creative Studio
export const aboutContent: AboutContentData = {
  subtitle: "Who We Are",
  title: "NORTHRE CREATIVE STUDIO ADALAH SOLUSI TERBAIK UNTUK KONTEN BERKELAS BRAND KAMU.",
  description: "Kami bukan sekadar agensi media sosial biasa. Kami adalah studio kreatif yang menggabungkan intuisi seni, strategi konten modern, dan eksekusi visual tingkat tinggi untuk mendominasi digital pasar.",
  
  manifesto: {
    heading: "KREATIVITAS TANPA BATAS, EKSEKUSI TANPA AMPUN.",
    text1: "Didirikan atas dasar kegelisahan terhadap konten digital yang monoton, NORTHRE hadir sebagai mitra strategis untuk mendobrak batasan kreatif brand Anda. Kami percaya bahwa setiap aset visual—baik itu foto produk, video sinematik, hingga manajemen KOL—harus memiliki jiwa dan daya pikat yang masif bagi audiens.",
    text2: "Kami bekerja di dalam ekosistem yang bergerak cepat, menganalisis tren secara real-time, dan memproduksi konten berkualitas tinggi yang konsisten. Di NORTHRE, kami tidak hanya menaikkan level media sosial Anda; kami membangun reputasi digital brand Anda agar bertahan lama dan relevan."
  },

  // Nilai-nilai inti (Core Values) yang diterapkan dalam kerja tim studio
  coreValues: [
    {
      id: "bold-creativity",
      title: "Bold Creativity",
      iconType: "bold",
      description: "Kami tidak takut mengambil risiko kreatif. Setiap konsep dirancang untuk menonjol, menantang status quo, dan keluar dari zona nyaman konten mainstream."
    },
    {
      id: "data-driven",
      title: "Data-Driven Strategy",
      iconType: "chart",
      description: "Intuisi kreatif kami divalidasi oleh data analytics. Kami menganalisis pergerakan tren pasar dan algoritma platform agar konten yang diproduksi terdistribusi secara tepat sasaran."
    },
    {
      id: "high-end-execution",
      title: "High-End Execution",
      iconType: "execution",
      description: "Dari pra-produksi hingga sentuhan akhir editing, kami berkomitmen pada kualitas pixel-perfect. Detail visual yang premium adalah standar mutlak bagi setiap klien kami."
    }
  ]
};