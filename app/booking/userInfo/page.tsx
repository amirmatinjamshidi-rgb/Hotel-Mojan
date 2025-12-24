import Link from "next/link";
import { Container } from "@mui/material";
import Interance from "@/Features/components/userInfo/interance";
import { Circle } from "lucide-react";
import AdultFirst from "../../../Features/components/userInfo/AdultFirst";
import AdultSec from "../../../Features/components/userInfo/AdultSec";
import Child from "../../../Features/components/userInfo/Child";
import RoomReservationInfo from "../../../Features/components/rooms/RoomReservationInfo";
import RoomCard from "@/Features/components/shop/RoomCard";

function page() {
  return (
    <Container className=" flex flex-col gap-12">
      <section className="flex flex-col align-baseline gap-8">
        <div className="h-10 w-6/8 flex justify-between items-center mt-3">
          <h1 className="flex items-center gap-2 ">
            <Circle
              className="stroke-secondary bg-secondary rounded-full"
              size={15}
            />
            اتاق اول
          </h1>

          <Link
            href="/booking/rooms"
            className="flex p-2 items-center gap-1 border rounded-2xl border-primaryActive text-primary text-lg"
          >
            تغییر اتاق
          </Link>
        </div>
        <RoomCard />
        <AdultFirst />
        <AdultSec />
        <Child />
        <Interance />
        <RoomReservationInfo />
      </section>
    </Container>
  );
}

export default page;
