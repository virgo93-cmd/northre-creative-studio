"use client";

import React from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { pricingContent } from "@/config/pricing";
import { siteConfig } from "@/config/site";

export default function PaketPricingPage() {
  let baseWhatsappNumber = siteConfig?.contact?.whatsapp?.replace(/[^0-9]/g, "") || "628123456789";
  if (baseWhatsappNumber.startsWith("0")) baseWhatsappNumber = "62" + baseWhatsappNumber.slice(1);

  return (
    <main className="w-full bg-black min-h-screen relative overflow-hidden pt-32 pb-20">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      
      {/* Mengurangi max-w agar grid kartu lebih ramping di tengah */}
      <ScrollReveal duration={1000} className="max-w-6xl w-full mx-auto px-6 relative z-10 space-y-16">
        
        {/* JUDUL TETAP MINIMALIS */}
        <div className="text-left space-y-2 max-w-2xl">
          <h2 className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em]">
            {pricingContent.subtitle}
          </h2>
          <h1 className="text-2xl md:text-3xl font-light text-white tracking-tight">
            Pilih <span className="font-semibold text-neutral-300">investasi visual</span> yang tepat untuk akselerasi brand Anda.
          </h1>
        </div>

        {/* Grid lebih ramping dengan gap yang lebih rapat */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {pricingContent.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative group rounded-3xl p-0.5 transition-all duration-500 ${
                pkg.isPopular ? "bg-linear-to-b from-violet-500 via-cyan-500 to-transparent" : "bg-neutral-800"
              }`}
            >
              <div className="bg-black rounded-[22px] p-6 h-full flex flex-col relative overflow-hidden">
                {/* Neon Glow Effect */}
                {pkg.isPopular && <div className="absolute -top-24 -right-24 w-40 h-40 bg-violet-600/20 blur-[60px]" />}
                
                <div className="space-y-5 relative z-10">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">{pkg.name}</h3>
                    {pkg.isPopular && <span className="text-[9px] font-black uppercase tracking-widest text-violet-400 bg-violet-400/10 px-2 py-0.5 rounded-md">Pilihan Utama</span>}
                  </div>

                  <div>
                    <span className="text-neutral-600 line-through text-[10px] font-medium">IDR {pkg.originalPrice}</span>
                    <div className="text-xl font-bold text-white mt-0.5">IDR {pkg.discountPrice}</div>
                    <p className="text-[9px] text-neutral-500 mt-2 leading-relaxed">{pkg.description}</p>
                  </div>

                  <ul className="space-y-2.5">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-[10px] text-neutral-400">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.4)]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/${baseWhatsappNumber}?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                    className={`block w-full py-2.5 rounded-xl text-center font-bold text-[9px] uppercase tracking-widest transition-all ${
                      pkg.isPopular ? "bg-white text-black hover:bg-neutral-200" : "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-800"
                    }`}
                  >
                    Pilih Paket Ini
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </main>
  );
}