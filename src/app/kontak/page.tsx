"use client";

import React, { useState } from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { contactContent } from "@/config/contact";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    layanan: contactContent.serviceOptions[0] || "",
    pesan: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nama || !formData.pesan) {
      alert("Mohon isi Nama dan Pesan Anda terlebih dahulu, bro!");
      return;
    }

    let cleanNumber = contactContent.whatsappNumber.replace(/[^0-9]/g, "");
    if (cleanNumber.startsWith("0")) {
      cleanNumber = "62" + cleanNumber.slice(1);
    }

    const teksPesan = `Halo NORTHRE Creative Studio!%0A%0A` +
      `*Nama / Brand:* ${formData.nama}%0A` +
      `*Email:* ${formData.email || "-"}%0A` +
      `*Layanan:* ${formData.layanan}%0A%0A` +
      `*Pesan:*%0A${formData.pesan}`;

    const urlWhatsApp = `https://wa.me/${cleanNumber}?text=${teksPesan}`;
    window.open(urlWhatsApp, "_blank");
  };

  return (
    <main className="w-full bg-black min-h-screen relative overflow-hidden pt-32 pb-20">
      
      {/* SHAPE GRADIENT AURA BACKDROP (BELAKANG LAYER - z-0) */}
      <div className="absolute top-[-10%] left-[-10%] w-120 h-120 rounded-full bg-linear-to-br from-violet-600/10 to-cyan-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-130 h-130 rounded-full bg-linear-to-tl from-cyan-600/10 to-violet-500/5 blur-[130px] pointer-events-none z-0" />

      {/* KONTAINER UTAMA DENGAN EFEK SMOOTH REVEAL */}
      <ScrollReveal duration={1000} className="max-w-360 w-full mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* KOLOM KIRI: CREATIVE TOUCHPOINTS & REVISED ACCURATE MAP */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-900 bg-neutral-950/60 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none">
                  {contactContent.subtitle}
                </p>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight uppercase">
                {contactContent.title}
              </h1>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-medium pt-2">
                {contactContent.description}
              </p>
            </div>

            <div className="border-t border-neutral-900 pt-8 space-y-6">
              {contactContent.infoItems.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest">
                    {item.title}
                  </h4>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-sm font-semibold text-white hover:text-neutral-400 transition-colors block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-neutral-200 leading-relaxed">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* SEKSI EMBED MAPS: TITIK KOORDINAT PAS DAN PRESISI */}
            <div className="pt-4 w-full h-64 relative">
              <iframe
                title="NORTHRE Creative Studio Official Location"
                src="https://maps.google.com/maps?q=-7.3633468215341304,108.2328048790295&z=16&output=embed"
                className="w-full h-full rounded-xl border border-neutral-900 shadow-2xl relative z-10 invert-[0.93] contrast-[1.2] saturate-[0.4]"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* KOLOM KANAN: FORMULIR UTUH */}
          <div className="lg:col-span-7 w-full">
            <div className="w-full rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md p-6 md:p-10 shadow-2xl relative overflow-hidden">
              
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-800 to-transparent" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                      Nama Lengkap / Brand *
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-900 bg-black/60 text-sm text-white placeholder-neutral-600 focus:outline-hidden focus:border-neutral-500 transition-colors font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                      Alamat Email (Opsional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-900 bg-black/60 text-sm text-white placeholder-neutral-600 focus:outline-hidden focus:border-neutral-500 transition-colors font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Layanan Yang Dibutuhkan
                  </label>
                  <div className="relative">
                    <select
                      name="layanan"
                      value={formData.layanan}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-900 bg-black/60 text-sm text-white focus:outline-hidden focus:border-neutral-500 transition-colors font-medium appearance-none cursor-pointer"
                    >
                      {contactContent.serviceOptions.map((option, idx) => (
                        <option key={idx} value={option} className="bg-black text-white">
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Detail Pesan / Deskripsi Proyek *
                  </label>
                  <textarea
                    name="pesan"
                    value={formData.pesan}
                    rows={5}
                    onChange={handleChange}
                    placeholder="Ceritakan singkat mengenai proyek kreatif yang ingin Anda bangun..."
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-900 bg-black/60 text-sm text-white placeholder-neutral-600 focus:outline-hidden focus:border-neutral-500 transition-colors font-medium resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all duration-300 shadow-xl border border-white cursor-pointer"
                >
                  Kirim Pesan Ke WhatsApp
                </button>
              </form>

            </div>
          </div>

        </div>
      </ScrollReveal>
    </main>
  );
}