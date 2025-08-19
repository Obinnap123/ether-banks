import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Xapo-Style Navbar",
  description: "UI Build",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-1" style={{ paddingTop: '170px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
