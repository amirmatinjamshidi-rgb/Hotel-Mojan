"use client";

import dynamic from "next/dynamic";

const AboutIntro = dynamic(() => import("./AboutIntro"), { ssr: false });
const AboutMission = dynamic(() => import("./AboutMission"), { ssr: false });
const AboutTeam = dynamic(() => import("./AboutTeam"), { ssr: false });
const AboutOptions = dynamic(() => import("./AboutOptions"), { ssr: false });
const AboutRahHa = dynamic(() => import("./AboutRahHa"), { ssr: false });
const AboutQuickContact = dynamic(() => import("./AboutQuickContact"), {
  ssr: false,
});
const FAQ = dynamic(() => import("../Landing/FAQ"), { ssr: false });

const AboutComplete = () => {
  return (
    <div className="flex flex-col gap-8 pt-4">
      <AboutIntro />
      <AboutMission />
      <AboutTeam />
      <AboutOptions />
      <AboutRahHa />
      <AboutQuickContact />
      <FAQ />
    </div>
  );
};

export default AboutComplete;
