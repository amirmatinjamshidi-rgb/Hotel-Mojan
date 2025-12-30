"use client";
import SideBar from "../../Features/components/UserPanel/SideBar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="theme-color" content="#1bb566" />
      </head>

      <SideBar />
      {children}
    </html>
  );
}
