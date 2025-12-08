import Image from "next/image";
import React from "react";
import Dummy from "@/public/Dummy.jpg";
import Button from "@/components/ui/button";

const OffCard = () => {
  return (
    <div className="w-[311px] h-[400px] border rounded-lg border-primaryBorder flex flex-col mr-20 mt-30">
      <div>
        <div className="w-[51px] h-6 bg-primaryAccent rounded-2xl z-10 absolute mt-4 mr-4 flex flex-row justify-center items-center">
          <span className="mt-1.5">8%</span>
        </div>
        <Image
          src={Dummy}
          width={311}
          height={294}
          alt="dummy"
          className="rounded-t-lg z-9"
        />
      </div>
      <div className="flex flex-col p-4 mt-6">
        <div className="flex flex-row justify-between">
          <span className="text-[22px] text-textPrimary">
            اتاق زیتون
          </span>
          <Button
            className="bg-secondary hover:bg-secondaryHover active:bg-secondaryActive text-textPrimary! w-[84px]! h-10!"
            radius="md">
            رزرو اتاق
          </Button>
        </div>
        <div className="flex flex-row justify-between pt-4 text-[16px]">
          <p className="line-through text-textSecondary"> ۳٬۵۰۰٬۰۰۰</p>
          <p>
            ۳٬۵۰۰٬۰۰۰ تومان <span className="text-textSecondary"> برای هر شب</span>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default OffCard;
