import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/Features/layouts/Navbar";
import Footer from "@/Features/layouts/Footer";
import MuiProvider from "@/Features/provider/MuiProvider";
import ClientLayout from "./clientLayout";

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
      <body>
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
