import type { Metadata } from "next";
import Providers from "./Providers";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { TProvider } from "@/providers/toast-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Esoma Parking",
  description: "Parking privado en el centro de Gandia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("dark", geist.variable, geistMono.variable)} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <TProvider />
            <Toaster />
                 <Suspense
            fallback={
              <main className="page-frame section-page">
                <p className="empty-state" role="status">Loading the latest from the street...</p>
              </main>
            }
          >
            {children}
          </Suspense>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
