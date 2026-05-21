import React from "react";
import Image from "next/image";
import { videoProductionContent } from "@/config/services/video-production";

export const metadata = {
  title: "Video Production - NORTHRE CREATIVE STUDIO",
  description: "Produksi video komersial berstandar sinematik untuk memikat audiens.",
};

// Objek pemetaan Ikon SVG khusus untuk mempercantik judul kustom tiap pilar layanan video
const pillarIcons: Record<string, React.ReactNode> = {
  "pillar-1": (
    <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  "pillar-2": (
    <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  "pillar-3": (
    <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
    </svg>
  ),
  "pillar-4": (
    <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>
  ),
};

// Judul pilar kustom komersial untuk memperkuat sektor produksi video sinematik
const attractivePillarTitles: Record<string, string> = {
  "pillar-1": "Commercial & Brand Ads",
  "pillar-2": "Short-Form Portrait Content",
  "pillar-3": "Cinematic Event Aftermovie",
  "pillar-4": "Motion Graphics & VFX Studio",
};

export default function VideoProductionPage() {
  const { hero, pillars, benefits, workflow, portfolio } = videoProductionContent;

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
          animation: marquee 40s linear infinite;
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
                alt="Northre Video Production Hero Placeholder Visual"
                fill
                priority
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover"
              />
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
              Video <br />
              <span className="text-neutral-500">Production</span>
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

        {/* PORTFOLIO SHOWCASE - AUTOPLAY LIVE PORTRAIT MP4 VIDEO MARQUEE */}
        <section className="space-y-12 overflow-hidden w-full relative">
          <div className="flex flex-col gap-2 border-b border-neutral-900/80 pb-6">
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Showcase</p>
            <h2 className="text-lg md:text-xl font-bold text-white tracking-wide uppercase">
              Galeri Karya / Portofolio
            </h2>
          </div>
          
          <div className="relative w-full overflow-hidden py-2">
            {/* Gradasi masking memudar kiri kanan */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-black via-black/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-black via-black/40 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee gap-5">
              
              {/* BARISAN ASLI VIDEO PORTRAIT (vd1.mp4 - vd4.mp4) */}
              <div className="flex gap-5 shrink-0">
                {portfolio.map((item) => (
                  <div 
                    key={`orig-${item.id}`} 
                    className="relative w-48 h-84 md:w-64 md:h-112 overflow-hidden rounded-2xl bg-brand-card border border-neutral-900/80 group cursor-pointer shadow-2xl transition-all duration-500 hover:border-neutral-700"
                  >
                    <video
                      src={item.videoPath}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700 ease-out"
                    />
                  </div>
                ))}
              </div>

              {/* BARISAN DUPLIKASI UNTUK ANIMASI INFINITE MARQUEE SEAMLESS */}
              <div className="flex gap-5 shrink-0" aria-hidden="true">
                {portfolio.map((item) => (
                  <div 
                    key={`dup-${item.id}`} 
                    className="relative w-48 h-84 md:w-64 md:h-112 overflow-hidden rounded-2xl bg-brand-card border border-neutral-900/80 group cursor-pointer shadow-2xl transition-all duration-500 hover:border-neutral-700"
                  >
                    <video
                      src={item.videoPath}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700 ease-out"
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