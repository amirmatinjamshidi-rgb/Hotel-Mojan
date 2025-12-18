import React from "react";
import Filterbox from "../Rooms/Filterbox";
import RoomCard from "../shop/components/RoomCard";
import FilterBy from "../Rooms/components/FilterBy";
import { Container } from "@mui/material";
import RoomBanner from "../Rooms/components/Banner";
function page() {
  return (
    <Container className="flex flex-col align-middle justify-center ">
      <FilterBy />
      <Filterbox />
      <RoomCard />
      <RoomCard />
      <RoomBanner />
      <RoomCard />
      <RoomCard />
      <RoomCard />
    </Container>
  );
}

export default page;
