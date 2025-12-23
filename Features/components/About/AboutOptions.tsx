"use client";
import Dummy from "@/public/Options.png";

import Image from "next/image";

const options = [
  { id: 1, image: Dummy, Description: "رستوران دریایی" },
  { id: 2, image: Dummy, Description: "استخر روباز" },
  { id: 3, image: Dummy, Description: "پارکینگ اختصاصی" },
  { id: 4, image: Dummy, Description: "اسپای آرامش‌بخش" },
  { id: 5, image: Dummy, Description: "سالن همایش " },
  { id: 6, image: Dummy, Description: "باشگاه ورزشی " },
];

const AboutOptions = () => {
  return (
    <div className="h-112 flex flex-col gap-3">
      <div className="flex flex-row gap-2 pr-51">
        <div className="rounded-[100px] bg-secondary w-4 h-4 mt-1.5 "></div>
        <span className="text-[20px] text-textPrimary font-bold">
          درباره هتل ساحلی موجان
        </span>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className=" h-[380px] flex flex-row gap-8 ">
          {options.map((card) => {
            return (
              <div
                key={card.id}
                className="w-50 h-[380px] border bg-white border-primaryBorder rounded-lg shadow hover:shadow-md flex flex-col"
              >
                <div>
                  <Image src={card.image} alt="pic" className="rounded-t-lg" />
                </div>
                <div className="h-[43px] flex items-center">
                  <span className="  text-textPrimary text-[16px] p-6 pt-11 ">
                    {card.Description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutOptions;
