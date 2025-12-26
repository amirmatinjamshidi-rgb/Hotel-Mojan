import React from "react";
import Link from "next/link";
import { Divider } from "@mui/material";
import { formatPrice } from "@/Features/utils/price";
function RoomReservationInfo() {
  return (
    <div
      dir="rtl"
      className="
        flex flex-col gap-4
        w-full
        max-w-[303px]
        border
        px-4 py-3
        rounded-2xl
        allBorder
        sticky
      "
    >
      <h3 className="font-bold">جزییات خرید</h3>

      <div>
        <h3 className="font-bold">اتاق اول</h3>
        <span className="flex flex-row justify-between items-center">
          <p>قیمت اتاق</p>
          <p className="font-semibold text-lg">{formatPrice(10500000)} </p>
        </span>
      </div>

      <Divider />

      <div>
        <h3 className="font-bold">اتاق دوم</h3>
        <span className="flex flex-row justify-between items-center">
          <p className="flex flex-row justify-between items-center">
            قیمت اتاق
          </p>
          <p className="font-semibold text-lg">{formatPrice(10500000)} </p>
        </span>
      </div>

      <Divider />

      <span className="flex flex-row justify-between items-center">
        <p>مالیات</p>
        <p className="font-semibold text-lg">{formatPrice(500000)} </p>
      </span>

      <Divider />
      <span className="flex flex-row justify-between items-center">
        <p>مجموع</p>
        <p className="text-primaryActive text-2xl">{formatPrice(21000000)} </p>
      </span>

      <Link
        href=""
        className="bg-secondary hover:bg-secondaryHover active:bg-secondaryActive rounded-xl w-full  h-12 flex  items-center justify-center text-2xl"
      >
        تایید و ادامه
      </Link>
    </div>
  );
}

export default RoomReservationInfo;
