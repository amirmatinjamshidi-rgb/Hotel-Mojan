import React from "react";
import PriceRange from "./price";
import StarClass from "./StarClass";
import RoomItems from "./RoomItems";
import { Divider } from "@mui/material";
import RoomOptions from "./RoomOptions";

function Filterbox() {
  return (
    <div
      dir="rtl"
      className="
      
        flex flex-col justify-start gap-4
h-fit
        lg:w-[30%]
        max-w-full
        border
        rounded-lg
        allBorder
        
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
