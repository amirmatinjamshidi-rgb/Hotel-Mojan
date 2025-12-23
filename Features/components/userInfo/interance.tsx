import React from "react";
import { Checkbox } from "@mui/material";
import { Circle } from "lucide-react";
import TimeChoose from "./timeChoose";
const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };
function Interance() {
  return (
    <div className="w-7/12">
      <div className="h-10 flex justify-between items-center">
        <h1 className="flex items-center gap-2">
          <Circle
            className="stroke-secondary bg-secondary rounded-full"
            size={15}
          />
          ورود دیر هنگام به هتل
        </h1>
      </div>
      <div>
        <div className="flex align-middle justify-between">
          <span className="flex align-middle  items-center">
            {" "}
            <Checkbox {...label} /> زمان ورود من به هتل پس از ساعت 8 شب به وقت
            مقصد می‌باشد.
            <TimeChoose />
          </span>
        </div>
        <p>
          در صورتی که زمان ورود شما به هتل پس از ساعت ۸ شب به وقت مقصد می‌باشد،
          لطفا ساعات ورود خود را به هتل انتخاب کنید، در غیر اینصورت موجان
          هیچ‌گونه مسولیتی در خصوص لغو یا کنسلی هتل نمی‌پذیرد.
        </p>
      </div>
    </div>
  );
}

export default Interance;
