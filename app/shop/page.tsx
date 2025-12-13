import React from "react";
import InfoCard from "./components/InfoCard";
import NormalCard from "./components/NormalCard";
import VideoGallery from "@/components/ui/Gallery";

const page = () => {
  return (
    <div>
      <InfoCard />
      <NormalCard
        item={{
          image: "",
          tag: undefined,
          title: "",
          beds: "",
          breakfast: undefined,
          rating: 0,
          price: "",
          buttonText: "",
        }}
      />
      <VideoGallery />
    </div>
  );
};

export default page;
