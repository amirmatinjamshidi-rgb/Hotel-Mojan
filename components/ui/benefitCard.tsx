import React from "react";
import Image from "next/image";
function BenefitCard() {
  return (
    <div className="shadow hover:shadow-gray-500 transition-all ease-out duration-300  align-middle justify-center border-gray-500 rounded-xl w-[200px] h-[200px] flex items-center gap-4 p-4">
      <div className=" flex flex-col items-center align-middle justify-center">
        <Image src="/wifi.png" alt="wifiTest" width={41} height={41} />
        <p className="font-medium text-textPrimary">اینترنت رایگان</p>
      </div>
    </div>
  );
}

export default BenefitCard;
