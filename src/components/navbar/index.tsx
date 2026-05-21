"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MegaMenu from "./mega-menu";
import { navigationContent } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProdukHovered, setIsProdukHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mengolah nomor WhatsApp bisnis dari siteConfig agar berformat internasional (62)
  let whatsappUrl = "#";
  if (siteConfig?.contact?.whatsapp) {
    let cleanNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, "");
    if (cleanNumber.startsWith("0")) {
      cleanNumber = "62" + cleanNumber.slice(1);
    }
    whatsappUrl = `https://wa.me/${cleanNumber}?text=Halo%20NORTHRE%20Creative%20Studio,%20saya%20tertarik%20untuk%20berkolaborasi%20dan%20berkonsultasi.`;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      onMouseLeave={() => setIsProdukHovered(false)}
      className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-center transition-all duration-300 ${
        isScrolled || isProdukHovered || isMobileMenuOpen
          ? "bg-black/90 backdrop-blur-md border-b border-neutral-900 h-20" 
          : "bg-black/0 h-24 border-b border-transparent" 
      }`}
    >
      {/* Padding disesuaikan: px-4 di mobile biar gak terlalu makan space, px-16 di desktop */}
      <div className="w-full max-w-360 px-4 md:px-16 h-full flex items-center justify-between relative">
        
        {/* SISI KIRI: Logo Resmi */}
        <div className="flex items-center h-full z-20">
          <div className="flex items-center w-36 md:w-56">
            <Link href="/" className="relative w-full h-10 md:h-12 block transition-opacity hover:opacity-80">
              <Image
                src="/assets/img/logo/northre-logo.png"
                alt="NORTHRE CREATIVE STUDIO"
                fill
                priority
                sizes="(max-width: 768px) 144px, 224px"
                className="object-contain object-left"
              />
            </Link>
          </div>
        </div>

        {/* MENU NAVIGASI (POSISI SIMETRIS DI TENGAH) */}
        <nav className="hidden md:flex items-center gap-8 h-full absolute left-1/2 -translate-x-1/2 z-10">
          {navigationContent.map((menu, index) => {
            if (menu.hasMegaMenu) {
              return (
                <div 
                  key={index}
                  onMouseEnter={() => setIsProdukHovered(true)}
                  className="text-sm font-semibold text-neutral-400 hover:text-white cursor-pointer transition-colors h-full flex items-center gap-1.5"
                >
                  {menu.label}
                  <svg 
                    className={`w-3 h-3 transition-transform duration-200 ${isProdukHovered ? "rotate-180" : ""}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              );
            }
            return (
              <Link
                key={index}
                href={menu.href}
                className="text-sm font-semibold text-neutral-400 hover:text-white cursor-pointer transition-colors"
              >
                {menu.label}
              </Link>
            );
          })}
        </nav>

        {/* SISI KANAN: Tautan Langsung & Hamburger Icon */}
        <div className="flex items-center gap-4 z-20">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-black font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-md text-xs md:text-sm px-4 md:px-5 py-2"
          >
            Hubungi Kami
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden text-white p-2 focus:outline-none z-50 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all duration-300 origin-left ${isMobileMenuOpen ? "rotate-45 translate-x-1" : ""}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 origin-left ${isMobileMenuOpen ? "-rotate-45 translate-x-1" : ""}`} />
            </div>
          </button>
        </div>

        {/* ================= MEGA MENU (DESKTOP) ================= */}
        <MegaMenu isOpen={isProdukHovered} onClose={() => setIsProdukHovered(false)} />

        {/* ================= SIDEBAR DRAWER MENU (MOBILE) ================= */}
        <div
          className={`fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-black/95 backdrop-blur-2xl border-t border-neutral-900 transition-all duration-300 ease-in-out md:hidden p-8 z-40 overflow-y-auto ${
            isMobileMenuOpen 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="space-y-6 pt-4">
            <div className="pb-4">
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Menu Utama</p>
              
              <div className="flex flex-col gap-5">
                {navigationContent.map((menu, index) => (
                  <Link 
                    key={index}
                    href={menu.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-medium text-white hover:text-neutral-400 transition-colors flex items-center justify-between border-b border-neutral-900/40 pb-3"
                  >
                    {menu.label}
                    <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}