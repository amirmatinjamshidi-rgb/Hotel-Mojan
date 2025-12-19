import React from "react";
import { Divider } from "@mui/material";
import { formatPrice } from "@/utils/price";
import Button from "@/components/ui/button";
function RoomReservationInfo() {
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

      <Button
        color="orange2"
        size="medium"
        border="orange"
        radius="md"
        className="bg-secondary hover:bg-secondaryHover active:bg-secondaryActive"
      >
        تایید و ادامه
      </Button>
    </div>
  );
}

export default RoomReservationInfo;
