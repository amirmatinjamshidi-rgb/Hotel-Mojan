import React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };
type roomOptions = {
  id: number;
  name: string;
};
const roomOptions = [
  { id: 1, name: "اتاق استاندارد" },
  { id: 2, name: "اتاق دبل" },
  { id: 3, name: "اتاق با منظره دریا" },
  { id: 4, name: "اتاق اقتصادی" },
  { id: 5, name: "اتاق خانوادگی" },
  { id: 6, name: "سوئیت جونیور" },
  { id: 7, name: "سوئیت کینگ ساحلی" },
];
function RoomItems() {
  return (
    <div className="flex gap-4 flex-col ">
      <h4 dir="rtl" className="font-bold">
        {" "}
        نوع اتاق:
      </h4>
      {roomOptions.map((cat) => (
        <div key={cat.id} className="flex gap-1">
          <div className="flex items-center gap-4 ">
            <Checkbox {...label} />
            {cat.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoomItems;
