import React from "react";
import Image from "next/image";
import { kolManagementContent } from "@/config/services/kol-management";

export const metadata = {
  title: "KOL Management - NORTHRE CREATIVE STUDIO",
  description: "Menghubungkan brand Anda dengan Key Opinion Leader dan influencer loyal berbasis data.",
};

// Objek pemetaan Ikon SVG khusus untuk mempercantik judul kustom tiap pilar layanan KOL
const pillarIcons: Record<string, React.ReactNode> = {
  "pillar-1": (
    <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
    </svg>
  ),
  "pillar-2": (
    <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  "pillar-3": (
    <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  "pillar-4": (
    <svg className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
};

// Judul pilar kustom komersial untuk memperkuat sektor KOL Management
const attractivePillarTitles: Record<string, string> = {
  "pillar-1": "Data-Driven KOL Scouting",
  "pillar-2": "Endorsement Strategy Blueprint",
  "pillar-3": "Contract Negotiation & Liaison",
  "pillar-4": "Campaign Tracking & ROI Reporting",
};

export default function KolManagementPage() {
  const { hero, pillars, benefits, workflow, portfolio } = kolManagementContent;

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
                alt="Northre KOL Management Hero Placeholder Visual"
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
              KOL <br />
              <span className="text-neutral-500">Management</span>
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

        {/* PORTFOLIO SHOWCASE - AUTOPLAY LIVE PORTRAIT MP4 VIDEO MARQUEE WITH CUSTOM SHUFFLE */}
        <section className="space-y-12 overflow-hidden w-full relative">
          <div className="flex flex-col gap-2 border-b border-neutral-900/80 pb-6">
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Showcase</p>
            <h2 className="text-lg md:text-xl font-bold text-white tracking-wide uppercase">
              Roster Kreator / Portofolio
            </h2>
          </div>
          
          <div className="relative w-full overflow-hidden py-2">
            {/* Gradasi masking memudar kiri kanan */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-black via-black/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-black via-black/40 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee gap-5">
              
              {/* BARISAN ASLI VIDEO PORTRAIT DENGAN URUTAN SHUFFLE (1, 5, 2, 6, 3, 7, 4, 8) */}
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