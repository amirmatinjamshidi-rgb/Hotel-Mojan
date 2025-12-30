import { Calendar } from "lucide-react";
import React from "react";

const UserPanelGeneralities = () => {
  return (
    <div className="w-[70%] h-[116px] flex flex-col gap-6">
      <div className="flex flex-row items-center">
        <div className="w-2 h-2 bg-secondary rounded-[100%]"></div>
        <h1>نمای کلی</h1>
      </div>
      <div className=" px-10 py-4 border border-primaryBorder rounded-lg">
        <div className="flex flex-row items-center justify-between ">
          <div className="flex flex-col justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <Calendar className="stroke-secondary" />
              <span>رزروها</span>
            </div>
            <div>
              <span className="text-primary">1</span>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <Calendar className="stroke-secondary" />
              <span>رزروها</span>
            </div>
            <div>
              <span className="text-primary">1</span>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <Calendar className="stroke-secondary" />
              <span>رزروها</span>
            </div>
            <div>
              <span className="text-primary">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanelGeneralities;
