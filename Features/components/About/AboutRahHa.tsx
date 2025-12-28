"use client";

import dynamic from "next/dynamic";
const AboutSendEmail = dynamic(() => import("./AboutSendEmail"));
const Leaflet = dynamic(() => import("./Leaflet"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-lg bg-gray-200 animate-pulse" />
  ),
});

const AboutRahHa = () => {
  return (
    <div className="flex bg-primaryAccent justify-center p-8">
      <div className="flex flex-row gap-24 items-center">
        <div className="flex flex-col gap-5">
          <div className="flex gap-2">
            <div className="rounded-full bg-secondary w-4 h-4 mt-1.5" />
            <span className="text-[22px] font-bold">
              راه های ارتباطی و موقعیت{" "}
              <span className="text-primary">هتل ساحلی موجان</span>
            </span>
          </div>
          <AboutSendEmail />
        </div>

        <div className="w-[860px] h-[460px]">
          <Leaflet />
        </div>
      </div>
    </div>
  );
};

export default AboutRahHa;
