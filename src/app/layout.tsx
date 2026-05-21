import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// Import komponen preloader modern yang barusan kita buat
import Preloader from "@/components/ui/preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NORTHRE CREATIVE STUDIO",
  description: "Solusi kreatif digital untuk mengembangkan brand dan bisnis Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-black text-white">
        {/* Komponen Preloader dipasang di paling atas body */}
        <Preloader />

        {/* Navbar otomatis muncul di bagian paling atas */}
        <Navbar />
        
        {/* Area konten utama halaman */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer dipasang di sini agar muncul di paling bawah semua halaman */}
        <Footer />
      </body>
    </html>
  );
}