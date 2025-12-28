import React from "react";
import dynamic from "next/dynamic";

const Filterbox = dynamic(
  () => import("@/Features/components/rooms/Filterbox")
);
const RoomCard = dynamic(
  () => import("@/Features/components/shop/RoomCard"),
  {}
);
const FilterBy = dynamic(
  () => import("@/Features/components/rooms/FilterBy"),
  {}
);
const RoomBanner = dynamic(
  () => import("@/Features/components/rooms/Banner"),
  {}
);

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
