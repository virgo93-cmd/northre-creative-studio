"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { careerContent, activeJobs, JobItem } from "@/config/career";
import { siteConfig } from "@/config/site";

function getJobIcon(iconType: string) {
  switch (iconType) {
    case "social":
      return (
        <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      );
    case "media":
      return (
        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    case "kol":
      return (
        <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case "design":
      return (
        <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "web":
      return (
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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
    <main className="w-full bg-black min-h-screen relative overflow-hidden pt-32 pb-20">
      
      {/* BACKGROUND DECORATIVE AURA - MENGGUNAKAN KELAS KANONIKAL TAILWIND V4 */}
      <div className="absolute top-[-10%] right-[-10%] w-125 h-125 rounded-full bg-linear-to-bl from-violet-600/10 to-cyan-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 rounded-full bg-linear-to-tr from-cyan-600/10 to-violet-500/5 blur-[130px] pointer-events-none z-0" />

      <ScrollReveal duration={1000} className="max-w-360 w-full mx-auto px-6 md:px-16 relative z-10">
        
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
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-black text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-xl border border-white cursor-pointer"
                >
                  {careerContent.emptyState.buttonText}
                </a>
              </div>
            </div>

            {/* SISI KANAN: GAMBAR PORTRAIT EKSTRIM TIKTOK 100% SESUAI REKOMENDASI LINTER LOKAL LO */}
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

                {/* SINTAKS GRADIENT DAN VIGNETTE YANG SUDAH DIREVISI MENJADI SINTAKS LINEAR TAILWIND V4 */}
                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />
                <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-black via-black/40 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-black via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.85)] pointer-events-none" />
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
                  className="group rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md p-6 flex flex-col justify-between transition-all duration-300 hover:border-neutral-800 shadow-xl relative overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800/60 transition-colors group-hover:bg-white group-hover:text-black">
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

                  <div className="pt-6 border-t border-neutral-900/60 mt-6 flex justify-end">
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Halo%20NORTHRE,%20saya%20ingin%20melamar%20posisi%20${encodeURIComponent(job.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wider text-white hover:text-neutral-400 transition-colors inline-flex items-center gap-1 cursor-pointer"
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