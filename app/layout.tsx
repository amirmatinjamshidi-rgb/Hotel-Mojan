import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "@/Features/layouts/Navbar";
import Footer from "@/Features/layouts/Footer";
import MuiProvider from "@/Features/provider/MuiProvider";
import ClientLayout from "./clientLayout";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-vazirmatn",
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
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <head>
        <meta name="theme-color" content="#1bb566" />
      </head>
      <body className="font-vazirmatn">
        <MuiProvider>
          <Navbar />
          <ClientLayout>
            <main>{children}</main>
          </ClientLayout>
          <Footer />
        </MuiProvider>
      </body>
    </html>
  );
}
