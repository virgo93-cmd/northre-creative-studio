"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 800,
}: ScrollRevealProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      {
        root: null,
        rootMargin: "-50px 0px -50px 0px", // Jarak deteksi yang lebih pas antar section
        threshold: 0.15, // Ditingkatkan agar animasi lebih "sengaja" terpicu
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`will-change-[transform,opacity] ${className}`}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Easing yang lebih smooth/modern
        transitionDelay: `${delay}ms`,
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? "translateY(0)" : "translateY(40px)", // Jarak geser sedikit lebih jauh biar kerasa transisinya
      }}
    >
      {children}
    </div>
  );
}