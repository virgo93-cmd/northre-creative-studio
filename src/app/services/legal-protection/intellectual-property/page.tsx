"use client";

import React from "react";
import Image from "next/image";
import { intellectualPropertyContent } from "@/config/services/intellectual-property";

// Objek pemetaan Ikon SVG khusus untuk pilar layanan Intellectual Property
const pillarIcons: Record<string, React.ReactNode> = {
  "pillar-1": (
    <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  "pillar-2": (
    <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11h2m0 0h2m-2 0v2m-1.35-7.5h.01m2.99 0h.01m-4.5 1.5h.01m6.49 0h.01m-7.49 1.5h.01m8.49 0h.01M4 11V9a4 4 0 014-4h8a4 4 0 014 4v2a4 4 0 01-4 4H8a4 4 0 01-4-4z" />
    </svg>
  ),
  "pillar-3": (
    <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 12a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm0-6a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z" />
    </svg>
  ),
};

export default function IntellectualPropertyPage() {
  const { hero, pillars, benefits, workflow } = intellectualPropertyContent;

  return (
    /* REVISI WARNA: Mengubah bg-black menjadi warna hitam kustom lo #1C1C1C */
    <main className="w-full bg-[#1C1C1C] text-neutral-300 pt-40 pb-32 min-h-screen relative overflow-x-hidden">
      
      {/* BACKGROUND AURA GLOW DI LUAR HERO - REVISI: Mengubah pancaran menjadi warna biru elektrik kustom lo #0000FE */}
      <div className="absolute top-1/3 right-1/4 w-125 h-125 rounded-full bg-[#0000FE]/10 blur-[150px] pointer-events-none z-0" />

      {/* REVISI UKURAN: Mengubah max-w-360 ke max-w-7xl agar responsif konsisten dengan layout lainnya */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-32 relative z-10">
        
        {/* HERO SECTION */}
        {/* REVISI WARNA: Mengubah bg-black ke warna hitam kustom lo #1C1C1C dengan border selaras */}
        <section className="relative w-full min-h-120 flex items-center rounded-3xl overflow-hidden border border-neutral-800/40 bg-[#1C1C1C] shadow-2xl p-8 md:p-16 group">
          
          {/* BACKGROUND IMAGE FILL */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src={hero.imagePath}
              alt="Northre Intellectual Property Hero Background Visual"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-700 object-center"
            />
            {/* Lapisan shading gelap melingkar & linear mendalam - REVISI: Menyelaraskan masking gradasi dengan hitam kustom #1C1C1C */}
            <div className="absolute inset-0 bg-radial from-transparent via-[#1C1C1C]/40 to-[#1C1C1C]/90" />
            <div className="absolute inset-0 bg-linear-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-transparent" />
          </div>

          {/* KONTEN TEKS HERO DI ATAS BACKGROUND LAYER */}
          <div className="max-w-2xl space-y-5 relative z-10 text-left">
            {/* REVISI WARNA BADGE: Menyelaraskan background badge dengan warna hitam kustom */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none">
                {hero.subtitle}
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none uppercase pt-2">
              Intellectual <br />
              <span className="text-neutral-500">Property</span>
            </h1>
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed pt-2 font-medium">
              {hero.description}
            </p>
          </div>

        </section>

        {/* PILARS SECTION */}
        <section className="space-y-12">
          <div className="flex flex-col gap-2 border-b border-neutral-800/80 pb-6">
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Proteksi Hukum</p>
            <h2 className="text-lg md:text-xl font-bold text-white tracking-wide uppercase">
              Layanan Perlindungan HAKI
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div 
                key={pillar.id} 
                /* REVISI STYLE & WARNA:
                   - Mengubah bg-neutral-950/40 menjadi warna hitam kustom #1C1C1C
                   - Mengubah hover border agar menyala warna biru elektrik kustom lo #0000FE
                */
                className="p-8 rounded-2xl bg-[#1C1C1C] border border-neutral-800/60 space-y-4 hover:border-[#0000FE]/50 transition-all duration-500 group relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-neutral-950 border border-neutral-800 group-hover:border-neutral-800 transition-all duration-500">
                    {pillarIcons[pillar.id] || null}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-white tracking-wide group-hover:text-neutral-300 transition-colors">
                    {pillar.title}
                  </h3>
                </div>
                
                <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-medium pt-1">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WORKFLOW SECTION */}
        <section className="space-y-12">
          <div className="flex flex-col gap-2 border-b border-neutral-800/80 pb-6">
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Sistem Kerja</p>
            <h2 className="text-lg md:text-xl font-bold text-white tracking-wide uppercase">
              Alur Proses Pendaftaran
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {workflow.map((item) => (
              <div key={item.step} className="space-y-4 relative group">
                <div className="w-full h-px bg-neutral-950 border-t border-neutral-800 group-hover:border-neutral-700 transition-colors duration-500" />
                
                <div className="text-2xl font-mono font-bold text-neutral-800 tracking-tight transition-colors duration-500 group-hover:text-neutral-600">
                  {String(item.step).padStart(2, '0')}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xs font-bold text-white tracking-wider uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS SECTION */}
        {/* REVISI WARNA: Mengubah bg-neutral-950/40 ke warna hitam kustom lo #1C1C1C dengan border selaras */}
        <section className="p-8 md:p-14 rounded-3xl bg-[#1C1C1C] border border-neutral-800/60 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-14 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-neutral-900/20 blur-3xl pointer-events-none" />
          {benefits.map((benefit) => (
            <div key={benefit.id} className="space-y-3 relative z-10">
              <div className="w-6 h-px bg-neutral-700" />
              <h3 className="text-xs font-bold text-white uppercase tracking-wider pt-1">
                {benefit.title}
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </section>

      </div>
    </main>
  );
}