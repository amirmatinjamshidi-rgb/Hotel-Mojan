import { Calendar1 } from "lucide-react";

import React from "react";

type RecentReservations = {
  id: number;
  otagh: string;
  checkIn: string;
  checkOut: string;
  price: string;
  status: boolean;
  quantity: string;
};

const RecentlyReserved: RecentReservations[] = [
  {
    id: 1,
    otagh: "دبل رو به دریا",
    checkIn: "1404/04/04",
    checkOut: "1404/04/04",
    price: "4,000,000 تومان",
    status: false,
    quantity: "2 مهمان",
  },
  {
    id: 2,
    otagh: "دبل رو به دریا",
    checkIn: "1404/04/04",
    checkOut: "1404/04/04",
    price: "4,000,000 تومان",
    status: false,
    quantity: "2 مهمان",
  },
  {
    id: 3,
    otagh: "دبل رو به دریا",
    checkIn: "1404/04/04",
    checkOut: "1404/04/04",
    price: "4,000,000 تومان",
    status: false,
    quantity: "2 مهمان",
  },
  {
    id: 4,
    otagh: "دبل رو به دریا",
    checkIn: "1404/04/04",
    checkOut: "1404/04/04",
    price: "4,000,000 تومان",
    status: true,
    quantity: "2 مهمان",
  },
  {
    id: 5,
    otagh: "دبل رو به دریا",
    checkIn: "1404/04/04",
    checkOut: "1404/04/04",
    price: "4,000,000 تومان",
    status: true,
    quantity: "2 مهمان",
  },
];

const UserPanelRecentReservations = () => {
  return (
    <div className="w-[70%] flex flex-col gap-6 ">
      <div className="flex flex-row items-center justify-between">
        <div >
          <div className="w-2 h-2 bg-secondary rounded-[100%]"></div>
          <h1>رزروهای اخیر</h1>
        </div>
        <div>
          <span>مشاهده همه &gt;</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {RecentlyReserved.map((otagh) => {
          return (
            <div
              key={otagh.id}
              className=" p-6 border border-primaryBorder rounded-lg flex flex-col justify-between gap-6 text-[20px]">
              <div className="flex flex-row justify-between">
                <div>
                  <span>{otagh.otagh}</span>
                </div>
                <div className="w-[1/5] bg-primaryThead p-1 rounded-lg">
                  <span>
                    {otagh.status ? (
                      <span className="text-primary">پرداخت شده</span>
                    ) : (
                      <span className="text-error">پرداخت نشده</span>
                    )}
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-1 items-center">
                  <Calendar1 className="stroke-textSecondary w-4 h-4" />
                  <span>تاریخ ورود </span>
                </div>
                <div>{otagh.checkIn}</div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-1 items-center">
                  <Calendar1 className="stroke-textSecondary w-4 h-4" />
                  <span>تعداد مهمان</span>
                </div>
                <div>
                    {otagh.checkOut}
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-1 items-center">
                  <Calendar1 className="stroke-textSecondary w-4 h-4" />
                  <span>تعداد مهمان</span>
                </div>
                <div>
                    {otagh.price}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserPanelRecentReservations;
