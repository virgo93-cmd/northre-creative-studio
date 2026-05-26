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
    <section className="relative w-full py-16 overflow-hidden">
      {/* BACKGROUND IMAGE DENGAN OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/img/showcase-bg.jpg" 
          alt="Service Showcase Background" 
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-20 text-center">
          <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs">Eksplorasi Solusi</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-4">
            Ekosistem <span className="text-neutral-600">Layanan Kami</span>
          </h2>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
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
                className="flex flex-col items-center text-center group"
              >
                {/* ICON ASSET PATH SINKRON DENGAN FOLDER PUBLIC/ASSETS/IMG/ICONS */}
                <div className="mb-4 relative w-20 h-20 transition-transform duration-500 group-hover:scale-110">
                  <Image 
                    src={`/assets/img/icons/${iconName}`} 
                    alt={item.title} 
                    fill 
                    sizes="80px"
                    className="object-contain"
                  />
                </div>

                {/* JUDUL */}
                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-3">
                  {item.title}
                </h3>
                
                {/* DESKRIPSI */}
                <p className="text-neutral-400 text-[11px] leading-relaxed mb-4 max-w-50">
                  {item.description}
                </p>
                
                {/* LINK */}
                <Link 
                  href={item.href}
                  className="inline-flex items-center gap-2 text-[10px] text-cyan-400 font-bold uppercase tracking-[0.2em] hover:text-white transition-colors"
                >
                  Detail →
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}