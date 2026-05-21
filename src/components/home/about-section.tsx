"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-black">
      {/* LATAR BELAKANG GAMBAR */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/img/bg-kenapa-kami.png"
          alt="About Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* KOLOM 1: VIDEO DENGAN BINGKAI ASIMETRIS */}
          <div className="relative w-full">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-white z-20" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-cyan-400 z-20" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full aspect-9/16 lg:aspect-4/5 rounded-xl overflow-hidden border border-neutral-800"
            >
              <video
                src="/assets/img/about.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* KOLOM 2: CONTENT BLOCK */}
          <div className="flex flex-col">
            <div className="mb-8 space-y-2">
              <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs">
                Kenapa Harus Northre?
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase italic">
                Kreativitas yang <br />
                <span className="text-neutral-600 relative inline-block">
                  Terukur
                  <div className="absolute -bottom-2 left-0 w-2/3 h-1 bg-cyan-400" />
                </span>
              </h2>
            </div>

            <div className="relative mb-10">
              <p className="text-neutral-400 text-lg leading-relaxed italic border-l-2 border-neutral-800 pl-6">
                "Kami percaya bahwa visual yang kuat adalah kunci pertumbuhan brand di era digital. 
                Northre hadir bukan hanya sebagai vendor, tapi sebagai mitra strategis untuk 
                memastikan setiap konten yang diproduksi mampu mengonversi audiens menjadi pelanggan setia."
              </p>
            </div>

            <div className="mb-12">
              <Link 
                href="/tentang-kami" 
                className="inline-flex items-center gap-4 px-10 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl hover:bg-cyan-400 hover:scale-105 transition-all duration-300"
              >
                Tentang Kami
              </Link>
            </div>

            <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-neutral-800 flex items-center gap-6 max-w-sm">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-neutral-800">
                    <Image 
                      src={`/assets/img/profil/${i}.jpeg`} 
                      alt={`Reviewer ${i}`} 
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-lg">4.9 Star</p>
                <p className="text-neutral-500 text-[10px] uppercase tracking-[0.2em]">Reviewers Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}