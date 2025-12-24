import React from "react";
import CustomSearchInput from "@/Features/components/UserPanel/SearchInput";
import CustomFilterByUser from "@/Features/components/UserPanel/CutsomFilterByUser";

const item = ["جستجو بر اساس شماره تراکنش"];
const filterItems = [
  { id: 1, name: "پرداخت موفق" },
  { id: 2, name: "پرداخت ناموفق" },
];

function Page() {
  return (
    <div className="w-full px-6 lg:pr-72 py-10 mx-auto">
      <div className="flex flex-row justify-between items-end gap-4 w-full">
        <div className="flex-1 max-w-[499px]">
          <CustomSearchInput items={item} />
        </div>

        <div className="shrink-0">
          <CustomFilterByUser items={filterItems} />
        </div>
      </div>
    </div>
  );
}

export default Page;
