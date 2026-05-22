"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ClientMarquee() {
  // Menjaga jumlah logo tetap 10 sesuai path 1.png - 10.png
  const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section className="relative w-full bg-black py-16 overflow-hidden">
      {/* Container utama max-w-7xl agar konsisten responsif di laptop & PC desktop */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Judul Atas */}
        <div className="w-full text-center pb-4">
          <h2 className="text-base md:text-lg font-bold uppercase tracking-[0.2em] text-neutral-400">
            Klien Kami
          </h2>
        </div>
        
        {/* MARQUEE TRACK (TANPA GARIS) */}
        {/* Menggunakan fader gradasi halus agar ujung kanan-kiri terpotong rapi di HP */}
        <div className="relative flex w-full overflow-hidden py-10 mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <motion.div 
            className="flex gap-20 md:gap-28 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          >
            {[...logos, ...logos].map((i, idx) => (
              // REVISI TOTAL: Lebar dan tinggi proporsional dibesarkan (w-56 h-16 di HP, w-72 h-20 di PC/Laptop)
              // Dijamin logo tidak akan mentok kaku atau kelihatan kerdil lagi
              <div 
                key={idx} 
                className="shrink-0 w-56 h-16 md:w-72 md:h-20 relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image 
                  src={`/assets/img/client/${i}.png`} 
                  alt={`Client ${i}`} 
                  fill 
                  sizes="(max-width: 768px) 224px, 288px"
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Sub-judul di bagian bawah logo */}
        <div className="w-full text-center pt-8 max-w-2xl mx-auto">
          <p className="text-xs md:text-sm text-neutral-500 font-medium leading-relaxed tracking-wide italic">
            “Kepercayaan client adalah prioritas kami. Hingga saat ini masih banyak client yang mempercayakan kebutuhan mereka kepada kami.”
          </p>
        </div>

      </div>
    </section>
  );
}