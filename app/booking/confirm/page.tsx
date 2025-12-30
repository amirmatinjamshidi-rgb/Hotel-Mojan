import React from "react";
import dynamic from "next/dynamic";

const ReservationInfoTable = dynamic(
  () => import("@/Features/components/Reservation/ReservationInfoTable")
);
const ReservationRulesComponent = dynamic(
  () => import("@/Features/components/rules/ReservationRulesComponent")
);
const RoomCard = dynamic(() => import("@/Features/components/shop/RoomCard"));
const Minisidebar = dynamic(
  () => import("@/Features/components/confirm/minisidebar")
);
const item = [
  {
    id: 1,
    head: "کنسلی و تغییر رزرو",
    rules: [
      "لغو رزرو تا ۴۸ ساعت قبل از تاریخ ورود، بدون جریمه انجام می‌شود.",
      "در صورت لغو کمتر از ۴۸ ساعت مانده به ورود، مبلغ یک شب اقامت کسر خواهد شد.",
    ],
  },
  {
    id: 2,
    head: "ظرفیت اتاق",
    rules: [
      "هر اتاق برای تعداد مشخصی از مهمانان طراحی شده است. اقامت نفرات اضافه فقط با هماهنگی قبلی و پرداخت هزینه‌ی مربوط امکان‌پذیر است.",
    ],
  },
  {
    id: 3,
    head: "خسارت به اموال هتل",
    rules: [
      "در صورت وارد شدن خسارت به اموال یا تجهیزات اتاق، هزینه‌ی تعمیر یا جایگزینی بر عهده‌ی مهمان خواهد بود.",
    ],
  },
  {
    id: 4,
    head: "هزینه‌های جانبی",
    rules: [
      "هزینه اقامت کودک کوچک‌تر از دو سال، در صورت عدم استفاده از سرویس خواب اضافه، رایگان است.",
      "هزینه اقامت کودک دو تا هفت سال، در صورت عدم استفاده از سرویس خواب اضافه، نیم‌بهاست.",
      "هزینه اقامت کودک بزرگ‌تر از هشت سال به صورت یک فرد بزرگسال، محاسبه می‌شود.",

      "تمام مسافران اعم از کودکان و بزرگسالان در صورت استفاده از سرویس خواب اضافه، مشمول پرداخت مبلغ کامل تخت اضافه هستند و تخفیف قائل نمی‌شود.",
    ],
  },
];
function page() {
  return (
    <main dir="rtl" className="w-full overflow-x-hidden">
      <section className="max-w-[1440px] mx-auto px-4 lg:px-8 mt-6 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex flex-col w-full lg:flex-1 gap-8 *:w-full">
            <RoomCard />
            <ReservationInfoTable />
            <ReservationRulesComponent items={item} />
          </div>
          <aside className="w-full lg:w-[350px] xl:w-[400px] lg:sticky lg:top-4">
            <div className="[&>div]:lg:w-full flex justify-center">
              <Minisidebar />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
export default page;
