"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { teamMembers } from "@/config/home/team-section";

export default function TeamSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-black">
      {/* BACKGROUND GRADIENT AURA */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-125 h-125 bg-cyan-900/20 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-150 h-150 bg-blue-900/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-20 text-center">
          <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs">
            The Creative Minds
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-4">
            Dibalik <span className="text-neutral-600">Layar Northre</span>
          </h2>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center"
            >
              {/* CONTAINER FOTO */}
              <div className="relative w-full aspect-4/5 mb-6 overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800 transition-all duration-500 group-hover:border-cyan-500/50">
                <div className="absolute inset-0 bg-linear-to-t from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <Image 
                  src={member.photo} 
                  alt={member.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority={index < 4} 
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* INFO TIM */}
              <div className="text-center">
                <h3 className="text-white font-bold uppercase tracking-wide text-sm mb-1 group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-neutral-500 text-[10px] uppercase tracking-[0.2em]">
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