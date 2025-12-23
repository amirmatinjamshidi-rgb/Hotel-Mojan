"use client";

import Link from "next/link";
import { Circle, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import NormalCard from "@/app/shop/components/NormalCard";

const cardItems = [
  {
    image: "/Dummy.jpg",
    tag: "",
    title: "اتاق دونفره استاندارد",
    beds: "دو تخت یک نفره",
    breakfast: true,
    rating: 4.8,
    price: "۳٬۵۰۰٬۰۰۰ تومان",
    buttonText: "رزرو اتاق",
  },
  {
    image: "/Dummy.jpg",
    tag: "",
    title: "اتاق دونفره استاندارد",
    beds: "دو تخت یک نفره",
    breakfast: true,
    rating: 4.8,
    price: "۳٬۵۰۰٬۰۰۰ تومان",
    buttonText: "رزرو اتاق",
  },
  {
    image: "/Dummy.jpg",
    tag: "",
    title: "اتاق دونفره استاندارد",
    beds: "دو تخت یک نفره",
    breakfast: true,
    rating: 4.8,
    price: "۳٬۵۰۰٬۰۰۰ تومان",
    buttonText: "رزرو اتاق",
  },
  {
    image: "/Dummy.jpg",
    tag: "",
    title: "اتاق دونفره استاندارد",
    beds: "دو تخت یک نفره",
    breakfast: true,
    rating: 4.8,
    price: "۳٬۵۰۰٬۰۰۰ تومان",
    buttonText: "رزرو اتاق",
  },
  {
    image: "/Dummy.jpg",
    tag: "",
    title: "اتاق دونفره استاندارد",
    beds: "دو تخت یک نفره",
    breakfast: true,
    rating: 4.8,
    price: "۳٬۵۰۰٬۰۰۰ تومان",
    buttonText: "رزرو اتاق",
  },
  {
    image: "/Dummy.jpg",
    tag: "",
    title: "اتاق دونفره استاندارد",
    beds: "دو تخت یک نفره",
    breakfast: true,
    rating: 4.8,
    price: "۳٬۵۰۰٬۰۰۰ تومان",
    buttonText: "رزرو اتاق",
  },
  {
    image: "/Dummy.jpg",
    tag: "",
    title: "اتاق دونفره استاندارد",
    beds: "دو تخت یک نفره",
    breakfast: true,
    rating: 4.8,
    price: "۳٬۵۰۰٬۰۰۰ تومان",
    buttonText: "رزرو اتاق",
  },
  {
    image: "/Dummy.jpg",
    tag: "",
    title: "اتاق دونفره استاندارد",
    beds: "دو تخت یک نفره",
    breakfast: true,
    rating: 4.8,
    price: "۳٬۵۰۰٬۰۰۰ تومان",
    buttonText: "رزرو اتاق",
  },
];

function Reservation() {
  return (
    <div className="w-full  mx-auto flex flex-col px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="flex items-center gap-2 text-sm sm:text-base font-bold">
          <Circle
            className="stroke-secondary bg-secondary rounded-full"
            size={12}
          />
          پیشنهادهای ویژه هتل ساحلی موجان
        </h1>
        <Link
          href="/booking"
          className="flex items-center gap-1 text-primary text-sm font-medium"
        >
          <ChevronLeft size={18} className="stroke-primary" />
          مشاهده بیشتر
        </Link>
      </div>

      <div className="relative w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          loop={true}
          centeredSlides={true}
          navigation={{ nextEl: ".res-next", prevEl: ".res-prev" }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: false,
            },
            1440: {
              slidesPerView: 3.3,
              centeredSlides: false,
              slidesOffsetBefore: 0,
            },
          }}
          className="w-full pb-12!"
        >
          {cardItems.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <NormalCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-4 mt-6">
          <div className="res-prev flex items-center justify-center border border-secondary rounded-lg w-10 h-10 cursor-pointer hover:bg-secondary hover:bg-opacity-10 transition-all">
            <ChevronRight className="stroke-secondary" />
          </div>
          <div className="res-next flex items-center justify-center border border-secondary rounded-lg w-10 h-10 cursor-pointer hover:bg-secondary hover:bg-opacity-10 transition-all">
            <ChevronLeft className="stroke-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
