"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { kolData } from "@/config/home/kol";

export default function KolSection() {
  // Duplikasi data agar loop berjalan seamless tanpa jeda kosong
  const marqueeItems = [...kolData, ...kolData, ...kolData];

  return (
    /* REVISI LATAR BELAKANG: Mengubah bg-black menjadi warna hitam kustom #1C1C1C */
    <section className="relative w-full py-16 bg-[#1C1C1C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          {/* REVISI: Mengubah warna teks aksen label dari cyan-400 ke biru elektrik kustom #0000FE */}
          <span className="text-[#0000FE] font-bold uppercase tracking-[0.3em] text-xs">Management</span>
          
          {/* REVISI STYLE: Memberikan gradasi warna teks dari putih ke abu-abu netral agar terkesan premium */}
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-4 mb-6">
            <span className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-transparent">KOL</span>{" "}
            <span className="text-neutral-600">Influencer</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed tracking-wide">
            Menghubungkan brand Anda dengan talenta digital pilihan untuk menciptakan narasi yang autentik, 
            memperluas jangkauan pasar secara masif, dan menghasilkan konversi yang berdampak nyata.
          </p>
        </div>

        {/* MARQUEE CONTAINER WITH SHORTHAND FADE EFFECT */}
        <div className="relative w-full space-y-6 overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          
          {/* BARIS 1: FOTO PROFIL (Running ke Kiri) */}
          <div className="flex w-max">
            <motion.div 
              className="flex gap-6 pr-6"
              animate={{ x: "-33.33%" }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity }}
            >
              {marqueeItems.map((kol, i) => (
                /* REVISI: Menyelaraskan border dan latar belakang card agar menyatu di atas warna hitam kustom */
                <div key={`top-${i}`} className="relative w-44 h-72 shrink-0 rounded-xl overflow-hidden border border-neutral-800/60 bg-neutral-900/40 group">
                  <Image 
                    src={kol.photoProfile} 
                    alt={kol.name} 
                    fill 
                    sizes="(max-width: 768px) 176px, 176px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    priority={i < 4}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* BARIS 2: FOTO AKUN (Running ke Kanan) */}
          <div className="flex w-max justify-end">
            <motion.div 
              className="flex gap-6 pr-6"
              initial={{ x: "-33.33%" }}
              animate={{ x: 0 }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity }}
            >
              {marqueeItems.map((kol, i) => (
                /* REVISI: Menyelaraskan border dan latar belakang card agar menyatu di atas warna hitam kustom */
                <div key={`bottom-${i}`} className="relative w-44 h-72 shrink-0 rounded-xl overflow-hidden border border-neutral-800/60 bg-neutral-900/40 group">
                  <Image 
                    src={kol.photoAccount} 
                    alt={`${kol.name}-acc`} 
                    fill 
                    sizes="(max-width: 768px) 176px, 176px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                    priority={i < 4}
                  />
                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}