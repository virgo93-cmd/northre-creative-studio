import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  
  // Gaya dasar: Melengkung rounded-full biar dinamis dan tidak kaku/kotak katro
  const baseStyles = "inline-flex items-center justify-center font-semibold tracking-tight text-center transition-all duration-300 ease-in-out focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-95 rounded-full";
  
  // Varian gaya Premium Minimalis
  const variants = {
    // Putih solid mewah, teks hitam, pas di-hover berubah jadi semi-transparan elegan ala Apple
    primary: "bg-white text-black hover:bg-white/90 hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)]",
    
    // Glassmorphic: Latar transparan gelap, border putih tipis mewah
    secondary: "bg-neutral-900/40 text-white border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700",
    
    // Ghost: Polosan, teks abu-abu menyala putih saat di-hover
    ghost: "bg-transparent text-neutral-400 hover:text-white",
  };

  // Ukuran tombol proporsional dan tidak bantet
  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}