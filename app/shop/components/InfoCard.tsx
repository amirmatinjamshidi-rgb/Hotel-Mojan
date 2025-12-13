import Image from "next/image";
import React from "react";
import Dummy from "@/public/Dummy.jpg";
import { Star } from "lucide-react";
import Divider from "@mui/material/Divider";
import { Calendar } from "lucide-react";
const timers = [
  { id: 1, name: "تاریخ و ساعت ورود", date: "1404/08/21", hour: "14:00" },
  { id: 2, name: "تاریخ و ساعت خروج", date: "1404/08/24", hour: "13:00" },
];
const InfoCard = () => {
  return (
    <div className="w-[984px] h-[158px] border rounded-lg flex flex-row border-primaryBorder hover:shadow-md transition ease-in duration-200">
      <div className="py-4 px-6 flex justify-center align-middle flex-row">
        <div className="w-[935px] h-[126px] flex gap-18">
          <div>
            <Image
              src={Dummy}
              width={193}
              height={96}
              alt="dummy"
              className="rounded-md w-[193px] h-[126px]"
            />
          </div>
          <div className="flex flex-col gap-6 mt-6">
            <h1>اتاق دو‌تخته نخل اکونومی </h1>
            <div className="flex">
              {" "}
              <Star color="secondary" className="fill-secondary" />
              <p>4.9 امتیاز کاربران</p>
            </div>
          </div>
          <div>
            {" "}
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{
                my: 0,
              }}
            />
          </div>
          <div className="flex flex-row gap-12">
            {timers.map((cat) => (
              <div
                key={cat.id}
                className="flex flex-col justify-center items-center align-middle"
              >
                {" "}
                <div className="flex flex-row-reverse  gap-2 ">
                  {" "}
                  <h3 className="flex text-textSecondary mb-4 flex-row ">
                    {cat.name}
                  </h3>
                  <span>
                    {" "}
                    <Calendar
                      className="stroke-textSecondary mt-1"
                      strokeWidth={1}
                    />{" "}
                  </span>
                </div>
                <span>{cat.date}</span>
                <span>{cat.hour}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
