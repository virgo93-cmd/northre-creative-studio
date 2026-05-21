"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { homeHeroContent } from "@/config/home/hero-section";

export default function HomeHero() {
  const { typewriterItems, ctaButtons } = homeHeroContent;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % typewriterItems.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [typewriterItems.length]);

  return (
    <section className="relative w-full bg-black pt-32 pb-10 overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-100 h-100 rounded-full bg-linear-to-tr from-violet-600/10 to-cyan-500/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-350 w-full mx-auto px-6 flex flex-col items-center text-center relative z-10 gap-16">
        
        {/* JUDUL CENTERED DENGAN LABEL */}
        <div className="w-full space-y-4 flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">Northre Creative Studio</span>
          
          <div className="h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={typewriterItems[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-3xl md:text-5xl font-bold uppercase tracking-tight"
              >
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-white to-violet-500">
                  {typewriterItems[index]}
                </span>
                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="text-white ml-2">|</motion.span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* TOMBOL DIPERKEcil (PX-6 PY-3) */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {ctaButtons.map((button, i) => (
              <a 
                key={i} 
                href={button.href} 
                className={`px-6 py-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  button.type === 'primary' 
                    ? 'bg-white text-black hover:bg-neutral-200' 
                    : 'bg-transparent text-white border border-neutral-700 hover:border-white'
                }`}
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>

        {/* MARQUEE SMOOTH (INFINITE) */}
        <div className="w-full overflow-hidden py-4 relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent z-10" />

          <motion.div 
            className="flex gap-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[1, 2, 3, 4, 1, 2, 3, 4].map((i, idx) => (
              <div key={idx} className="w-48 h-84 md:w-64 md:h-112 shrink-0 overflow-hidden rounded-2xl border border-neutral-900 shadow-2xl">
                <video
                  src={`/assets/img/hero/vd${i}.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-85"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}