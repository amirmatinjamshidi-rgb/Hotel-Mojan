"use client";
import { useAuthStore } from "@/Features/auth/AuthStore";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserPanelGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!isAuthenticated) {
    alert("لطفا ابتدا وارد اکانت خود شوید!");
    redirect("/");
  }

  return <>{children}</>;
}
