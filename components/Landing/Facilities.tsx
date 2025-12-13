import React from "react";
import BenefitCard from "../ui/benefitCard";
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
    <div className="min-w-screen h-[528px]  bg-[#E6F4F7] flex justify-between gap-6">
      <div className="w-[536px] max-w-[420px] h-[130px] flex flex-col align-middle mt-40 mr-18 justify-between items-start gap-6">
        <div className="h-14 w-[424px]">
          {" "}
          <h3 className=" text-2xl w-[464px] h-[188px]">
            امکانات را که برای اقامتی راحت در
            <span className="text-primary "> هتل ساحلی موجان‌</span>
            فراهم کرده‌ایم
          </h3>
        </div>
        <div>
          {" "}
          <p className="max-w-[420px] text-lg">
            در هتل موجان همه چیز برای آسایش شما آماده است؛ از فضای کاری خصوصی تا
            استخر روباز و اینترنت پرسرعت رایگان. هر آنچه برای اقامتی دلپذیر نیاز
            دارید، در دسترس شماست.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 p-4 gap-4 justify-center w-[872px] h-[272px] align-middle items-center ml-26 mt-7">
        {BenefitCardItems.map(
          (
            item: { icon?: string; title: string },
            index: React.Key | null | undefined
          ) => (
            <BenefitCard key={index} item={item} />
          )
        )}
      </div>
    </div>
  );
}

export default Facilities;
