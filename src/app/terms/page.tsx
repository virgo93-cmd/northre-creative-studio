import React from "react";

export const metadata = {
  title: "Terms of Service - NORTHRE CREATIVE STUDIO",
  description: "Ketentuan dan syarat layanan kerja sama dengan NORTHRE CREATIVE STUDIO.",
};

export default function TermsPage() {
  return (
    <main className="w-full bg-black text-neutral-300 pt-32 pb-20 min-h-screen">
      <div className="max-w-240 mx-auto px-6 md:px-16 space-y-12">
        
        {/* HEADER HALAMAN */}
        <div className="space-y-4 border-b border-neutral-900 pb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-neutral-500 font-medium tracking-wider uppercase">
            Terakhir Diperbarui: Mei 2026
          </p>
        </div>

        {/* ISI KONTEN */}
        <div className="space-y-8 text-sm leading-relaxed font-medium">
          
          {/* PASAL 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-wide">
              1. Penerimaan Ketentuan
            </h2>
            <p className="text-neutral-400">
              Dengan mengakses website ini atau menggunakan layanan yang disediakan oleh <span className="text-white font-semibold">NORTHRE CREATIVE STUDIO</span>, Anda dinyatakan telah membaca, memahami, dan menyetujui untuk terikat dengan seluruh Ketentuan Layanan ini. Jika Anda tidak menyetujui salah satu poin di dalamnya, Anda disarankan untuk tidak melanjutkan penggunaan layanan kami.
            </p>
          </section>

          {/* PASAL 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-wide">
              2. Ruang Lingkup Layanan
            </h2>
            <p className="text-neutral-400">
              NORTHRE menyediakan solusi kreatif ujung-ke-ujung yang terbagi dalam dua kategori utama:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
              <li><strong className="text-neutral-300">Creative Marketing:</strong> Social Media Management, Product Photography, Video Production, Content Planner, dan KOL Management.</li>
              <li><strong className="text-neutral-300">Design & Development:</strong> Logo Design, Brand Identity, dan Web Desain (UI/UX).</li>
            </ul>
          </section>

          {/* PASAL 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-wide">
              3. Hak Kekayaan Intelektual (HAKI)
            </h2>
            <ul className="list-decimal pl-5 space-y-2 text-neutral-400">
              <li>
                <strong className="text-neutral-300">Kepemilikan Proses:</strong> Seluruh draf awal, konsep desain, sketsa, dan file kerja (*source files*) yang belum disetujui atau belum dilunasi merupakan hak milik mutlak NORTHRE.
              </li>
              <li>
                <strong className="text-neutral-300">Pengalihan Hak:</strong> Hak kepemilikan hasil akhir kreatif (*final deliverables*) baru akan dialihkan sepenuhnya kepada Klien setelah Klien melakukan pelunasan pembayaran sesuai kesepakatan kontrak.
              </li>
              <li>
                <strong className="text-neutral-300">Hak Portfolio:</strong> NORTHRE berhak untuk menampilkan karya atau hasil akhir proyek yang telah selesai di website ini, media sosial, atau proposal kami murni sebagai keperluan portofolio agensi, kecuali ada perjanjian kerahasiaan (*NDA*) tertulis sebelumnya.
              </li>
            </ul>
          </section>

          {/* PASAL 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-wide">
              4. Ketentuan Pembayaran
            </h2>
            <p className="text-neutral-400">
              Setiap pengerjaan proyek wajib diawali dengan pembayaran uang muka (*Down Payment / DP*) sebesar nilai yang disepakati di dalam invoice resmi. Pembayaran DP bersifat <span className="text-white">non-refundable</span> (tidak dapat dikembalikan) jika pembatalan sepihak dilakukan oleh Klien di tengah jalan. Penyerahan file master final hanya akan dilakukan setelah sisa pelunasan diselesaikan.
            </p>
          </section>

          {/* PASAL 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-wide">
              5. Batasan Tanggung Jawab
            </h2>
            <p className="text-neutral-400">
              NORTHRE selalu berkomitmen memberikan kualitas terbaik. Namun, kami tidak bertanggung jawab atas kerugian finansial, penurunan penjualan, atau klaim hukum pihak ketiga yang dialami oleh bisnis Klien akibat dari penggunaan hasil karya kami, fluktuasi algoritma media sosial, atau keterlambatan proyek yang disebabkan oleh lambatnya *feedback* atau penyerahan data dari pihak Klien.
            </p>
          </section>

          {/* PASAL 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-wide">
              6. Perubahan Ketentuan
            </h2>
            <p className="text-neutral-400">
              NORTHRE berhak memperbarui atau mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan tertulis sebelumnya. Perubahan akan langsung berlaku setelah diunggah di halaman website ini.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}