import Link from "next/link";
import Interance from "@/Features/components/userInfo/interance";
import { Circle } from "lucide-react";
import AdultFirst from "../../../Features/components/userInfo/AdultFirst";
import AdultSec from "../../../Features/components/userInfo/AdultSec";
import Child from "../../../Features/components/userInfo/Child";
import RoomReservationInfo from "../../../Features/components/rooms/RoomReservationInfo";
import RoomCard from "@/Features/components/shop/RoomCard";
function page() {
  return (
    <main className="w-full max-w-[1320px] mx-auto px-4" dir="rtl">
      <section className="flex flex-col gap-10">
        <div className="flex justify-between items-center mt-4">
          <h1 className="flex items-center gap-2 text-xl font-bold">
            <Circle
              className="stroke-secondary bg-secondary rounded-full"
              size={14}
            />
            اتاق اول
          </h1>
          <Link
            href="/booking/rooms"
            className="px-4 py-2 border rounded-2xl border-primaryActive text-primary"
          >
            تغییر اتاق
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex flex-col w-full lg:flex-1 gap-8 *:w-full">
            <RoomCard /> <AdultFirst />
            <AdultSec />
            <Child />
            <Interance />
          </div>

          <div className="w-full lg:w-[350px] xl:w-[400px] lg:sticky lg:top-4">
            <div className="[&>div]:lg:w-full">
              <RoomReservationInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default page;
