import React from "react";
import PriceRange from "./components/price";
import StarClass from "./components/StarClass";
import RoomItems from "./components/RoomItems";
import { Divider } from "@mui/material";
import RoomOptions from "./RoomOptions";

function Filterbox() {
  return (
    <div
      dir="rtl"
      className="
        flex flex-col gap-4
        w-full
        lg:w-[32%]
        max-w-full
        border
        px-4 py-3
      "
    >
      <h3 className="font-bold">فیلتر بر اساس:</h3>

      <Divider />

      <PriceRange />

      <Divider />

      <h4 className="font-bold">کلاس اتاق:</h4>

      <StarClass />

      <Divider />

      <RoomItems />

      <Divider />

      <h4 className="font-bold">امکانات اتاق:</h4>

      <RoomOptions />
    </div>
  );
}
export default Filterbox;
