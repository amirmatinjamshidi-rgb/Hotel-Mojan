"use client";

import dynamic from "next/dynamic";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Circle, Star } from "lucide-react";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";

const FrequantQuestions = dynamic(
  () => import("@/Features/components/RoomCard/FrequantQuestions"),
  { ssr: false }
);
const RoomAbout = dynamic(
  () => import("@/Features/components/RoomCard/RoomAbout"),
  { ssr: false }
);
const SimilarRooms = dynamic(
  () => import("@/Features/components/RoomCard/SimilarRooms"),
  { ssr: false }
);
const ReservationRulesComponent = dynamic(
  () => import("@/Features/components/rules/ReservationRulesComponent"),
  { ssr: false }
);
const GallerySection = dynamic(
  () => import("@/Features/components/RoomCard/GallerySection"),
  { ssr: false }
);
const NavigateRoomCard = dynamic(
  () => import("@/Features/components/RoomCard/Navigate"),
  { ssr: false }
);
const FaqRooms = dynamic(
  () => import("@/Features/components/RoomCard/FaqRooms"),
  { ssr: false }
);
const SideBarBox = dynamic(
  () => import("@/Features/components/rooms/sideBarBox"),
  { ssr: false }
);

const items = [
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
    head: "امنیت و مسئولیت‌ها",
    rules: [
      "لطفاً هنگام خروج از اتاق، درب را قفل کرده و کارت کلید را همراه خود داشته باشید.",
      "استفاده از وسایل برقی پرمصرف مانند اتو یا اجاق در اتاق مجاز نیست.",
    ],
  },
];
export default function Page() {
  return (
    <main dir="rtl" className="w-full overflow-x-hidden">
      <section className="max-w-[1440px] mx-auto px-4 lg:px-8 mt-6 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Breadcrumbs
            separator={<NavigateBeforeOutlinedIcon fontSize="small" />}
          >
            <Link
              className="text-textOnText hover:text-primary"
              underline="hover"
              href="/Home"
            >
              خانه
            </Link>
            <Link
              className="hover:text-primary"
              underline="hover"
              href="/rules"
            >
              اتاق‌ها
            </Link>
            <Typography className="text-primary">
              اتاق دوتخته نخل اکونومی
            </Typography>
          </Breadcrumbs>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <h1 className="flex items-center gap-2">
              <Circle
                className="stroke-secondary bg-secondary rounded-full"
                size={15}
              />
              اتاق دو‌تخته نخل اکونومی
            </h1>

            <div className="flex flex-wrap gap-6 text-sm">
              <span>2 تخت دونفره</span>
              <span>17 نظر</span>
              <span className="flex items-center gap-1">
                <Star className="stroke-secondary fill-secondary" size={16} />
                4.8 امتیاز کاربران
              </span>
              <span>2.500.000 تومان برای هر شب</span>
            </div>
          </div>
        </div>

        <section className="w-screen">
          <GallerySection />
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10 items-start">
          <div className="flex flex-col gap-14">
            <NavigateRoomCard />
            <div id="امکانات اتاق">
              {" "}
              <RoomAbout />
            </div>
            <div id="درباره اتاق">
              <FrequantQuestions />
            </div>
            <div id="قوانین و مقررات">
              {" "}
              <ReservationRulesComponent items={items} />
            </div>
            <div id="اتاق‌‌های مشابه">
              <SimilarRooms />
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="flex items-center gap-2">
                <Circle
                  size={15}
                  className="bg-secondary rounded-full stroke-secondary"
                />
                سوالات متداول
              </h1>
              <div id="پرسش‌‌های متداول">
                <FaqRooms />
              </div>
            </div>
          </div>
          <aside className="lg:sticky lg:top-24">
            <SideBarBox />
          </aside>
        </div>
      </section>
    </main>
  );
}
