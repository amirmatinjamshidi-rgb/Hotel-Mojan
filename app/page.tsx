"use client";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import FAQ from "@/Features/components/Landing/FAQ";
import WhySection from "@/Features/components/Landing/whySection";
import Reservation from "@/Features/components/Landing/reservation";
import OffCardSwiper from "@/Features/components/Landing/RoomOffer";
import Facilities from "@/Features/components/Landing/Facilities";
import VideoGallery from "@/Features/ui/Gallery";
import HeroBanner from "@/Features/components/Landing/HeroBanner";

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden">
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4, lg: 0 } }}>
        <Stack
          spacing={{ xs: 8, md: 12, lg: 16 }}
          sx={{ py: { xs: 4, md: 8, lg: 12 } }}>
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
