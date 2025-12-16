import React from "react";
import AboutIntro from "./AboutIntro";
import AboutMission from "./AboutMission";
import AboutTeam from "./AboutTeam";
import AboutOptions from "./AboutOptions";
import AboutRahHa from "./AboutRahHa";
import AboutQuickContact from "./AboutQuickContact";
import FAQ from "../Landing/FAQ";

const AboutComplete = () => {
  return (
    <div className="flex flex-col gap-8 pt-4">
      <AboutIntro />
      <AboutMission />
      <AboutTeam />
      <AboutOptions />
      <AboutRahHa />
      <AboutQuickContact />
      <FAQ/>
    </div>
  );
};

export default AboutComplete;
