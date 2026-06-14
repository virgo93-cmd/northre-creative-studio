"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { careerContent, activeJobs, JobItem } from "@/config/career";
import { siteConfig } from "@/config/site";

function getJobIcon(iconType: string) {
  switch (iconType) {
    case "social":
    case "media":
    case "kol":
    case "design":
    case "web":
      return (
        /* REVISI WARNA IKON: Diselaraskan total menggunakan warna biru elektrik kustom #0000FE */
        <svg className="w-5 h-5 text-[#0000FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
  }
}

export default function KarirPage() {
  let whatsappUrl = "#";
  if (siteConfig?.contact?.whatsapp) {
    let cleanNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, "");
    if (cleanNumber.startsWith("0")) {
      cleanNumber = "62" + cleanNumber.slice(1);
    }
    const encodedText = encodeURIComponent(careerContent.emptyState.whatsappMessage);
    whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedText}`;
  }

  return (
    /* REVISI WARNA: Mengubah bg-black menjadi warna hitam kustom lo #1C1C1C */
    <main className="w-full bg-[#1C1C1C] min-h-screen relative overflow-hidden pt-32 pb-20">
      
      {/* BACKGROUND DECORATIVE AURA - REVISI: Menggunakan pancaran lembut warna biru elektrik kustom #0000FE */}
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 rounded-full bg-linear-to-bl from-[#0000FE]/10 to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 rounded-full bg-linear-to-tr from-[#0000FE]/5 to-transparent blur-[130px] pointer-events-none z-0" />

      {/* REVISI UKURAN: Diubah dari max-w-360 menjadi max-w-7xl mx-auto agar responsif & konsisten di resolusi desktop */}
      <ScrollReveal duration={1000} className="max-w-7xl w-full mx-auto px-6 md:px-16 relative z-10">
        
        {activeJobs.length === 0 ? (
          
          /* ================= INTERFACE PREMIUM: MAKRO 2 KOLOM SINTAKS TAILWIND V4 ================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
            
            {/* SISI KIRI: DATA TEKS UTAMA */}
            <div className="lg:col-span-7 space-y-12 text-left pt-2">
              
              {/* Heading Section */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-900 bg-neutral-950/60 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none">
                    {careerContent.subtitle}
                  </p>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight uppercase">
                  {careerContent.title}
                </h1>
                <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-medium pt-2">
                  {careerContent.description}
                </p>
              </div>

              {/* Status Recruitment Empty State */}
              <div className="border-t border-neutral-900 pt-8 space-y-4">
                <div className="flex items-center gap-2 text-neutral-400">
                  <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider text-neutral-300">
                    {careerContent.emptyState.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-medium max-w-xl">
                  {careerContent.emptyState.message}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                {/* REVISI CTA BUTTON: Mengubah efek hover agar mantul tebal warna biru elektrik kustom lo #0000FE */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-black text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-xl hover:bg-[#0000FE] hover:text-white hover:border-[#0000FE] transition-all duration-300 shadow-xl border border-white cursor-pointer"
                >
                  {careerContent.emptyState.buttonText}
                </a>
              </div>
            </div>

            {/* SISI KANAN: GAMBAR PORTRAIT EKSTRIM TIKTOK */}
            <div className="lg:col-span-5 w-full relative select-none pt-4 lg:pt-0 group">
              <div className="w-full relative rounded-2xl overflow-hidden aspect-9/16 shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
                
                <Image
                  src="/assets/img/karir.jpeg"
                  alt="Join NORTHRE Creative Studio Team"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                />

                {/* SINTAKS GRADIENT DAN VIGNETTE - REVISI: Menyelaraskan warna overlay dengan dasar hitam kustom lo #1C1C1C */}
                <div className="absolute inset-0 bg-linear-to-b from-[#1C1C1C]/40 via-transparent to-[#1C1C1C]/80 pointer-events-none" />
                <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#1C1C1C] via-[#1C1C1C]/40 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-[#1C1C1C] via-[#1C1C1C]/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(28,28,28,0.85)] pointer-events-none" />
              </div>
            </div>

          </div>
        ) : (
          
          /* ================= TAMPILAN LIST LOWONGAN (JIKA AKTIF DI MASA DEPAN) ================= */
          <div className="w-full space-y-12">
            <div className="max-w-3xl text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-900 bg-neutral-950/60 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none">
                  {careerContent.subtitle}
                </p>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight uppercase">
                {careerContent.title}
              </h1>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-medium pt-2">
                {careerContent.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {activeJobs.map((job: JobItem) => (
                <div 
                  key={job.id}
                  /* REVISI CARD STYLE: Mengubah border hover seksi agar menyala warna biru elektrik kustom lo #0000FE */
                  className="group rounded-2xl border border-neutral-800/60 bg-neutral-950/40 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#0000FE]/60 shadow-xl relative overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {/* REVISI HOVER BG: Mengubah efek background icon saat di-hover ke warna biru elektrik kustom lo */}
                        <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800/60 transition-colors group-hover:bg-[#0000FE] group-hover:text-white">
                          {getJobIcon(job.iconType)}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white transition-colors group-hover:text-neutral-300">
                            {job.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">{job.type}</span>
                            <span className="text-neutral-700 text-xs">•</span>
                            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">{job.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-medium">
                      {job.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-neutral-800/60 mt-6 flex justify-end">
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Halo%20NORTHRE,%20saya%20ingin%20melamar%20posisi%20${encodeURIComponent(job.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      /* REVISI TEXT HOVER: Diubah ke arah warna biru elektrik kustom lo agar tegas melirik interaksinya */
                      className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#0000FE] transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      Lamar Sekarang 
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </ScrollReveal>
    </main>
  );
}