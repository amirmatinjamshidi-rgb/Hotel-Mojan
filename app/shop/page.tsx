import React from "react";

import RoomCard from "./components/RoomCard";
import NavigateRoomCard from "@/components/RoomCard/Navigate";

const page = () => {
  return (
    <div>
      <RoomCard />
      <NavigateRoomCard />
    </div>
  );
};

export default page;
