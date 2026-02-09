import HomeClient from "@/Features/components/Landing/HomeClient";
import { Suspense } from "react";


export default function Page() {
  return (
    <Suspense fallback={null}>
      <HomeClient />
    </Suspense>
  );
}