import Image from "next/image";
import Dummy from "@/public/Dummy.jpg";
import { Divider } from "@mui/material";
import Button from "@/Features/ui/button";
import { Pizza, Star } from "lucide-react";
import { formatFaNumber } from "@/Features/utils/formatNumber";

const RoomCard = () => {
  return (
    <div
      className="
        w-full
        max-w-[984px]
        border border-primaryBorder
        hover:shadow-md
        rounded-lg
        px-4 py-4
        lg:px-6
      "
    >
      <div
        className="
          flex flex-col gap-6
          lg:flex-row lg:gap-8 lg:justify-between
        "
      >
        <Image
          src={Dummy}
          width={237}
          height={170}
          alt="Dummy"
          className="
            w-full rounded-lg object-cover
            lg:w-[237px]
          "
        />

        <div
          className="
            flex flex-col gap-4
            lg:w-[356px]
          "
        >
          <span className="text-lg lg:text-[22px] text-textPrimary">
            دو تخته اکونومی
          </span>

          <span className="text-sm lg:text-[13px] text-textPrimary">
            1 بزرگسال
          </span>

          <span className="text-xs lg:text-[12px] text-textPrimary">
            قابل استرداد
          </span>

          <div
            className="
              h-10 rounded-lg bg-[#6C757D1A]
              flex items-center px-3
              lg:w-[356px]
            "
          >
            <div className="flex justify-between w-full text-textSecondary whitespace-nowrap">
              <div className="flex gap-1">
                <Star className="fill-secondary stroke-none w-4 h-4" />
                <span>4.8</span>
              </div>

              <span>بدون نظر</span>

              <div className="flex gap-1">
                <Pizza className="stroke-textSecondary w-4 h-4" />
                <span>صبحانه</span>
              </div>
            </div>
          </div>
        </div>

        <Divider
          orientation="vertical"
          className="hidden lg:block text-primaryBorder"
        />

        <div className="flex flex-col gap-2 lg:items-center justify-between">
          <span className="text-textSecondary">
            {formatFaNumber(10500000)} برای هر شب
          </span>

          <span className="text-textPrimary">
            <span className="text-primary">{formatFaNumber(10500000)}</span>{" "}
            تومان
          </span>

          <span>قیمت برای 3 شب</span>

          <Button
            radius="md"
            size="medium"
            className="w-full bg-secondary hover:bg-secondaryHover"
          >
            رزرو اتاق
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
