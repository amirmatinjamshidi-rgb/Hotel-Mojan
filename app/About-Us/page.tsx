"use client";
import dynamic from "next/dynamic";

const AboutComplete = dynamic(
  () => import("@/Features/components/About/AboutComplete"),
  { ssr: false }
);

export default function Page() {
  return <AboutComplete />;
}
