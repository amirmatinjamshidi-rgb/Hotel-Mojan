import Image from "next/image";
import React from "react";
import Dummy from "@/public/Dummy.jpg";
import Button from "@/components/ui/button";
import { Hamburger, Star, Users } from "lucide-react";

const NormalCard = () => {
  return (
    <div className="w-[424px] h-[500px] border rounded-lg border-primaryBorder flex flex-col ">
      <div className="min-w-[424px] h-[321px]">
        <Image
          src={Dummy}
          width={422}
          height={321}
          alt="dummy"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <div className="">
          <span className="text-[22px] text-textPrimary">
            اتاق دونفره استاندارد
          </span>
        </div>
        <div className="flex flex-row justify-between pt-4 w-[376px] h-7">
          <div className="flex flex-row gap-1">
            <Users className="stroke-textSecondary" />
            <span className="text-textSecondary"> دو تخت یک نفره</span>
          </div>
          <div className="h-4 w-0.5 bg-textSecondary"></div>
          <div className="flex flex-row gap-1">
            <Hamburger className="stroke-textSecondary" />
            <span className="text-textSecondary">صبحانه</span>
          </div>
          <div className="h-4 w-0.5 bg-textSecondary"></div>
          <div className="flex flex-row gap-1">
            <Star className="fill-secondary stroke-secondary" />
            <span className="text-textSecondary">4.8</span>
          </div>
        </div>
        <div className="flex flex-row justify-between p-6 w-[376px] h-12">
          <div className="mt-2 flex flex-row justify-around">
            <p>
              ۳٬۵۰۰٬۰۰۰ تومان <span> برای هر شب</span>
            </p>
          </div>
          <div>
            <Button
              className="bg-secondary hover:bg-secondaryHover active:bg-secondaryActive text-textPrimary! w-[84px]! h-12!"
              radius="md">
              رزرو اتاق
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalCard;
