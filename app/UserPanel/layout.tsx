"use client";
import SideBar from "@/Features/components/UserPanel/SideBar";
import { useAuthStore } from "@/Features/auth/AuthStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isAuthenticated) {
      alert("لطفا ابتدا وارد اکانت خود شوید!");
      router.replace("/"); 
    }
  }, [mounted, isAuthenticated, router]);

  if (!mounted || !isAuthenticated) return null;

  return (
    <div className="flex flex-row p-4 gap-10">
      <SideBar />
      {children}
    </div>
  );
}
