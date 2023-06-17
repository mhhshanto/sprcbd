"use client";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
// ..

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
    AOS.refresh();
  }, []);
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i%7CRajdhani:400,600,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <Nav />
        
        {children}
        
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
