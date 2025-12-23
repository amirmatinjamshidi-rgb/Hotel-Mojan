import Image from "next/image";
import Dummy from "@/public/Dummy.jpg";
import { Divider } from "@mui/material";
import Button from "@/Features/ui/button";
import { Pizza, Star } from "lucide-react";

const RoomCard = () => {
  return (
    <div className="w-[60%] h-[202px] border border-primaryBorder hover:shadow-md mt-50  py-4 px-6 rounded-lg">
      <div className=" flex flex-row gap-8 justify-between">
        <div>
          <Image
            src={Dummy}
            width={237}
            height={170}
            alt="Dummy"
            className="w-[237px] h-[170px] rounded-lg"
          />
        </div>
        <div className="w-[356px] flex flex-col justify-start gap-4">
          <div>
            <span className="text-[22px] text-textPrimary">
              دو تخته اکونومی
            </span>
          </div>
          <div>
            <span className="text-[13px] text-textPrimary">1 بزرگسال</span>
          </div>
          <div>
            <span className="text-[12px] text-textPrimary">قابل استرداد </span>
          </div>
          <div className="w-[356px] h-10 bg-[#6C757D1A] rounded-lg items-center">
            <div className="flex flex-row justify-between  text-textSecondary items-center whitespace-nowrap">
              <div className="flex flex-row gap-1">
                <Star className="fill-secondary stroke-none  w-4 h-4" />
                <span>4.8</span>
              </div>
              <div>
                <span>بدون نظر</span>
              </div>
              <div className="flex flex-row gap-1">
                <Pizza className="stroke-textSecondary w-4 h-4" />
                <span>صبحانه</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Divider orientation="vertical" className="text-primaryBorder" />
        </div>
        <div className="flex flex-col items-center justify-between">
          <span className="text-textSecondary">2.500.000 تومان برای هر شب</span>
          <span className="text-textPrimary">
            <span className="text-primary">10.500.000</span>
            تومان
          </span>
          <span>قیمت برای 3 شب</span>
          <Button radius="md" size="medium" className="w-full bg-secondary">
            رزرو اتاق
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
