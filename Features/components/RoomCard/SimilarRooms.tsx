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
    <div className="w-full max-w-[1320px] mx-auto">
      <h1 className="flex items-center gap-2 mb-6">
        <Circle
          className="stroke-secondary bg-secondary rounded-full"
          size={15}
        />
        اتاق‌های مشابه هتل موجان
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offCardItems.map((item, index) => (
          <OffCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SimilarRooms;
