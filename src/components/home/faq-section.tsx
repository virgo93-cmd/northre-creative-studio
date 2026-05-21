"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/config/home/faq-data";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* BACKGROUND IMAGE - INTENSITAS DITAMBAH */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/img/faq.png" 
          alt="FAQ Background" 
          className="w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-12 text-center">
          <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-4">
            Informasi <span className="text-neutral-600">Terukur</span>
          </h2>
        </div>

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="group border border-neutral-700 rounded-2xl overflow-hidden bg-black/60 backdrop-blur-[2px] hover:border-cyan-500/50 transition-colors duration-300"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-bold text-white text-sm uppercase tracking-wider leading-relaxed pr-4">
                  {faq.question}
                </span>
                <span className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-neutral-600 text-cyan-400 transition-transform ${activeIndex === index ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-neutral-300 text-xs leading-relaxed border-t border-neutral-700 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}