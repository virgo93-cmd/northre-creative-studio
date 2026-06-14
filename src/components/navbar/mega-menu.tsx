import React from "react";
import Link from "next/link";
import { navigationContent } from "@/config/navigation";

// Mengambil data kategori produk secara aman dari konfigurasi terpusat
const produkNav = navigationContent.find((nav) => nav.label === "Produk");
const megaMenuCategories = produkNav?.megaMenuCategories || [];

export default function MegaMenu({ isOpen, onClose }: { isOpen: boolean; onClose?: () => void }) {
  return (
    <div
      /* Menambahkan onClick handler di container utama. 
        Saat ada item menu atau Link di dalam container ini diklik, otomatis memicu fungsi onClose jika tersedia.
      */
      onClick={() => {
        if (onClose) onClose();
      }}
      /* REVISI: Mengubah bg-black menjadi warna hitam kustom #1C1C1C dan menyesuaikan warna border b dan shadow */
      className={`absolute top-full left-0 w-full border-b border-neutral-800/40 transition-all duration-300 ease-in-out overflow-hidden z-[-1] ${
        isOpen 
          ? "opacity-100 translate-y-0 pointer-events-auto py-14 h-auto bg-[#1C1C1C] backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]" 
          : "opacity-0 -translate-y-4 pointer-events-none h-0 bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="max-w-360 mx-auto px-16 grid grid-cols-12 gap-12">
        
        {/* KOLOM KIRI: Deskripsi Pengenalan Studio */}
        {/* REVISI: Menyelaraskan border pembatas kanan agar lebih lembut di atas warna hitam baru */}
        <div className="col-span-3 space-y-3 border-r border-neutral-800 pr-8">
          <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Our Services</h4>
          <p className="text-sm text-white font-semibold">NORTHRE CREATIVE STUDIO</p>
          <p className="text-xs text-neutral-400 leading-relaxed font-medium">
            Menyediakan solusi kreatif ujung-ke-ujung untuk membangun identitas visual, memperluas jangkauan pasar, dan mendongkrak value brand Anda.
          </p>
        </div>

        {/* KOLOM KANAN: Grid Konten Layanan dengan Ikon Resmi secara Terstruktur */}
        <div className="col-span-9 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 pl-4">
          
          {megaMenuCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-5">
              {/* REVISI: Menyelaraskan border pembatas bawah kategori agar serasi */}
              <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-800 pb-2">
                {category.categoryTitle}
              </h4>
              <div className="space-y-4">
                
                {category.items.map((item, itemIndex) => (
                  <Link 
                    key={itemIndex}
                    href={item.href}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    {/* REVISI: Mengubah efek hover warna ikon menjadi warna biru elektrik kustom (#0000FE) */}
                    <div className="pt-0.5 text-white group-hover:text-[#0000FE] transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                        {/* Menjaga keaslian tag lingkaran khusus untuk menu Product Photography */}
                        {item.title === "Product Photography" && (
                          <circle cx="12" cy="13" r="3" strokeLinecap="round" strokeLinejoin="round" />
                        )}
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      {/* REVISI: Mengubah efek hover judul menu menjadi warna biru elektrik kustom (#0000FE) */}
                      <h5 className="text-sm font-semibold text-white group-hover:text-[#0000FE] transition-colors">
                        {item.title}
                      </h5>
                      <p className="text-xs text-neutral-400 font-medium">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}