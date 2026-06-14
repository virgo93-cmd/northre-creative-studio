"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { aboutContent } from "@/config/about";

function getValueIcon(iconType: string) {
  switch (iconType) {
    case "bold":
      return (
        /* REVISI WARNA: Diselaraskan dari text-violet-400 ke warna biru elektrik kustom #0000FE */
        <svg className="w-5 h-5 text-[#0000FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "chart":
      return (
        /* REVISI WARNA: Diselaraskan dari text-cyan-400 ke warna biru elektrik kustom #0000FE */
        <svg className="w-5 h-5 text-[#0000FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case "execution":
      return (
        /* REVISI WARNA: Diselaraskan dari text-emerald-400 ke warna biru elektrik kustom #0000FE */
        <svg className="w-5 h-5 text-[#0000FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
  }
}

export default function TentangKamiPage() {
  return (
    /* REVISI WARNA: Mengubah bg-black menjadi warna hitam kustom lo #1C1C1C */
    <main className="w-full bg-[#1C1C1C] min-h-screen relative overflow-hidden pt-32 pb-20">
      
      {/* BACKGROUND DECORATIVE AURA - REVISI: Menggunakan pancaran lembut warna biru elektrik kustom #0000FE */}
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 rounded-full bg-linear-to-bl from-[#0000FE]/10 to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 rounded-full bg-linear-to-tr from-[#0000FE]/5 to-transparent blur-[130px] pointer-events-none z-0" />

      {/* REVISI UKURAN: Diubah dari max-w-360 menjadi max-w-7xl mx-auto agar responsif */}
      <ScrollReveal duration={1000} className="max-w-7xl w-full mx-auto px-6 md:px-16 relative z-10 space-y-20 lg:space-y-24">
        
        {/* ================= SECTION 1: HERO HEADER INTRO ================= */}
        <div className="max-w-4xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-900 bg-neutral-950/60 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none">
              {aboutContent.subtitle}
            </p>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight uppercase">
            {aboutContent.title}
          </h1>
          <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-medium pt-2 max-w-3xl">
            {aboutContent.description}
          </p>
        </div>

        {/* ================= SECTION 2: MANIFESTO & WIDE BANNER MEDIA (TATA LETAK HORIZONTAL PREMIUM) ================= */}
        <div className="w-full space-y-12">
          
          {/* Teks Uraian Manifesto - Full Width Mewah */}
          <div className="max-w-5xl space-y-6 text-left border-t border-neutral-900 pt-10">
            <h2 className="text-xl md:text-2xl font-extrabold text-white uppercase tracking-tight">
              {aboutContent.manifesto.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 text-sm md:text-base text-neutral-400 leading-relaxed font-medium">
              <p>{aboutContent.manifesto.text1}</p>
              <p>{aboutContent.manifesto.text2}</p>
            </div>
          </div>

          {/* Asset Gambar Horizontal Panjang (Gaya Sampul FB / Banner 21:9) Tanpa Box Kaku */}
          <div className="w-full relative select-none group">
            <div className="w-full relative rounded-2xl overflow-hidden aspect-21/9 shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
              <Image
                src="/assets/img/about.png"
                alt="NORTHRE Creative Studio Team Banner"
                fill
                priority
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-102"
              />
              
              {/* VIGNETTE GRADIENT SINTAKS TAILWIND V4 - REVISI: Menyelaraskan warna blending dengan hitam kustom lo #1C1C1C */}
              <div className="absolute inset-0 bg-linear-to-b from-[#1C1C1C]/30 via-transparent to-[#1C1C1C]/75 pointer-events-none" />
              <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-[#1C1C1C] via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-[#1C1C1C] via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(28,28,28,0.8)] pointer-events-none" />
            </div>
          </div>

        </div>

        {/* ================= SECTION 3: CORE VALUES GRID ================= */}
        <div className="space-y-12 pt-4">
          <div className="h-px bg-neutral-900 w-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full">
            {aboutContent.coreValues.map((value) => (
              <div key={value.id} className="space-y-4 text-left group">
                {/* REVISI HOVER: Mengubah efek background hover seksi dari putih murni ke warna biru elektrik kustom lo #0000FE */}
                <div className="inline-flex p-3 rounded-xl bg-neutral-950 border border-neutral-900 transition-colors group-hover:bg-[#0000FE] group-hover:text-white">
                  {getValueIcon(value.iconType)}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight transition-colors group-hover:text-neutral-300">
                  {value.title}
                </h3>
                <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </ScrollReveal>
    </main>
  );
}