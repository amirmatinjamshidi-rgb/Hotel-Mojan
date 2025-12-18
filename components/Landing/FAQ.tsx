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
function FAQ() {
  return (
    <div className="w-full h-[480px]  bg-[#E6F4F7] flex justify-between gap-6">
      <div className="w-[736px]  h-[130px] flex flex-col align-middle mt-40 mr-18 justify-between items-start gap-6">
        <h3 className="flex text-2xl">
          سؤالات متداول درباره اقامت در
          <span className="text-primary ">هتل ساحلی موجان</span>
        </h3>
        <div>
          {" "}
          <p className="max-w-[420px] text-lg">
            اگر سؤالی دارید، احتمالاً پاسخ آن همین‌جاست.
          </p>
          <p className="w-[530px]">
            تیم پشتیبانی موجان همیشه آماده پاسخ‌گویی به شماست تا رزروی مطمئن و
            آسان داشته باشید
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center w-[760px] h-[272px] align-middle items-center ml-26 mt-26">
        <MiniAccordionList items={MiniAccordion} />
      </div>
    </div>
  );
}

export default FAQ;
