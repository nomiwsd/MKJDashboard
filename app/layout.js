import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className="relative flex w-full">
            <Sidebar />
            <section className="flex flex-col w-full">
              <Navbar />
              {children}
            </section>
          </main>
        </Providers>
      </body>
    </html>
  );
}
