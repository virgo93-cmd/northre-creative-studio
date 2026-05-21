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
    <div
      className={`fixed inset-0 bg-black z-9999 flex flex-col items-center justify-center select-none transition-transform duration-800 ease-in-out ${
        isLoaded ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Container utama dengan space-y-10 untuk menjaga jarak vertikal tetap renggang */}
      <div className="w-full max-w-md px-8 text-center space-y-10">
        
        {/* TULISAN UTAMA: Hanya huruf depan yang kapital, sebaris, solid putih */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-widest block whitespace-nowrap leading-none">
            Northre Creative Studio
          </h1>
        </div>

        {/* PROGRESS BAR & PERSENTASE */}
        <div className="space-y-2">
          <div className="w-full h-px bg-neutral-900 relative overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-200 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          
          <div className="flex justify-end">
            <span className="text-[10px] font-mono text-neutral-500 tracking-wider">
              {Math.min(progress, 100)}%
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}