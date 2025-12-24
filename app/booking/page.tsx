import React from "react";
import Filterbox from "@/Features/components/rooms/Filterbox";
import RoomCard from "@/Features/components/shop/RoomCard";
import FilterBy from "@/Features/components/rooms/FilterBy";
import RoomBanner from "@/Features/components/rooms/Banner";

function Page() {
  return (
    <main className="w-full flex justify-center ">
      <div
        className="
          w-full
         
          px-6
          py-8
        "
      >
        <div className="flex gap-8 ">
          <Filterbox />

          <section className=" flex flex-col items-start gap-4">
            <div>
              <FilterBy />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <RoomCard />
              <RoomCard />
              <RoomBanner />
              <RoomCard />
              <RoomCard />
              <RoomCard />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Page;
