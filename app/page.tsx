import FAQ from "@/components/Landing/FAQ";
import WhySection from "@/components/Landing/whySection";
import Reservation from "@/components/Landing/reservation";
import OffCardSwiper from "@/components/Landing/RoomOffer";
import Facilities from "@/components/Landing/Facilities";
import VideoGallery from "@/components/ui/Gallery";
import HeroBanner from "@/components/Landing/HeroBanner";
function page() {
  return (
    <div className="gap-22 bg-amber-400">
      <div className="p-6">
        <HeroBanner />
      </div>
      <div className="p-18">
        {" "}
        <Reservation />
      </div>
      <Facilities />
      <div className="p-16">
        {" "}
        <OffCardSwiper />
      </div>{" "}
      <div className="mb-12">
        <VideoGallery />
      </div>
      <div className="p-12">
        {" "}
        <WhySection />
      </div>
      <FAQ />
    </div>
  );
}

export default page;
