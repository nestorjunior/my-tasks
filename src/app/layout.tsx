import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Tasks",
  description: "Project with Next.js 15 + Typescript + Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} mx-auto max-w-screen-xl px-10 sm:px-6 lg:px-8 bg-[#0F0F0F] antialiased`}
      >
        <div className="min-h-screen flex flex-col justify-between">
          <header className="flex items-center justify-between h-28">
            <Header />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
