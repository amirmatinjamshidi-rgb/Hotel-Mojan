"use client";

import dynamic from "next/dynamic";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const FAQ = dynamic(() => import("@/Features/components/Landing/FAQ"), {
  ssr: false,
});
const WhySection = dynamic(
  () => import("@/Features/components/Landing/whySection"),
  { ssr: false },
);
const Reservation = dynamic(
  () => import("@/Features/components/Landing/reservation"),
  { ssr: false },
);
const OffCardSwiper = dynamic(
  () => import("@/Features/components/Landing/RoomOffer"),
  { ssr: false },
);
const Facilities = dynamic(
  () => import("@/Features/components/Landing/Facilities"),
  { ssr: false },
);
const VideoGallery = dynamic(() => import("@/Features/ui/Gallery"), {
  ssr: false,
});
const HeroBanner = dynamic(
  () => import("@/Features/components/Landing/HeroBanner"),
  { ssr: false },
);

export default function Page() {

  const searchParams = useSearchParams();
  const authRequired = searchParams.get("auth");

  useEffect(() => {
    if (authRequired === "required") {
      alert("لطفاً ابتدا وارد اکانت خود شوید")!;
    }
  }, [authRequired]);
  return (
    <main className=" overflow-x-hidden">
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4, lg: 4 } }}>
        <Stack
          spacing={{ xs: 8, md: 12, lg: 16 }}
          sx={{ py: { xs: 4, md: 8, lg: 12 } }}
        >
          <HeroBanner />

          <Reservation />

          <Facilities />

          <OffCardSwiper />

          <VideoGallery />

          <WhySection />

          <FAQ />
        </Stack>
      </Container>
    </main>
  );
}
