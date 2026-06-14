"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { homeHeroContent } from "@/config/home/hero-section";
import { siteConfig } from "@/config/site";

export default function HomeHero() {
  const { typewriterItems } = homeHeroContent;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % typewriterItems.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [typewriterItems.length]);

  // Trik duplikasi data yang aman untuk kalkulasi pergeseran Framer Motion -33.33%
  const marqueeItems = [...[1, 2, 3, 4], ...[1, 2, 3, 4], ...[1, 2, 3, 4]];

  // Mengolah nomor WhatsApp dari siteConfig agar bersih dari karakter non-angka untuk direct link
  const whatsappTarget = siteConfig.contact.whatsapp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappTarget}?text=Halo%20NORTHRE%20Creative%20Studio,%20saya%20ingin%20mulai%20berkolaborasi!`;

  return (
    /* REVISI: Mengubah bg-black menjadi warna hitam kustom #1C1C1C */
    <section className="relative w-full bg-[#1C1C1C] pt-32 pb-10 overflow-hidden">
      {/* BACKGROUND DECORATIVE AURA - REVISI: Diarahkan menggunakan warna biru elektrik kustom #0000FE */}
      <div className="absolute top-[-10%] right-[-5%] w-100 h-100 rounded-full bg-linear-to-tr from-[#0000FE]/10 to-[#0000FE]/5 blur-[100px] pointer-events-none z-0" />

      {/* REVISI 1: Mengunci batas maksimal ke max-w-7xl agar sinkron dengan halaman lainnya */}
      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col items-center text-center relative z-10 gap-16">
        
        {/* JUDUL CENTERED DENGAN LABEL */}
        <div className="w-full space-y-4 flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">Northre Creative Studio</span>
          
          {/* REVISI 2: Responsif Font Size (text-2xl di HP, text-3xl di tablet, text-5xl di PC/Laptop) */}
          <div className="h-24 md:h-20 flex items-center justify-center max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.h1
                key={typewriterItems[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight"
              >
                {/* REVISI STYLE: Mengubah gradasi warna teks ketik menjadi putih ke biru elektrik kustom */}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-[#0000FE]">
                  {typewriterItems[index]}
                </span>
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="text-white ml-2">|</motion.span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* REVISI REKAYASA TOMBOL TUNGGAL MINIMALIS:
              - Menghapus .map bawaan array ctaButtons total agar tombol portofolio lenyap
              - Tombol Mulai Kolaborasi murni dirubah href-nya langsung nembak aman ke direct link WhatsApp
              - Mempertahankan ukuran px-6 py-3 text-[10px] dan warna latar biru elektrik kebanggaan lo #0000FE
          */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 bg-[#0000FE] text-white hover:bg-[#0000FE]/90 shadow-2xl cursor-pointer"
            >
              Mulai Kolaborasi
            </a>
          </div>
        </div>

        {/* MARQUEE SMOOTH (INFINITE) */}
        {/* REVISI 3: Menggunakan mask-linear-gradient shorthand agar fade-out di HP tidak terlalu memakan tempat */}
        <div className="w-full overflow-hidden py-4 relative mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex w-max">
            <motion.div 
              className="flex gap-5 pr-5"
              animate={{ x: "-33.33%" }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {marqueeItems.map((i, idx) => (
                // REVISI 4: Ukuran video responsif (w-36 h-64 di HP, membesar ke w-48 md:w-64 di Laptop/PC)
                <div key={idx} className="w-36 h-64 sm:w-48 sm:h-84 md:w-64 md:h-112 shrink-0 overflow-hidden rounded-2xl border border-neutral-900 shadow-2xl">
                  <video
                    src={`/assets/img/hero/vd${i}.mp4`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-85"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}