"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { teamMembers } from "@/config/home/team-section";

export default function TeamSection() {
  return (
    /* LATAR BELAKANG: Menggunakan padding standar dan overflow-hidden agar asset gambar latar terkunci aman */
    <section className="relative w-full py-20 md:py-24 overflow-hidden bg-[#1C1C1C]">
      
      {/* LAPISAN LATAR BELAKANG GAMBAR KUSTOM LO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/img/team/teamworks.jpg"
          alt="Teamworks Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        {/* REVISI OVERLAY: Gradasi dari Hitam Kustom #1C1C1C ke arah Biru Elektrik #0000FE agar perpaduan gambarnya mewah dan teks tetap tajam */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C] via-[#1C1C1C]/90 to-[#0000FE]/80" />
      </div>

      {/* BACKGROUND GRADIENT AURA TAMBAHAN UNTUK PENDARAN */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-125 h-125 bg-[#0000FE]/20 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-150 h-150 bg-[#0000FE]/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-14 md:mb-20 text-center">
          <span className="text-white font-bold uppercase tracking-[0.3em] text-xs drop-shadow-sm">
            The Creative Minds
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-4">
            Dibalik <span className="text-white/60">Layar Northre</span>
          </h2>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center w-full max-w-xs md:max-w-none"
            >
              {/* CONTAINER UTAMA FOTO */}
              <div className="relative w-full aspect-4/5 mb-6 rounded-2xl transition-all duration-500">
                
                {/* Efek Siku Frame Modern Agency (Atas-Kiri & Bawah-Kanan) */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-neutral-700/60 transition-all duration-500 group-hover:border-white z-20" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-neutral-800 transition-all duration-500 group-hover:border-[#0000FE] group-hover:drop-shadow-[0_0_12px_rgba(0,0,254,1)] z-20" />
                
                {/* WRAPPER FOTO UTAMA */}
                <div className="relative w-full h-full overflow-hidden rounded-xl bg-neutral-900/50 border border-neutral-800/40 transition-all duration-500 group-hover:border-white/20 shadow-lg">
                  <div className="absolute inset-0 bg-linear-to-t from-[#0000FE]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  <Image 
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* INFO TIM */}
              <div className="text-center">
                <h3 className="text-white font-bold uppercase tracking-wide text-xs md:text-sm mb-1 group-hover:text-white transition-colors">
                  {member.name}
                </h3>
                <p className="text-white/70 text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}