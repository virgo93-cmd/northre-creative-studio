"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { navigationContent } from "@/config/navigation";

// Pemetaan ID file 1.png sampai 9.png berdasarkan judul layanan agar tidak tertukar/bergeser saat data config berkembang
const serviceIconMap: Record<string, string> = {
  "Social Media Management": "1.png",
  "Product Photography": "2.png",
  "Video Production": "3.png",
  "Content Planner": "4.png",
  "KOL Management": "5.png",
  "Logo Design": "6.png",
  "Web Design": "7.png",
  "Corporate Legality": "8.png",
  "Intellectual Property": "9.png",
};

export default function ServiceShowcase() {
  const produkNav = navigationContent.find((nav) => nav.label === "Produk");
  const categories = produkNav?.megaMenuCategories || [];
  const allItems = categories.flatMap((cat) => cat.items);

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* BACKGROUND IMAGE DENGAN OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/img/showcase-bg.jpg" 
          alt="Service Showcase Background" 
          fill
          className="object-cover opacity-20"
          priority
        />
        {/* REVISI: Menggunakan warna hitam kustom #1C1C1C dengan opacity halus */}
        <div className="absolute inset-0 bg-[#1C1C1C]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-14 text-center">
          {/* REVISI: Mengubah warna teks aksen label dari cyan-400 ke biru elektrik kustom #0000FE */}
          <span className="text-[#0000FE] font-bold uppercase tracking-[0.3em] text-xs">Eksplorasi Solusi</span>
          
          {/* REVISI STYLE: Memberikan gradasi warna teks dari putih ke abu-abu netral agar terkesan premium */}
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-4">
            <span className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-transparent">Ekosistem</span>{" "}
            <span className="text-neutral-600">Layanan Kami</span>
          </h2>
        </div>

        {/* GRID LAYOUT HORIZONTAL - REVISI: Jarak gap dirapatkan total dari gap-6 menjadi gap-3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
          {allItems.map((item, index) => {
            // Mengambil nama file aset gambar secara presisi dari map, fallback ke nama default jika tidak ketemu
            const iconName = serviceIconMap[item.title] || `${index + 1}.png`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                /* REVISI KOTAK CARD TIPIS & MINIMALIS:
                   - Padding internal dipangkas ketat menjadi p-3.5 md:p-4 agar kotak super tipis
                   - Background transparan tipis + soft glassmorphism border-neutral-800/30 tetap dipertahankan
                   - Gap horizontal dirapatkan pakai gap-3 md:gap-4
                */
                className="flex flex-row items-center justify-between p-3.5 md:p-4 rounded-xl bg-neutral-900/10 backdrop-blur-xs border border-neutral-800/30 hover:border-neutral-700/50 hover:bg-neutral-900/30 transition-all duration-500 ease-out group gap-3 md:gap-4 w-full"
              >
                {/* SISI KIRI: ICON ASSET (Ukuran dibuat ramping menyesuaikan kotak tipis) */}
                <div className="relative w-10 h-10 md:w-11 md:h-11 shrink-0 transition-transform duration-500 ease-out group-hover:scale-105">
                  <Image 
                    src={`/assets/img/icons/${iconName}`} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 768px) 40px, 44px"
                    className="object-contain"
                  />
                </div>

                {/* SISI TENGAH: KONTEN UTAMA TEKS (Sangat rapat dan presisi) */}
                <div className="flex-1 text-left pl-1 md:pl-2 space-y-0.5">
                  {/* JUDUL */}
                  <h3 className="text-white font-bold uppercase tracking-wider text-[11px] md:text-xs transition-colors duration-300 group-hover:text-neutral-200">
                    {item.title}
                  </h3>
                  {/* DESKRIPSI */}
                  <p className="text-neutral-500 text-[10.5px] leading-relaxed max-w-sm md:max-w-md transition-colors duration-300 group-hover:text-neutral-400 font-medium truncate sm:whitespace-normal">
                    {item.description}
                  </p>
                </div>
                
                {/* SISI KANAN: Tombol Minimalis Modern Gambar Panah Lingkaran Ramping */}
                <div className="shrink-0 pl-1">
                  <Link 
                    href={item.href}
                    aria-label={`Detail mengenai ${item.title}`}
                    className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full border border-neutral-800 text-neutral-400 bg-neutral-950/40 group-hover:bg-[#0000FE] group-hover:border-[#0000FE] group-hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <svg 
                      className="w-3 h-3 transform transition-transform duration-300 group-hover:translate-x-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}