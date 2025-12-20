"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoader, setShowLoader] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const displayTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setShowLoader(false);
      }, 700);
    }, 2000);

    return () => clearTimeout(displayTimer);
  }, []);

  return (
    <>
      {showLoader && <LoadingScreen isExiting={isExiting} />}
      <div
        className={
          showLoader
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        {children}
      </div>
    </>
  );
}
