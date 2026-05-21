export interface PricingPackage {
  id: string;
  name: string;
  originalPrice: string;
  discountPrice: string;
  description: string;
  isPopular: boolean; // True jika dapet background biru menyala di gambar lo
  features: string[];
  whatsappMessage: string;
}

export interface PricingContentData {
  subtitle: string;
  title: string;
  description: string;
  footerNote: string;
  packages: PricingPackage[];
}

export const pricingContent: PricingContentData = {
  subtitle: "Pricing Plan",
  title: "Paket Fleksibel Sesuai Kebutuhan Anda",
  description: "Investasi strategis untuk mendongkrak performa digital brand Anda. Pilih paket yang paling sesuai dengan skala bisnis dan target pertumbuhan Anda saat ini.",
  footerNote: "*Setiap paket dilengkapi dengan garansi*",

  packages: [
    {
      id: "photo-catalog",
      name: "Paket Photo Catalog",
      originalPrice: "6.000.000",
      discountPrice: "3.000.000",
      description: "Solusi esensial untuk visual produk yang estetik, rapi, dan siap jualan.",
      isPopular: false,
      features: [
        "Retouching photo",
        "Softcopy photo",
        "1 Free video BTS (Behind the scene)",
        "Lebih dari 15 item, per item dikenakan 50rb"
      ],
      whatsappMessage: "Halo NORTHRE! Saya tertarik untuk konsultasi dan mengambil 'Paket Photo Catalog' (Rp 3.000.000). Mohon info langkah selanjutnya."
    },
    {
      id: "gold",
      name: "Paket Gold",
      originalPrice: "10.000.000",
      discountPrice: "5.000.000",
      description: "Paket kombinasi foto dan video untuk penetrasi konten media sosial yang dinamis.",
      isPopular: true,
    features: [
        "15 retouching photo",
        "15 video duration 15 - 60 detik",
        "Softcopy video + Photo",
        "1 Free video BTS (Behind the scene)",
        "Free file photo mentah"
      ],
      whatsappMessage: "Halo NORTHRE! Saya ingin memesan 'Paket Gold' (Rp 5.000.000) yang merupakan paket rekomendasi utama untuk bisnis saya."
    },
    {
      id: "platinum",
      name: "Paket Platinum",
      originalPrice: "12.000.000",
      discountPrice: "6.000.000",
      description: "Produksi konten skala masif dengan output visual premium dan file arsip lengkap.",
      isPopular: false,
      features: [
        "15 retouching photo",
        "25 video duration 15 - 60 detik",
        "Softcopy video + Photo",
        "1 Free video BTS (Behind the scene)",
        "Free file photo mentah"
      ],
      whatsappMessage: "Halo NORTHRE! Saya tertarik dengan volume konten besar di 'Paket Platinum' (Rp 6.000.000). Bagaimana teknis mulainya?"
    },
    {
      id: "perfect",
      name: "Paket Perfect",
      originalPrice: "20.000.000",
      discountPrice: "10.000.000",
      description: "Optimasi penuh manajemen dan planner Instagram & TikTok plus talent model profesional.",
      isPopular: false,
      features: [
        "Optimasi Post and Planner Content Instagram",
        "Optimasi Post and Planner Content Tiktok",
        "Upload video Content 30/bln di medsos",
        "Foto Max 30 Produk & Upload Photo 30/bln",
        "Design feed rapih",
        "Caption menarik",
        "Free diskusi meeting",
        "1 Talent Model dan Content"
      ],
      whatsappMessage: "Halo NORTHRE! Saya mau ambil 'Paket Perfect' (Rp 10.000.000) untuk optimasi penuh akun Instagram dan TikTok brand saya."
    },
    {
      id: "silver",
      name: "Paket Silver",
      originalPrice: "8.000.000",
      discountPrice: "4.000.000",
      description: "Pilihan ekonomis dan komplit untuk pondasi aset video and foto studio berkualitas.",
      isPopular: true,
      features: [
        "15 retouching photo",
        "15 video duration 15 - 60 detik",
        "Softcopy video + Photo",
        "1 Free video BTS (Behind the scene)",
        "Free file photo mentah"
      ],
      whatsappMessage: "Halo NORTHRE! Saya tertarik untuk mengamankan 'Paket Silver' (Rp 4.000.000) untuk aset konten bisnis saya."
    },
    {
      id: "all-in",
      name: "Paket ALL IN",
      originalPrice: "30.000.000",
      discountPrice: "15.000.000",
      description: "Dominasi pasar total. Manajemen harian, talent ganda, hingga strategi endorsement khusus.",
      isPopular: false,
      features: [
        "Optimasi Post & Planner Content Instagram",
        "Optimasi Post & Planner Content Tiktok",
        "Upload Content video 40/bln di Medsos",
        "Foto Max 40 Produk dan Upload Photo 45/bln di medsos",
        "Design feed rapih",
        "Caption menarik",
        "Upload tiap hari",
        "Free diskusi meeting",
        "Endorse 3 Content Creator Followers di atas 15rb",
        "2 Talent Model & Content"
      ],
      whatsappMessage: "Halo NORTHRE! Saya siap menaikkan level bisnis secara masif dengan 'Paket ALL IN' premium (Rp 15.000.000)."
    }
  ]
};