import React from "react";
import { CircleX } from "lucide-react";
import Button from "@/components/ui/button";
function CancelReserve() {
  return (
    <div className="w-[386px] h-[218px] align-middle justify-center rounded-md flex-col flex items-center shadow hover:shadow-gray-500 duration-300 transition-all ease-in-out">
      <CircleX color="#ed0c0c" strokeWidth={1} />
      <p>آیا از مسدود سازی</p>
      <div className="flex gap-4">
        <Button
          color="orange1"
          size="small"
          text="none"
          border="none"
          className="w-[165px] rounded-md"
        >
          یه تست
        </Button>

        <Button
          color="white"
          text="orange"
          border="orange"
          className="w-[165px] rounded-md"
          size="small"
        >
          یه تست
        </Button>
      </div>
    </div>
  );
}

export default CancelReserve;
