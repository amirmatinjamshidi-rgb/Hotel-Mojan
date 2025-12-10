import React from "react";

import RoomCard from "./components/RoomCard";
import NormalCard from "./components/NormalCard";

import OffCard from "./components/OffCard";


const page = () => {
  return (
    <div>
      <RoomCard />
      <NormalCard />
      
      <OffCard/>
    </div>
  );
};

export default page;
