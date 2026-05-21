"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ClientMarquee() {
  const logos = [1, 2, 3, 4, 5, 6, 7];

  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      {/* Container agar tidak full layar */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* MARQUEE TRACK (TANPA GARIS) */}
        <div className="relative flex overflow-hidden py-8">
          <motion.div 
            className="flex gap-24 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...logos, ...logos].map((i, idx) => (
              <div key={idx} className="shrink-0 w-28 md:w-36 h-12 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image 
                  src={`/assets/img/client/${i}.png`} 
                  alt={`Client ${i}`} 
                  fill 
                  sizes="(max-width: 768px) 112px, 144px"
                  className="object-contain" 
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}