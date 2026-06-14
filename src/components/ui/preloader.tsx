"use client";

import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeoutLoaded = setTimeout(() => {
        setIsLoaded(true);
      }, 400);

      const timeoutHidden = setTimeout(() => {
        setIsHidden(true);
      }, 1200);

      return () => {
        clearTimeout(timeoutLoaded);
        clearTimeout(timeoutHidden);
      };
    }
  }, [progress]);

  if (!mounted || isHidden) return null;

  return (
    <>
      {/* LOGIKA CSS INJECTOR: Mengunci Navbar, Konten, & Scrollbar agar TIDAK bocor sebelum preloader selesai */}
      {!isLoaded && (
        <style dangerouslySetInnerHTML={{__html: `
          html, body { overflow: hidden !important; }
          header, main, footer { opacity: 0 !important; pointer-events: none !important; }
        `}} />
      )}

      <div
        /* REVISI WEB3 STYLE (TETAP DIJAGA UTUH Sesuai Request Lo):
           - Mengubah bg-black menjadi warna hitam kustom #1C1C1C.
           - Mengubah efek transisi hilangnya dari -translate-y-full (geser atas kaku) menjadi 
             efek modern Web3 Fade Scale (skala membesar tipis & opacity memudar halus).
        */
        className={`fixed inset-0 bg-[#1C1C1C] z-9999 flex flex-col items-center justify-center select-none transition-all duration-1000 ease-in-out ${
          isLoaded ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
        }`}
      >
        {/* Container utama dengan space-y-8 untuk menjaga kerapian tata letak */}
        <div className="w-full max-w-sm px-10 text-center space-y-8">
          
          {/* TULISAN UTAMA: Sentuhan Web3 dengan gradasi warna putih ke biru elektrik kustom #0000FE */}
          <div className="space-y-1">
            <h1 className="text-xl md:text-2xl font-bold tracking-[0.25em] block whitespace-nowrap uppercase leading-none bg-gradient-to-r from-white via-white to-[#0000FE] bg-clip-text text-transparent">
              Northre
            </h1>
            <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-neutral-500 pl-1">
              Creative Studio
            </p>
          </div>

          {/* PROGRESS BAR & PERSENTASE MINIMALIS ULTRA-THIN */}
          <div className="space-y-3">
            {/* Garis progress super tipis khas Web3 Dashboard */}
            <div className="w-full h-[1px] bg-neutral-900/60 relative overflow-hidden">
              <div
                /* REVISI: Mengubah warna bar pemuat menjadi warna biru elektrik kustom #0000FE */
                className="h-full bg-[#0000FE] transition-all duration-300 ease-out shadow-[0_0_8px_#0000FE]"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            
            {/* Teks indikator angka persentase digital monospaced */}
            <div className="flex justify-between items-center text-[10px] font-mono tracking-wider text-neutral-400">
              <span className="text-neutral-600 uppercase font-sans font-bold tracking-widest text-[8px]">System Ready</span>
              <span className="font-semibold text-white">
                {Math.min(progress, 100).toString().padStart(3, "0")}%
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}