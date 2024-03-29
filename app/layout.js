'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { Providers } from "./providers";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  const [mainsidebarOpen, setMainSidebarOpen] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning='true'>
      <body className={inter.className}>
        <Providers>
          <main className="flex min-h-screen">
            <aside className={`hidden md:flex md:flex-none  ${mainsidebarOpen ? "w-56" : "w-12"}`} >
              <Sidebar setMainSidebarOpen={setMainSidebarOpen} mainsidebarOpen={mainsidebarOpen}/>
            </aside>
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
              <Navbar />
              <section className={`py-2 dark:bg-darkbg ${mainsidebarOpen ? "px-2" : "px-4"}`} >
              {children}
              </section>
            </main>
          </main>
        </Providers>
      </body>
    </html>
  );
}
