"use client";
import SideBar from "@/Features/components/UserPanel/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row p-4 gap-10">
      

      <SideBar />
      
      {children}
    </div>
  );
}
