import React from "react";
const filterItems = [
  { id: 1, name: "پیش فرض" },
  { id: 2, name: "پیشنهادی" },
  { id: 3, name: "صبحانه" },
  { id: 4, name: "اتاق استاندارد" },
];
function FilterBy() {
  return (
    <div>
      {filterItems.map((cat) => (
        <div key={cat.id}></div>
      ))}
    </div>
  );
}

export default FilterBy;
