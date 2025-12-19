import React from "react";
import Filterbox from "../booking/rooms/components/Filterbox";
import RoomCard from "../shop/components/RoomCard";
import FilterBy from "../booking/rooms/components/FilterBy";
import { Container } from "@mui/material";
import RoomBanner from "../booking/rooms/components/Banner";
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
