"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/config/home/faq-data";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* BACKGROUND IMAGE - INTENSITAS DITAMBAH */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/img/faq.png" 
          alt="FAQ Background" 
          className="w-full h-full object-cover opacity-20" 
        />
        {/* REVISI OVERLAY: Mengubah bg-black/70 menjadi warna hitam kustom lo agar blending gradasinya bersih */}
        <div className="absolute inset-0 bg-[#1C1C1C]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-12 text-center">
          {/* REVISI: Mengubah warna teks aksen label dari cyan-400 ke biru elektrik kustom #0000FE */}
          <span className="text-[#0000FE] font-bold uppercase tracking-[0.3em] text-xs">
            Frequently Asked Questions
          </span>
          {/* REVISI STYLE: Memberikan gradasi warna teks dari putih ke abu-abu netral agar terkesan premium */}
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-4">
            <span className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-transparent">Informasi</span>{" "}
            <span className="text-neutral-600">Terukur</span>
          </h2>
        </div>

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              /* REVISI MODERN WEB3 CARD STYLE:
                 - Menggunakan efek Glassmorphism transparan (bg-neutral-900/40 + backdrop-blur-md)
                 - Transisi border nembus glow biru elektrik kustom #0000FE tebal saat di-hover
                 - Shadow glow halus di sekeliling card
              */
              className="group border border-neutral-800/60 rounded-2xl overflow-hidden bg-neutral-900/40 backdrop-blur-md hover:border-[#0000FE]/60 hover:shadow-[0_0_25px_rgba(0,0,254,0.15)] transition-all duration-300"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-hidden cursor-pointer"
              >
                <span className="font-bold text-white text-sm uppercase tracking-wider leading-relaxed pr-4 group-hover:text-white/90 transition-colors">
                  {faq.question}
                </span>
                {/* REVISI WEB3 TOGGLE BADGE:
                   - Mengubah dari bulat biasa menjadi kotak asimetris melengkung (rounded-lg) khas Tech Web3
                   - Mengisi background dengan warna biru elektrik penuh jika item aktif
                */}
                <span className={`shrink-0 w-7 w-7 h-7 flex items-center justify-center rounded-lg border text-sm font-bold transition-all duration-300 ${
                  activeIndex === index 
                    ? "bg-[#0000FE] border-[#0000FE] text-white rotate-45 shadow-[0_0_10px_rgba(0,0,254,0.5)]" 
                    : "border-neutral-700 text-[#0000FE] bg-neutral-950/40 group-hover:border-[#0000FE]/40"
                }`}>
                  +
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      {/* REVISI INTERNAL DIVIDER: Menggunakan warna border netral tipis yang lembut */}
                      <p className="text-neutral-400 text-xs leading-relaxed border-t border-neutral-800/80 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}