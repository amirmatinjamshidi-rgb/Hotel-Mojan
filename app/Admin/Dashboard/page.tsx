import React from "react";
import Occupancystatistics from "@/Features/Admin/BarChart";
import OccupancyGauge from "@/Features/Admin/progressbar";
import { CalendarDays } from "lucide-react";
import UserStatics from "@/Features/components/UserPanel/UserStatics";
import HotelPerformance, {
  HotelStatic,
} from "@/Features/Admin/HotelPerformance";
import dynamic from "next/dynamic";
const LinearChartMonthly = dynamic(
  () => import("@/Features/Admin/LinearChartMonthly")
);
import LineaChartYearly from "@/Features/Admin/LineaChartYearly";

const items: HotelStatic[] = [
  { id: 1, name: "تمیز", info: 30, type: "empty" },
  { id: 2, name: "کثیف", info: 19, type: "empty" },
  { id: 3, name: "بازبینی‌شده", info: 30, type: "empty" },

  { id: 4, name: "تمیز", info: 90, type: "occupied" },
  { id: 5, name: "کثیف", info: 4, type: "occupied" },
  { id: 6, name: "بازبینی‌شده", info: 60, type: "occupied" },
];
const Statics = [
  { id: 1, name: "رزروهای امروز", icon: <CalendarDays />, number: 25 },
  { id: 2, name: "اتاق‌های خالی", icon: <CalendarDays />, number: 5 },
  { id: 3, name: "اتاق‌های پر", icon: <CalendarDays />, number: 55 },
  { id: 4, name: "تعداد مهمانان حاضر", icon: <CalendarDays />, number: 140 },
  {
    id: 5,
    name: "تعداد کاربران جدید امروز",
    icon: <CalendarDays />,
    number: 23,
  },
  { id: 6, name: "درآمد امروز (تومان)", icon: <CalendarDays />, number: 12 },
];
function page() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Occupancystatistics />
      <OccupancyGauge />
      <HotelPerformance information={items} />
      <LinearChartMonthly />
      <LineaChartYearly />
      <UserStatics items={Statics} />
    </div>
  );
}

export default page;
