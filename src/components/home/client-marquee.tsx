"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ClientMarquee() {
  // Menjaga jumlah logo tetap 10 sesuai path 1.png - 10.png
  const logos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    /* REVISI TOTAL SKEMA & UKURAN:
       - py-16 dipangkas habis menjadi py-6 untuk memotong tinggi section hingga 50%
       - Gradient diubah dari atas-bawah menjadi kiri-kanan (Hitam #1C1C1C -> Biru #0000FE -> Hitam #1C1C1C)
    */
    <section className="relative w-full bg-gradient-to-r from-[#1C1C1C] via-[#0000FE] to-[#1C1C1C] py-6 overflow-hidden">
      {/* Container utama max-w-7xl agar konsisten responsif di laptop & PC desktop */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Judul Atas - Jarak pb-4 dikurangi ke pb-1 agar space makin padat */}
        <div className="w-full text-center pb-1">
          <h2 className="text-base md:text-lg font-bold uppercase tracking-[0.2em] text-white drop-shadow-md">
            Klien Kami
          </h2>
        </div>
        
        {/* MARQUEE TRACK (TANPA GARIS) */}
        {/* Padding py-10 dipangkas menjadi py-4 agar section ramping tanpa mengecilkan aset logo */}
        <div className="relative flex w-full overflow-hidden py-4 mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <motion.div 
            className="flex gap-20 md:gap-28 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          >
            {[...logos, ...logos].map((i, idx) => (
              // DIMENSI UKURAN ASLI TETAP DIKUNCI (w-56 h-16 di HP, w-72 h-20 di PC/Laptop) - TIDAK DIKECILKAN
              <div 
                key={idx} 
                className="shrink-0 w-56 h-16 md:w-72 md:h-20 relative grayscale brightness-200 opacity-60 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300"
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

        {/* Sub-judul di bagian bawah logo - Jarak pt-8 dikurangi menjadi pt-2 */}
        <div className="w-full text-center pt-2 max-w-2xl mx-auto">
          <p className="text-xs md:text-sm text-white/70 font-medium leading-relaxed tracking-wide italic">
            “Kepercayaan client adalah prioritas kami. Hingga saat ini masih banyak client yang mempercayakan kebutuhan mereka kepada kami.”
          </p>
        </div>

      </div>
    </section>
  );
}