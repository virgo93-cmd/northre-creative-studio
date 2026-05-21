export interface JobItem {
  id: string;
  title: string;
  type: string;        // Contoh: "Full-time", "Part-time", "Internship"
  location: string;    // Contoh: "On-site Tasikmalaya", "Remote"
  iconType: "social" | "media" | "kol" | "design" | "web"; // Penentu komponen ikon di TSX nanti
  description: string;
}

export interface CareerContentData {
  subtitle: string;
  title: string;
  description: string;
  emptyState: {
    title: string;
    message: string;
    buttonText: string;
    whatsappMessage: string;
  };
}

// Konfigurasi Data Halaman Karir NORTHRE Creative Studio
export const careerContent: CareerContentData = {
  subtitle: "We Are Growing",
  title: "BERGABUNG DAN BERKARYA BERSAMA TIM NORTHRE.",
  description: "Kami selalu percaya bahwa karya yang luar biasa lahir dari kolaborasi talenta-talenta hebat. Meskipun formasi tim kami saat ini sedang lengkap, kami selalu terbuka untuk mengenal kreator berbakat seperti Anda.",
  
  // Konten khusus ketika lowongan sedang kosong (0 posisi)
  emptyState: {
    title: "Saat ini semua posisi telah terisi",
    message: "Terima kasih atas antusiasme besar Anda. Saat ini tim planner, kreator, dan developer kami di studio sedang berada dalam formasi penuh. Namun, jangan berkecil hati—kami selalu mengumpulkan database talenta terbaik untuk proyek kreatif kami berikutnya.",
    buttonText: "Kirim Portofolio ke Database Kami",
    whatsappMessage: "Halo NORTHRE Creative Studio! Saya tertarik untuk mengirimkan portofolio saya agar masuk ke dalam database talenta (Talent Pool) NORTHRE untuk peluang kolaborasi di masa depan.",
  }
};

// Daftar lowongan kerja aktif (Sekarang di-set kosong / 0 sesuai diskusi)
export const activeJobs: JobItem[] = [
  /* Contoh pengisian di masa depan kalau lo mau buka lowongan, tinggal hapus komentar ini:
  {
    id: "social-media-specialist",
    title: "Social Media Specialist",
    type: "Full-time",
    location: "On-site Tasikmalaya",
    iconType: "social",
    description: "Mengelola strategi konten, pilar konten, dan optimasi pertumbuhan organik brand klien."
  },
  */
];