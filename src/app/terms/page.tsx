import React from "react";

export const metadata = {
  title: "Terms of Service - NORTHRE CREATIVE STUDIO",
  description: "Ketentuan dan syarat layanan kerja sama dengan NORTHRE CREATIVE STUDIO.",
};

export default function TermsPage() {
  return (
    /* REVISI WARNA: Mengubah bg-black menjadi warna hitam kustom lo #1C1C1C */
    <main className="w-full bg-[#1C1C1C] text-neutral-300 pt-32 pb-20 min-h-screen">
      <div className="max-w-240 mx-auto px-6 md:px-16 space-y-12">
        
        {/* HEADER HALAMAN */}
        {/* REVISI: Menyelaraskan border bawah header menggunakan warna netral border-neutral-800/60 agar menyatu */}
        <div className="space-y-4 border-b border-neutral-800/60 pb-8">
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
              Dengan mengakses website ini atau menggunakan layanan yang disediakan oleh NORTHRE CREATIVE STUDIO (selanjutnya disebut "NORTHRE"), Anda dianggap telah membaca, memahami, dan menyetujui untuk terikat oleh seluruh Ketentuan Layanan ini. Jika Anda tidak menyetujui sebagian atau seluruh ketentuan ini, Anda tidak diperkenankan untuk menggunakan layanan kami.
            </p>
          </section>

          {/* PASAL 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-wide">
              2. Ruang Lingkup Layanan & Hak Kekayaan Intelektual
            </h2>
            <p className="text-neutral-400">
              NORTHRE menyediakan layanan kreatif digital termasuk namun tidak terbatas pada pengelolaan media sosial, produksi video, fotografi produk, perencanaan konten, manajemen KOL, serta layanan desain grafis dan website. Seluruh hak cipta atas materi, konsep, dan produk final yang diserahkan kepada Klien akan menjadi hak milik Klien setelah pelunasan pembayaran dilakukan secara penuh, kecuali untuk elemen-elemen bawaan atau tools pihak ketiga yang hak ciptanya tetap melekat pada pemilik aslinya.
            </p>
          </section>

          {/* PASAL 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-wide">
              3. Hak Menggunakan Portofolio
            </h2>
            <p className="text-neutral-400">
              Klien memberikan hak non-eksklusif, bebas royalti, dan berlaku global kepada NORTHRE untuk menampilkan, mengunggah, atau mempublikasikan hasil karya yang telah diproduksi (baik berupa video, foto, desain, maupun studi kasus pengelolaan media sosial) ke dalam kanal promosi internal kami, termasuk namun tidak terbatas pada website resmi, akun instagram, dan dokumen portofolio perusahaan, sebagai bagian dari bentuk rekam jejak profesional kami.
            </p>
          </section>

          {/* PASAL 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-wide">
              4. Sistem Pembayaran & Pembatalan
            </h2>
            <p className="text-neutral-400">
              Kerja sama akan dianggap sah dan dimulai setelah adanya kesepakatan tertulis serta pembayaran uang muka (Down Payment / DP) sesuai dengan invoice yang diterbitkan. Seluruh pembayaran DP bersifat <span className="text-white">non-refundable</span> (tidak dapat dikembalikan) jika pembatalan sepihak dilakukan oleh Klien di tengah jalan. Penyerahan file master final hanya akan dilakukan setelah sisa pelunasan diselesaikan.
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