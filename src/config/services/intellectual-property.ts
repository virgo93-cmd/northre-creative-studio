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

export interface IntellectualPropertyData {
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

// Data Utama Layanan Intellectual Property - NORTHRE CREATIVE STUDIO
export const intellectualPropertyContent: IntellectualPropertyData = {
  hero: {
    title: "Intellectual Property",
    subtitle: "Brand Protection & Trademark Copyright",
    description: "Amankan aset kreatif, nama brand, dan inovasi bisnis Anda sebelum didahului kompetitor. Kami mengelola seluruh proses pendaftaran Hak Kekayaan Intelektual (HAKI) Anda secara profesional ke DJKI. Mulai dari penelusuran potensi penolakan secara mendalam, penyiapan berkas legal, hingga pemantauan status berkala untuk memastikan hak distribusi eksklusif Anda terlindungi hukum negara.",
    imagePath: "/assets/img/legal-protection/ip-bg.png" // Path aset latar belakang seksi hero
  },
  pillars: [
    {
      id: "pillar-1",
      title: "Pendaftaran Merek Dagang",
      description: "Perlindungan hukum eksklusif untuk nama brand, logo identitas visual, tagline, atau kombinasi warna bisnis Anda agar tidak bisa ditiru atau digugat pihak lain."
    },
    {
      id: "pillar-2",
      title: "Hak Cipta (Copyright)",
      description: "Pencatatan resmi perlindungan karya seni, desain grafis, video sinematik, fotografi komersial, musik, hingga kode software hasil ciptaan orisinal Anda."
    },
    {
      id: "pillar-3",
      title: "Desain Industri",
      description: "Perlindungan atas estetika bentuk, konfigurasi, komposisi garis, atau warna produk fisik unik yang menjadi ciri khas keaslian komoditas dagang Anda."
    }
  ],
  benefits: [
    {
      id: "benefit-1",
      title: "Screening Anti-Tolak DJKI",
      description: "Kami melakukan penelusuran database PDKI DJKI secara mendalam di awal untuk menganalisis risiko kemiripan guna meminimalisir potensi penolakan pendaftaran."
    },
    {
      id: "benefit-2",
      title: "Perlindungan Aset Komprehensif",
      description: "Menjaga value investasi branding yang sudah Anda bangun di studio kami, memastikan seluruh hak komersial dan hak moral aset kreatif mutlak milik Anda."
    },
    {
      id: "benefit-3",
      title: "Pemantauan Status Berkala",
      description: "Anda tidak perlu pusing memantau masa pengumuman dan pemeriksaan substantif yang memakan waktu berbulan-bulan; seluruh proses dikawal penuh oleh tim legal kami."
    }
  ],
  workflow: [
    {
      step: 1,
      title: "Trademark Search & Analysis",
      description: "Proses penelusuran awal nama atau logo pada database resmi hak kekayaan intelektual nasional untuk memetakan kelas barang/jasa dan peluang keberhasilan."
    },
    {
      step: 2,
      title: "Legal Document Assembly",
      description: "Pengumpulan berkas pendukung wajib, mulai dari KTP/Akta Perusahaan, tanda tangan digital, klaim hak prioritas (jika ada), hingga penyiapan draf file logo resmi."
    },
    {
      step: 3,
      title: "Official PNBP Payment",
      description: "Penyetoran tarif Penerimaan Negara Bukan Pajak (PNBP) resmi ke kas negara untuk mendapatkan kode billing dan nomor permohonan pendaftaran HAKI."
    },
    {
      step: 4,
      title: "DJKI Portal Submission",
      description: "Proses submit pendaftaran aset intelektual ke sistem DJKI Kemenkumham secara presisi guna menerbitkan Bukti Tanda Terima resmi pendaftaran Anda."
    },
    {
      step: 5,
      title: "Monitoring & Certificate Delivery",
      description: "Pengawalan jalannya proses publikasi dan pemeriksaan substantif hingga sertifikat HAKI resmi diterbitkan oleh negara untuk diserahterimakan kepada Anda."
    }
  ]
};