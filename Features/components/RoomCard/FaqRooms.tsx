import React from "react";
import dynamic from "next/dynamic";
const MiniAccordionList = dynamic(
  () => import("@/Features/ui/miniAccordation"),
  { ssr: false }
);
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
    <div className="w-full max-w-[924px] mx-auto bg-[#E6F4F7] rounded-2xl p-6">
      <MiniAccordionList items={MiniAccordion} />
    </div>
  );
}

export default FaqRooms;
