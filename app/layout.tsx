import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Features/layouts/Navbar";
import Footer from "@/Features/layouts/Footer";
import MuiProvider from "@/Features/provider/MuiProvider";
import ClientLayout from "./clientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "هتل ساحلی موجان",
  description: "تجربه آرامش در کنار دریای عمان",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="theme-color" content="#1bb566" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MuiProvider>
          <ClientLayout>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ClientLayout>
        </MuiProvider>
      </body>
    </html>
  );
}
