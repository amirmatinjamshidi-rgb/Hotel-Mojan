"use client";
import dynamic from "next/dynamic";
import React from "react";
import { Divider } from "@mui/material";
const PriceRange = dynamic(() => import("./price"), { ssr: false });
const StarClass = dynamic(() => import("./StarClass"), { ssr: false });
const RoomItems = dynamic(() => import("./RoomItems"), { ssr: false });
const RoomOptions = dynamic(() => import("./RoomOptions"), { ssr: false });

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
