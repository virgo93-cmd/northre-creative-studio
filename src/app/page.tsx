import React from "react";
import HomeHero from "@/components/home/hero-section";
import ClientMarquee from "@/components/home/client-marquee";
import AboutSection from "@/components/home/about-section";
import KolSection from "@/components/home/kol-section";
import ServiceShowcase from "@/components/home/service-showcase";
import TeamSection from "@/components/home/team-section";
import FAQSection from "@/components/home/faq-section";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <main className="w-full bg-black min-h-screen relative overflow-hidden">
      
      {/* SECTION 1: HERO SECTION */}
      <ScrollReveal duration={1000}>
        <HomeHero />
      </ScrollReveal>
      
      {/* SECTION 2: CLIENT MARQUEE */}
      <ScrollReveal duration={1200}>
        <ClientMarquee />
      </ScrollReveal>

      {/* SECTION 3: ABOUT / WHY US */}
      <ScrollReveal duration={1400}>
        <AboutSection />
      </ScrollReveal>

      {/* SECTION 4: KOL SHOWCASE */}
      <ScrollReveal duration={1600}>
        <KolSection />
      </ScrollReveal>

      {/* SECTION 5: SERVICE SHOWCASE */}
      <ScrollReveal duration={1800}>
        <ServiceShowcase />
      </ScrollReveal>

      {/* SECTION 6: TEAM SECTION */}
      <ScrollReveal duration={2000}>
        <TeamSection />
      </ScrollReveal>

      {/* SECTION 7: FAQ SECTION */}
      <ScrollReveal duration={2200}>
        <FAQSection />
      </ScrollReveal>
      
    </main>
  );
}