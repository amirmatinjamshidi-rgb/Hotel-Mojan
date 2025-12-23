"use client";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import FAQ from "@/components/Landing/FAQ";
import WhySection from "@/components/Landing/whySection";
import Reservation from "@/components/Landing/reservation";
import OffCardSwiper from "@/components/Landing/RoomOffer";
import Facilities from "@/components/Landing/Facilities";
import VideoGallery from "@/components/ui/Gallery";
import HeroBanner from "@/components/Landing/HeroBanner";
import AboutRahHa from "@/components/About/AboutRahHa";

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden">
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4, lg: 0 } }}>
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
          <AboutRahHa />
        </Stack>
      </Container>
    </main>
  );
}
