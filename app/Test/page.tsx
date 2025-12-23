import React from "react";
import Filterbox from "../booking/rooms/components/Filterbox";
import RoomCard from "../../Features/components/shop/RoomCard";
import FilterBy from "../../Features/components/rooms/FilterBy";
import { Container } from "@mui/material";
import RoomBanner from "../../Features/components/rooms/Banner";
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
