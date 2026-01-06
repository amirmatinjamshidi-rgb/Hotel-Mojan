import React from "react";
import CustomSearchInput from "@/Features/components/UserPanel/SearchInput";
import CustomFilterByUser from "@/Features/components/UserPanel/CutsomFilterByUser";
import UserStatics from "@/Features/components/UserPanel/UserStatics";
import ListPagination from "@/Features/components/UserPanel/ListPagination";
import ReservationInfoTable from "@/Features/components/Tables/ReservationInfoTable";
import { CalendarDays } from "lucide-react";
import { Circle } from "lucide-react";
const item = ["جستجو بر اساس شماره تراکنش"];
const filterItems = [
  { id: 1, name: "رزروهای فعال" },
  { id: 2, name: "رزروهای گذشته" },
  { id: 3, name: "رزروهای کنسل شده‌" },
];
const Statics = [
  { id: 1, name: "رزروهای امروز", icon: <CalendarDays />, number: 25 },
  { id: 2, name: "اتاق‌های خالی", icon: <CalendarDays />, number: 5 },
  { id: 3, name: "اتاق‌های پر", icon: <CalendarDays />, number: 55 },
];
function page() {
  return (
    <main className="flex flex-col gap-4 w-full max-w-[1016px]">
      <UserStatics items={Statics} />
      <h1 className="flex items-center gap-2">
        <Circle
          className="stroke-secondary bg-secondary rounded-full"
          size={15}
        />
        لیست رزروها
      </h1>
      <div className=" flex shrink-0 justify-between">
        <CustomSearchInput items={item} />
        <CustomFilterByUser items={filterItems} />
      </div>
      <ReservationInfoTable showButton={false} />
      <ListPagination />
    </main>
  );
}

export default page;
