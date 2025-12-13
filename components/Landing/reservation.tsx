"use client";

import Link from "next/link";
import { Circle, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    <div className="w-[1320px] flex flex-col">
      <div className="h-10 flex justify-between items-center">
        <h1 className="flex items-center gap-2">
          <Circle className="stroke-secondary bg-secondary rounded-full" />
          پیشنهادهای ویژه هتل ساحلی موجان
        </h1>

        <Link href="/Roompage" className="flex items-center gap-1 text-primary">
          <ChevronLeft className="stroke-primary" />
          مشاهده بیشتر
        </Link>
      </div>

      <div className="h-[570px] relative mt-6">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          className="w-full h-full"
        >
          {cardItems.map((item, index) => (
            <SwiperSlide key={index}>
              <NormalCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="paginationItems -mt-4 flex justify-center gap-4 mb-12">
          <div className="swiper-prev flex items-center justify-center border border-secondary rounded-lg w-8 h-8 p-2 cursor-pointer">
            <ChevronRight className="stroke-secondary" />
          </div>

          <div className="swiper-next flex items-center justify-center border border-secondary rounded-lg w-8 h-8 p-2 cursor-pointer">
            <ChevronLeft className="stroke-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
