"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import member1 from "@/public/member1.png";
import member2 from "@/public/member2.png";
import member3 from "@/public/member3.png";
import member4 from "@/public/member4.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    image: member1,
    name: "محمدرضا کونامی",
  },
  {
    id: 2,
    image: member2,
    name: "عبداله سعید ایلینی",
  },
  {
    id: 3,
    image: member3,
    name: "سید مظفرالذین خاتمی",
  },
  {
    id: 4,
    image: member4,
    name: "حمیدفیفاگیمر",
  },
  {
    id: 5,
    image: member1,
    name: "محمدرضا کونامی",
  },
  {
    id: 6,
    image: member2,
    name: "عبداله سعید ایلینی",
  },
  {
    id: 7,
    image: member3,
    name: "سید مظفرالذین خاتمی",
  },
  {
    id: 8,
    image: member4,
    name: "حمیدفیفاگیمر",
  },
];
const AboutTeam = () => {
  return (
    <div className=" flex flex-col">
      <div className="h-10 flex items-center pr-51">
        <div className="flex flex-row gap-2">
          <div className="rounded-[100px] bg-secondary w-4 h-4 mt-1.5"></div>
          <span className="text-[22px] text-textPrimary ">
            تیم هتل ساحلی موجان
          </span>
        </div>
      </div>

      <div className=" relative mt-6 flex justify-center flex-col">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          className="w-[1500px] h-full">
          {teamMembers.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="h-90 w-70 bg-primaryAccent overflow-hidden flex justify-end flex-col">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="overflow-hidden"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="paginationItems flex justify-center gap-4 mt-12">
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
};

export default AboutTeam;
