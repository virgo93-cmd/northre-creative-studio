import React from "react";
import Image from "next/image";
import { productPhotographyContent } from "@/config/services/product-photography";

export const metadata = {
  title: "Product Photography - NORTHRE CREATIVE STUDIO",
  description: "Transformasi produk fisik menjadi aset visual komersial tingkat tinggi.",
};

// Objek pemetaan Ikon SVG khusus untuk mempercantik judul kustom tiap pilar layanan foto
const pillarIcons: Record<string, React.ReactNode> = {
  "pillar-1": (
    <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  "pillar-2": (
    <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v4a1 1 0 001 1h4M7 10h4M7 14h8" />
    </svg>
  ),
  "pillar-3": (
    <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  "pillar-4": (
    <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
    </svg>
  ),
};

// Judul pilar kustom komersial untuk memperkuat sektor fotografi produk
const attractivePillarTitles: Record<string, string> = {
  "pillar-1": "Pure Studio Clean-Shot",
  "pillar-2": "Stylized & Thematic Crafting",
  "pillar-3": "Lifestyle & Model Session",
  "pillar-4": "Macro Texturing & Detail Modeling",
};

export default function ProductPhotographyPage() {
  const { hero, pillars, benefits, workflow, portfolio } = productPhotographyContent;

  return (
    <main className="w-full bg-black text-neutral-300 pt-40 pb-32 min-h-screen relative overflow-x-hidden">
      
      {/* BACKGROUND AURA GLOW DI LUAR HERO */}
      <div className="absolute top-1/3 right-1/4 w-125 h-125 rounded-full bg-neutral-900/5 blur-[150px] pointer-events-none z-0" />

      {/* Kode Keyframes Marquee Murni CSS */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-360 mx-auto px-6 md:px-16 space-y-32 relative z-10">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-120 flex items-center rounded-3xl overflow-hidden border border-neutral-900/40 bg-black shadow-2xl p-8 md:p-16 group">
          
          {/* CONTAINER GAMBAR KANAN + EFFECT VIGNETTE */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 h-full z-0 pointer-events-none overflow-hidden">
            <div className="relative w-full h-full opacity-40 group-hover:opacity-50 transition-opacity duration-700">
              <Image
                src={hero.imagePath}
                alt="Northre Product Photography Hero Placeholder Visual"
                fill
                priority
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Vignette Radial Ganda: Menutup tepi gambar murni menyatu dengan hitam pekat */}
              <div className="absolute inset-0 bg-radial from-transparent via-black/50 to-black" />
            </div>
          </div>
          
          {/* Masking tambahan linier dari kiri ke tengah */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-linear-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />

          {/* KONTEN TEKS HERO */}
          <div className="max-w-180 space-y-5 relative z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-black/60 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none">
                {hero.subtitle}
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none uppercase pt-2">
              Product <br />
              <span className="text-neutral-500">Photography</span>
            </h1>
            <p className="text-sm text-neutral-400 leading-relaxed pt-2 font-medium">
              {hero.description}
            </p>
          </div>

        </section>

        {/* PILARS SECTION */}
        <section className="space-y-12">
          <div className="flex flex-col gap-2 border-b border-neutral-900/80 pb-6">
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Kategori Solusi</p>
            <h2 className="text-lg md:text-xl font-bold text-white tracking-wide uppercase">
              Cakupan Layanan Kami
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <div 
                key={pillar.id} 
                className="p-8 rounded-2xl bg-brand-card border border-neutral-900/60 space-y-4 hover:border-neutral-800 transition-all duration-500 group relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-neutral-950 border border-neutral-900 group-hover:border-neutral-800 transition-all duration-500">
                    {pillarIcons[pillar.id] || null}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-white tracking-wide group-hover:text-neutral-300 transition-colors">
                    {attractivePillarTitles[pillar.id] || pillar.title}
                  </h3>
                </div>
                
                <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-medium pt-1">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO SHOWCASE */}
        <section className="space-y-12 overflow-hidden w-full relative">
          <div className="flex flex-col gap-2 border-b border-neutral-900/80 pb-6">
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Showcase</p>
            <h2 className="text-lg md:text-xl font-bold text-white tracking-wide uppercase">
              Galeri Karya / Portofolio
            </h2>
          </div>
          
          <div className="relative w-full overflow-hidden py-2">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-black via-black/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-black via-black/40 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee gap-5">
              {/* BARISAN ASLI (1.png - 8.png) */}
              <div className="flex gap-5 shrink-0">
                {portfolio.map((item, index) => (
                  <div 
                    key={`orig-${item.id}`} 
                    className="relative w-56 h-56 md:w-72 md:h-72 overflow-hidden rounded-2xl bg-brand-card border border-neutral-900/80 group cursor-pointer shadow-2xl transition-all duration-500 hover:border-neutral-700"
                  >
                    <Image
                      src={item.imagePath}
                      alt={item.alt}
                      fill
                      sizes="(max-w-768px) 224px, 288px"
                      className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                      priority={index < 2}
                    />
                  </div>
                ))}
              </div>

              {/* BARISAN DUPLIKASI UNTUK MARQUEE SEAMLESS */}
              <div className="flex gap-5 shrink-0" aria-hidden="true">
                {portfolio.map((item) => (
                  <div 
                    key={`dup-${item.id}`} 
                    className="relative w-56 h-56 md:w-72 md:h-72 overflow-hidden rounded-2xl bg-brand-card border border-neutral-900/80 group cursor-pointer shadow-2xl transition-all duration-500 hover:border-neutral-700"
                  >
                    <Image
                      src={item.imagePath}
                      alt={item.alt}
                      fill
                      sizes="(max-w-768px) 224px, 288px"
                      className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW SECTION */}
        <section className="space-y-12">
          <div className="flex flex-col gap-2 border-b border-neutral-900/80 pb-6">
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Sistem Kerja</p>
            <h2 className="text-lg md:text-xl font-bold text-white tracking-wide uppercase">
              Alur Kerja Kolaborasi
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {workflow.map((item) => (
              <div key={item.step} className="space-y-4 relative group">
                <div className="w-full h-px bg-neutral-950 border-t border-neutral-900 group-hover:border-neutral-800 transition-colors duration-500" />
                
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
        <section className="p-8 md:p-14 rounded-3xl bg-brand-card border border-neutral-900/60 grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-14 shadow-2xl relative overflow-hidden">
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