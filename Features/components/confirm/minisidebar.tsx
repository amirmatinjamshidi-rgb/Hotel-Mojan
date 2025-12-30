import { formatFaNumber } from "@/Features/utils/formatNumber";
import React from "react";
import Button from "@/Features/ui/button";
function Minisidebar() {
  return (
    <div
      className=" flex flex-col gap-4
        w-full
        max-w-[303px]
        border
        px-4 py-3
        rounded-2xl
        allBorder
        sticky
       "
    >
      <div className="flex flex-col gap-3">
        <div className="flex  gap-12 mx-auto ">
          <span>مبلغ قابل پرداخت</span>
          <div className="flex justify-end gap-1">
            <span className="text-primary">{formatFaNumber(10500000)}</span>
            <span>تومان</span>
          </div>
        </div>

        <Button
          className="w-full"
          color="orange1"
          radius="none"
          size="medium"
          border="none"
        >
          پرداخت
        </Button>
      </div>
    </div>
  );
}

export default Minisidebar;
