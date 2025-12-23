import React from "react";
import MiniAccordionList from "@/Features/ui/miniAccordation";

const MiniAccordion = [
  {
    question: "چگونه می‌توانم اتاق رزرو کنم؟",
    answer:
      "کافیست تاریخ ورود و خروج و تعداد مهمانان را مشخص کنید تا اتاق‌های موجود نمایش داده شوند. پس از انتخاب اتاق، با ورود به حساب کاربری و پرداخت آنلاین، رزرو شما نهایی می‌شود.",
  },
  {
    question: "آیا امکان کنسل کردن یا تغییر تاریخ رزرو وجود دارد؟",
    answer:
      "قوانین کنسلی بسته به نوع اتاق و زمان درخواست متفاوت است. شما می‌توانید از طریق پنل کاربری خود درخواست کنسلی را ثبت کنید.",
  },
  {
    question: "آیا صبحانه در هزینه اقامت محاسبه شده است؟",
    answer:
      "بله، تمامی رزروهای هتل ساحلی موجان شامل بوفه صبحانه رایگان برای مهمانان مقیم می‌باشد.",
  },
];
function FAQ() {
  return (
    <div className="w-full min-h-[480px] h-auto py-12 lg:py-0 bg-[#E6F4F7] rounded-3xl flex flex-col lg:flex-row justify-between items-center gap-8 px-6 lg:px-16 overflow-hidden">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-6 text-right">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
          سؤالات متداول درباره اقامت در
          <br className="hidden lg:block" />
          <span className="text-primary "> هتل ساحلی موجان</span>
        </h3>
        <div className="space-y-4">
          <p className="max-w-[420px] text-base sm:text-lg font-medium">
            اگر سؤالی دارید، احتمالاً پاسخ آن همین‌جاست.
          </p>
          <p className="max-w-[530px] text-textSecondary text-sm sm:text-base leading-relaxed">
            تیم پشتیبانی موجان همیشه آماده پاسخ‌گویی به شماست تا رزروی مطمئن و
            آسان داشته باشید.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <MiniAccordionList items={MiniAccordion} />
      </div>
    </div>
  );
}

export default FAQ;
