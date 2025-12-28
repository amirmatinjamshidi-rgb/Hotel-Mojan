"use client";
import SideBar from "@/Features/components/UserPanel/SideBar";
import UserPanelHeader from "@/Features/components/UserPanel/UserPanelHeader";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row p-4 gap-10">
      

      <SideBar />
      <UserPanelHeader/>
      {children}
    </div>
  );
}
