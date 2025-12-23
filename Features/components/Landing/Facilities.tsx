import React from "react";
"use client";
import BenefitCard from "@/Features/ui/benefitCard";
import Button from "@/Features/ui/button";
import Link from "next/link";

const BenefitCardItems = [
  { icon: "/wifi.png", title: "اینترنت رایگان" },
  { icon: "/wifi.png", title: "استخر روباز" },
  { icon: "/wifi.png", title: "صبحانه رایگان" },
  { icon: "/wifi.png", title: "پارکینگ اختصاصی" },
  { icon: "/wifi.png", title: "اینترنت رایگان" },
  { icon: "/wifi.png", title: "استخر روباز" },
  { icon: "/wifi.png", title: "صبحانه رایگان" },
  { icon: "/wifi.png", title: "پارکینگ اختصاصی" },
];

function Facilities() {
  return (
    <section className="w-full bg-[#E6F4F7] py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-6 text-right">
          <h3 className="text-xl sm:text-2xl lg:text-3xl leading-relaxed">
            امکانات را که برای اقامتی راحت در
            <span className="text-primary"> هتل ساحلی موجان‌</span>
            فراهم کرده‌ایم
          </h3>

          <p className="text-base sm:text-lg max-w-xl">
            در هتل موجان همه چیز برای آسایش شما آماده است؛ از فضای کاری خصوصی تا
            استخر روباز و اینترنت پرسرعت رایگان. هر آنچه برای اقامتی دلپذیر نیاز
            دارید، در دسترس شماست.
          </p>
          <Link href="/About-Us">
            {" "}
            <Button
              color="orange1"
              radius="md"
              size="big"
              border="orange"
              className=" w-3/8 flex lg:self-baseline md:self-center sm:self-center"
            >
              مشاهده دیگر امکانات هتل
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {BenefitCardItems.map((item, index) => (
            <BenefitCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
