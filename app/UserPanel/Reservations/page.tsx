import React from "react";
import CustomSearchInput from "../components/SearchInput";
import CustomFilterByUser from "../components/CutsomFilterByUser";
const item = ["جستجو بر اساس شماره تراکنش"];
const filterItems = [
  { id: 1, name: "پرداخت موفق" },
  { id: 2, name: "پرداخت ناموفق" },
];
function page() {
  return (
    <div>
      <div className=" flex flex-row align-middle justify-between items-center">
        <CustomFilterByUser items={filterItems} />
        <CustomSearchInput items={item} />
      </div>
    </div>
  );
}

export default page;
