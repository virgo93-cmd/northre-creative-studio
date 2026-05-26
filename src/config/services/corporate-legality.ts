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

export interface CorporateLegalityData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    imagePath: string;
  };
  pillars: ServiceDetail[];
  benefits: ServiceDetail[];
  workflow: WorkflowStep[];
}

// Data Utama Layanan Corporate Legality - NORTHRE CREATIVE STUDIO
export const corporateLegalityContent: CorporateLegalityData = {
  hero: {
    title: "Corporate Legality",
    subtitle: "Business Setup & Entity Establishment",
    description: "Kami membantu transformasikan bisnis lokal Anda menjadi entitas hukum resmi yang kredibel dan diakui negara. Mulai dari pendirian PT Perorangan untuk UMKM, PT Persekutuan Modal, hingga CV. Proses kami kelola secara transparan, cepat, dan legal dengan dukungan jaringan notaris berpengalaman untuk mengamankan fondasi bisnis Anda.",
    imagePath: "/assets/img/legal-protection/corporate-bg.png" // Path aset latar belakang seksi hero
  },
  pillars: [
    {
      id: "pillar-1",
      title: "PT Persekutuan Modal",
      description: "Pendirian Perseroan Terbatas reguler yang didirikan oleh 2 orang atau lebih dengan pembagian saham yang jelas dan legalitas Kemenkumham penuh."
    },
    {
      id: "pillar-2",
      title: "PT Perorangan (UMKM)",
      description: "Solusi praktis pendirian PT untuk pendiri tunggal skala mikro dan kecil tanpa batas minimum modal dasar, sangat cocok untuk akselerasi bisnis UMKM."
    },
    {
      id: "pillar-3",
      title: "Persekutuan Komanditer (CV)",
      description: "Pendirian badan usaha komanditer dengan struktur sekutu aktif dan pasif yang fleksibel untuk berbagai lini industri dagang dan jasa."
    }
  ],
  benefits: [
    {
      id: "benefit-1",
      title: "Proses Cepat & Transparan",
      description: "Seluruh tahapan pendaftaran terpantau jelas dengan estimasi waktu pengerjaan yang terukur hingga dokumen resmi Anda terbit."
    },
    {
      id: "benefit-2",
      title: "Paket Dokumen Legal Lengkap",
      description: "Anda menerima dokumen operasional badan usaha instan yang absah: Akta Notaris, SK Pengesahan Kemenkumham, NPWP Badan, hingga NIB."
    },
    {
      id: "benefit-3",
      title: "Konsultasi Struktur Bisnis",
      description: "Tim legal kami siap mendampingi Anda menganalisis kebutuhan bisnis agar tidak salah dalam menentukan jenis badan usaha dan pengisian KBLI."
    }
  ],
  workflow: [
    {
      step: 1,
      title: "Entity Consultation & Intake",
      description: "Sesi konsultasi awal untuk menentukan jenis badan usaha (PT/CV), pengecekan ketersediaan nama perusahaan, serta pengumpulan berkas identitas para pendiri."
    },
    {
      step: 2,
      title: "Deed Drafting & Notarization",
      description: "Penyusunan draf anggaran dasar perusahaan oleh legal expert kami dan proses penandatanganan Akta Pendirian resmi di hadapan Notaris rekanan."
    },
    {
      step: 3,
      title: "Kemenkumham Ratification",
      description: "Pengajuan pengesahan badan hukum ke Kementerian Hukum dan Hak Asasi Manusia untuk menerbitkan SK resmi pendirian perusahaan Anda."
    },
    {
      step: 4,
      title: "Tax & NIB Licensing",
      description: "Pendaftaran NPWP atas nama Badan Usaha baru serta pengurusan Nomor Induk Berusaha (NIB) melalui sistem OSS RBA sebagai izin dasar operasional."
    },
    {
      step: 5,
      title: "Final Document Handover",
      description: "Pemeriksaan akhir seluruh validitas dokumen hukum dan penyerahan berkas fisik maupun digital legalitas perusahaan Anda secara lengkap."
    }
  ]
};