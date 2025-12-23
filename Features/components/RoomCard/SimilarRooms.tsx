"use client";
import { Circle } from "lucide-react";

import OffCard from "@/Features/components/shop/OffCard";

const offCardItems = [
  {
    image: "/Dummy.jpg",
    discount: "8%",
    title: "اتاق زیتون",
    oldPrice: "۳٬۵۰۰٬۰۰۰",
    price: "۳٬۵۰۰٬۰۰۰ تومان",
    buttonText: "رزرو اتاق",
  },
  {
    image: "/Dummy.jpg",
    discount: "10%",
    title: "اتاق لیمو",
    oldPrice: "۴٬۰۰۰٬۰۰۰",
    price: "۳٬۶۰۰٬۰۰۰ تومان",
    buttonText: "رزرو اتاق",
  },
  {
    image: "/Dummy.jpg",
    discount: "8%",
    title: "اتاق زیتون",
    oldPrice: "۳٬۵۰۰٬۰۰۰",
    price: "۳٬۵۰۰٬۰۰۰ تومان",
    buttonText: "رزرو اتاق",
  },
];

function SimilarRooms() {
  return (
    <div className="w-[1320px] flex flex-col">
      <div className="h-10 flex justify-between items-center">
        <h1 className="flex items-center gap-2">
          <Circle
            className="stroke-secondary bg-secondary rounded-full"
            size={15}
          />
          اتاق‌های مشابه هتل موجان
        </h1>
      </div>

      <div className="h-[570px] flex justify-between mt-6">
        {offCardItems.map((item, index) => (
          <OffCard key={index} item={item} />
        ))}

        <div className="paginationItems -mt-4 flex justify-center gap-4 mb-12"></div>
      </div>
    </div>
  );
}

export default SimilarRooms;
