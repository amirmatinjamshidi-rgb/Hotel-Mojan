import { Calendar } from "lucide-react";
import React from "react";

const UserPanelComingReservation = () => {
  return (
    <div className="w-[70%] flex flex-col gap-6 ">
      <div className="flex flex-row items-center">
        <div className="w-2 h-2 bg-secondary rounded-[100%]"></div>
        <h1> رزرو آتی</h1>
      </div>
      <div className="w-full h-[211px] p-6 border border-primaryBorder rounded-lg flex flex-col justify-between">
        <div className="flex flex-row justify-between items-center">
          <span>سوییت ساحلی</span>
          <span>رو به دریا &gt;</span>
        </div>
        <div className="flex flex-row justify-between items-center h-25 w-full py-6 px-8 bg-primaryBG rounded-lg">
          <div>
            <div className="flex flex-row gap-1 items-center">
              <Calendar className="w-4 h-4 stroke-textPrimary" />
              <span className="text-textPrimary"> سلام</span>
            </div>
            <div>
              <span>سلام</span>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-1 items-center">
              <Calendar className="w-4 h-4 stroke-textPrimary" />
              <span className="text-textPrimary"> سلام</span>
            </div>
            <div>
              <span>سلام</span>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-1 items-center">
              <Calendar className="w-4 h-4 stroke-textPrimary" />
              <span className="text-textPrimary"> سلام</span>
            </div>
            <div>
              <span>سلام</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanelComingReservation;
