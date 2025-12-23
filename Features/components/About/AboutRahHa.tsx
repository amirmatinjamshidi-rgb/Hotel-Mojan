"use client";
import AboutSendEmail from "./AboutSendEmail";
import Leaflet from "./Leaflet";

const AboutRahHa = () => {
  return (
    <div className=" flex bg-primaryAccent justify-center p-8">
      <div className="flex flex-row gap-24 justify-center items-center">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-2">
            <div className="rounded-[100px] bg-secondary w-4 h-4 mt-1.5"></div>
            <span className="text-[22px] text-textPrimary font-bold">
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
