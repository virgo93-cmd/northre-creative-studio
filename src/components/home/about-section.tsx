"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    /* REVISI LATAR BELAKANG: Mengubah bg-black menjadi hitam kustom #1C1C1C dengan gradasi halus ke biru elektrik #0000FE */
    <section className="relative w-full py-20 md:py-24 overflow-hidden bg-gradient-to-b from-[#1C1C1C] via-[#1C1C1C] to-[#0000FE]/20">
      {/* LATAR BELAKANG GAMBAR */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/img/bg-kenapa-kami.png"
          alt="About Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        {/* REVISI: Mengubah bg-black/80 menjadi warna hitam kustom lo agar blending gradasinya bersih */}
        <div className="absolute inset-0 bg-[#1C1C1C]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* BENTO GRID RESPONSIF */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* KOLOM 1: VIDEO DENGAN BINGKAI ASIMETRIS */}
          <div className="relative w-full max-w-md lg:max-w-none mx-auto">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-white z-20" />
            {/* REVISI: Mengubah warna border aksen bawah dari cyan-400 ke warna biru elektrik kustom #0000FE */}
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#0000FE] z-20" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full aspect-9/16 lg:aspect-4/5 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl"
            >
              <video
                ref={videoRef}
                src="/assets/img/about.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* TOMBOL INTERAKTIF AUDIO */}
              <button
                type="button"
                onClick={toggleMute}
                /* REVISI: Mengubah efek hover button dari text-black ke warna biru elektrik kustom #0000FE */
                className="absolute bottom-4 right-4 z-30 p-3 rounded-full bg-black/60 backdrop-blur-md border border-neutral-800 text-white hover:bg-white hover:text-[#0000FE] hover:scale-105 transition-all duration-300 cursor-pointer"
                title={isMuted ? "Aktifkan Suara" : "Matikan Suara"}
              >
                {isMuted ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
            </motion.div>
          </div>

          {/* KOLOM 2: CONTENT BLOCK */}
          <div className="flex flex-col text-left">
            <div className="mb-6 lg:mb-8 space-y-2">
              {/* REVISI: Mengubah warna teks label kecil dari cyan-400 ke biru elektrik kustom #0000FE */}
              <span className="text-[#0000FE] font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs block">
                Kenapa Harus Northre Creative Studio?
              </span>
              {/* REVISI: Menggunakan kelas utilitas custom wrap-break-word pilihan lo */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase italic wrap-break-word">
                Kreativitas yang <br />
                <span className="text-neutral-600 relative inline-block mt-1">
                  Terukur
                  {/* REVISI: Mengubah dekorasi garis bawah teks dari cyan-400 ke warna biru elektrik kustom #0000FE */}
                  <div className="absolute -bottom-1 md:-bottom-2 left-0 w-2/3 h-1 bg-[#0000FE]" />
                </span>
              </h2>
            </div>

            <div className="relative mb-8 lg:mb-10">
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed italic border-l-2 border-neutral-800 pl-4 md:pl-6">
                "Kami believe bahwa visual yang kuat adalah kunci pertumbuhan brand di era digital. 
                Northre hadir bukan hanya sebagai vendor, tapi sebagai mitra strategis untuk 
                memastikan setiap konten yang diproduksi mampu mengonversi audiens menjadi pelanggan setia."
              </p>
            </div>

            <div className="mb-10 lg:mb-12">
              <Link 
                href="/tentang-kami" 
                /* REVISI: Mengubah warna tombol CTA utama pas di-hover agar memantulkan pendaran biru elektrik kustom #0000FE */
                className="inline-flex items-center gap-4 px-8 py-3.5 md:px-10 md:py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl hover:bg-[#0000FE] hover:text-white hover:scale-105 transition-all duration-300 text-xs md:text-sm"
              >
                Tentang Kami
              </Link>
            </div>

            {/* REVIEW CARD RESPONSIVE */}
            {/* REVISI: Menyelaraskan warna background card dari black/40 ke kontras hitam kustom #1C1C1C dengan border halus */}
            <div className="bg-[#1C1C1C]/60 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-neutral-800/80 flex items-center gap-5 md:gap-6 max-w-sm w-full">
              <div className="flex -space-x-3 shrink-0">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-[#1C1C1C] overflow-hidden bg-neutral-800">
                    <Image 
                      src={`/assets/img/profil/${i}.jpeg`} 
                      alt={`Reviewer ${i}`} 
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-base md:text-lg leading-none mb-1">4.9 Star</p>
                <p className="text-neutral-500 text-[9px] md:text-[10px] uppercase tracking-[0.2em] leading-none">Reviewers Community</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}