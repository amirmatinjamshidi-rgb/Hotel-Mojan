"use client";

import Link from "next/link";
import { Circle, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import OffCard from "@/app/shop/components/OffCard";

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
  {
    image: "/Dummy.jpg",
    discount: "10%",
    title: "اتاق لیمو",
    oldPrice: "۴٬۰۰۰٬۰۰۰",
    price: "۳٬۶۰۰٬۰۰۰ تومان",
    buttonText: "رزرو اتاق",
  },
];

function OffCardSwiper() {
  return (
    <div className="w-full mx-auto flex flex-col px-4 lg:px-0">
      <div className="h-10 flex justify-between items-center">
        <h1 className="flex items-center gap-2 text-sm sm:text-base">
          <Circle
            className="stroke-secondary bg-secondary rounded-full"
            size={15}
          />
          پیشنهادهای ویژه هتل
        </h1>
        <Link
          href="/Roompage"
          className="flex items-center gap-1 text-primary text-sm"
        >
          <ChevronLeft className="stroke-primary" />
          مشاهده بیشتر
        </Link>
      </div>

      <div className="relative mt-6 h-auto lg:h-[580px]">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          loop={true}
          centeredSlides={true}
          navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            1024: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 4,
              centeredSlides: false,
            },
          }}
          className="w-full pb-12!"
        >
          {offCardItems.map((item, index) => (
            <SwiperSlide key={index}>
              <OffCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-4 mt-4">
          <div className="swiper-prev flex items-center justify-center border border-secondary rounded-lg w-10 h-10 cursor-pointer hover:bg-secondary/10 transition-colors">
            <ChevronRight className="stroke-secondary" />
          </div>
          <div className="swiper-next flex items-center justify-center border border-secondary rounded-lg w-10 h-10 cursor-pointer hover:bg-secondary/10 transition-colors">
            <ChevronLeft className="stroke-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffCardSwiper;
