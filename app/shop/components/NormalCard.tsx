import Image from "next/image";
import React from "react";
import Dummy from "@/public/Dummy.jpg";
import Button from "@/components/ui/button";
import { Hamburger, Star, Users } from "lucide-react";

const NormalCard = () => {
  return (
    <div className="w-[424px] h-[500px] border rounded-lg border-[#D8E3E780] flex flex-col">
      <div className="w-[424px] h-[321px]">
        <Image src={Dummy} width={424} height={321} alt="dummy" />
      </div>
      <div className="text-black ">
        <div>
          <span>اتاق دونفره استاندارد</span>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row ">
            <Users />
            <span> دو تخت یک نفره</span>
          </div>
          <div className="h-4 w-0.5 bg-black"></div>
          <div className="flex flex-row ">
            <Hamburger />
            <span>صبحانه</span>
          </div>
          <div className="h-4 w-0.5 bg-black"></div>
          <div className="flex flex-row ">
            <Star className="fill-amber-500 stroke-amber-500" />
            <span>4.8</span>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <span>۲٬۸۰۰٬۰۰۰ تومان </span>
            <span>برای هرشب</span>
          </div>
          <div>
            <Button color="orange2" size="medium" radius="md" border="orange" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalCard;
