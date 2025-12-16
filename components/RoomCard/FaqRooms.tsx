import React from "react";
import MiniAccordionList from "../ui/miniAccordation";
const MiniAccordion = [
  {
    question: "چگونه می‌توانم اتاق رزرو کنم؟",
    answer:
      "کافیست تاریخ ورود و خروج و تعداد مهمانان را مشخص کنید تا اتاق‌های موجود نمایش داده شوند. پس از انتخاب اتاق، با ورود به حساب کاربری و پرداخت آنلاین، رزرو شما نهایی می‌شود.",
  },
  {
    question: "آیا امکان کنسل کردن یا تغییر تاریخ رزرو وجود دارد؟",
    answer:
      "کافیست تاریخ ورود و خروج و تعداد مهمانان را مشخص کنید تا اتاق‌های موجود نمایش داده شوند. پس از انتخاب اتاق، با ورود به حساب کاربری و پرداخت آنلاین، رزرو شما نهایی می‌شود.",
  },
  {
    question: "آیا صبحانه در هزینه اقامت محاسبه شده است؟",
    answer:
      "کافیست تاریخ ورود و خروج و تعداد مهمانان را مشخص کنید تا اتاق‌های موجود نمایش داده شوند. پس از انتخاب اتاق، با ورود به حساب کاربری و پرداخت آنلاین، رزرو شما نهایی می‌شود.",
  },
];
function FaqRooms() {
  return (
    <div className="w-[924px] min-h-[368px] max-h-[800px]  bg-[#E6F4F7] flex justify-between gap-6 mr-8">
      <div className="flex flex-col justify-center  align-middle items-center ">
        <MiniAccordionList items={MiniAccordion} />
      </div>
    </div>
  );
}

export default FaqRooms;
