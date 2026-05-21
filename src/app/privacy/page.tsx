import React from "react";

export const metadata = {
  title: "Privacy Policy - NORTHRE CREATIVE STUDIO",
  description: "Kebijakan privasi mengenai pengelolaan data pribadi klien di NORTHRE CREATIVE STUDIO.",
};

export default function PrivacyPage() {
  return (
    <main className="w-full bg-black text-neutral-300 pt-32 pb-20 min-h-screen">
      <div className="max-w-240 mx-auto px-6 md:px-16 space-y-12">
        
        {/* HEADER HALAMAN */}
        <div className="space-y-4 border-b border-neutral-900 pb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-neutral-500 font-medium tracking-wider uppercase">
            Terakhir Diperbarui: Mei 2026
          </p>
        </div>

        {/* ISI KONTEN */}
        <div className="space-y-8 text-sm leading-relaxed font-medium">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-wide">
              1. Pendahuluan
            </h2>
            <p className="text-neutral-400">
              Di <span className="text-white font-semibold">NORTHRE CREATIVE STUDIO</span>, privasi Anda adalah prioritas kami. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat berinteraksi dengan layanan kami.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-wide">
              2. Data yang Kami Kumpulkan
            </h2>
            <p className="text-neutral-400">
              Kami mengumpulkan informasi yang Anda berikan secara sukarela, seperti:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
              <li>Identitas diri: Nama dan nama bisnis.</li>
              <li>Detail kontak: Alamat email dan nomor WhatsApp.</li>
              <li>Detail proyek: Brief, preferensi desain, dan informasi pendukung lainnya.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-wide">
              3. Penggunaan Informasi
            </h2>
            <p className="text-neutral-400">
              Informasi yang Anda berikan hanya digunakan untuk:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
              <li>Menghubungi Anda terkait konsultasi atau pengerjaan proyek.</li>
              <li>Mengirimkan penawaran harga (proposal) dan invoice.</li>
              <li>Memberikan update atau hasil progres pengerjaan kreatif.</li>
              <li>Kepentingan administrasi internal agensi.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-wide">
              4. Keamanan Data
            </h2>
            <p className="text-neutral-400">
              Kami berkomitmen penuh untuk menjaga keamanan data Anda. Kami tidak akan pernah menjual, menyewakan, atau memberikan data pribadi Anda kepada pihak ketiga mana pun tanpa izin tertulis dari Anda, kecuali diwajibkan oleh hukum yang berlaku di Indonesia.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-wide">
              5. Hak Klien
            </h2>
            <p className="text-neutral-400">
              Anda memiliki hak penuh untuk meminta kami melakukan perubahan, pembaruan, atau penghapusan total atas data pribadi Anda yang tersimpan di dalam database kami dengan cara menghubungi kami melalui email atau nomor WhatsApp resmi yang tertera di footer website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white tracking-wide">
              6. Cookies & Analitik
            </h2>
            <p className="text-neutral-400">
              Website ini mungkin menggunakan *cookies* standar untuk meningkatkan pengalaman browsing Anda dan menganalisis trafik kunjungan secara anonim agar kami bisa terus mengoptimalkan layanan kami.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}