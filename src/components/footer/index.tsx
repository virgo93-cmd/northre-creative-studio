"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site"; 

const servicesList = [
  { title: "Social Media Management", href: "#", icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1" /></svg> },
  { title: "Product Photography", href: "#", icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><circle cx="12" cy="13" r="3" /></svg> },
  { title: "Video Production", href: "#", icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> },
  { title: "Content Planner", href: "#", icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
  { title: "KOL Management", href: "#", icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
  { title: "Logo Design", href: "#", icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg> },
  { title: "Web Desain", href: "#", icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-neutral-900 text-neutral-400 pt-14 pb-6">
      
      {/* REVISI RESPONSIVENESS: Mengubah susunan grid dan padding horizontal secara adaptif */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
        
        {/* KOLOM 1: LOGO & DESKRIPSI (Full di Mobile, Memakan 4 Kolom di PC/Laptop) */}
        <div className="md:col-span-2 lg:col-span-4 space-y-5">
          <div className="relative w-52 h-12 block">
            <Image src="/assets/img/logo/northre-logo.png" alt={siteConfig.name} fill priority sizes="208px" className="object-contain object-left" />
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed font-medium pr-0 lg:pr-6">{siteConfig.description}</p>
        </div>

        {/* KOLOM 2: OUR SERVICES (1 Kolom di Mobile, Memakan 3 Kolom di PC/Laptop) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-900 pb-2">Our Services</h4>
          <ul className="space-y-3 text-xs">
            {servicesList.map((service, index) => (
              <li key={index}>
                <Link href={service.href} className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors font-medium group">
                  <span className="group-hover:text-white text-neutral-500">{service.icon}</span>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* KOLOM 3: SOCIAL MEDIA (1 Kolom di Mobile, Memakan 2 Kolom di PC/Laptop) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-900 pb-2">Social Media</h4>
          <ul className="space-y-3 text-xs font-medium">
            <li><a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
            <li><a href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
          </ul>
        </div>

        {/* KOLOM 4: CONTACT US (1 Kolom di Mobile, Memakan 3 Kolom di PC/Laptop) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-900 pb-2">Contact Us</h4>
          <ul className="space-y-3 text-xs font-medium text-neutral-400">
            <li><a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{siteConfig.contact.whatsapp}</a></li>
            <li><a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">{siteConfig.contact.email}</a></li>
            <li className="text-[11px] text-neutral-500 leading-relaxed">{siteConfig.contact.address}</li>
          </ul>
        </div>
      </div>
      
      {/* AREA BOTTOM COPYRIGHT: Flex wrap otomatis tumpuk vertikal di Mobile, sejajar horizontal di PC */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 border-t border-neutral-900/60 pt-6 flex flex-col sm:flex-row gap-4 justify-between text-[11px] font-medium text-neutral-600">
        <p>© {currentYear} {siteConfig.name.toUpperCase()}.</p>
        <div className="flex gap-6"><Link href="/privacy" className="hover:text-neutral-400">Privacy Policy</Link><Link href="/terms" className="hover:text-neutral-400">Terms of Service</Link></div>
      </div>
    </footer>
  );
}