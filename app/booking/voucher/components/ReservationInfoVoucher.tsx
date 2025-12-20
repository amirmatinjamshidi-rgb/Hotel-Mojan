import React from "react";

type ReservationVoucher = {
  otagh: string;
  checkIn: string;
  checkOut: string;
  stayDays: string;
  status: boolean;
};

const otaghReservation: ReservationVoucher = {
  otagh: "دبل رو به دریا",
  checkIn: "1404/04/04",
  checkOut: "1404/04/04",
  stayDays: "4 روز",
  status: false,
};

const ReservationInfoVoucher = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center ">
        <div className="rounded-[100px] bg-secondary w-2 h-2"></div>
        <div>
          <span>اطلاعات رزرو </span>
        </div>
      </div>
      <div className="border border-primaryBorder rounded-lg overflow-hidden">
        <table className="w-full text-[15px] sm:text-sm border border-collapse">
          <thead className="bg-primaryThead">
            <tr>
              <th className="px-3 py-5 border-l border-[#6C757D80] ">اتاق</th>
              <th className="px-3 py-5 border-l border-[#6C757D80] ">
                تاریخ ورود
              </th>
              <th className="px-3 py-5 border-l border-[#6C757D80] ">
                تاریخ خروج
              </th>
              <th className="px-3 py-5 border-l  border-[#6C757D80] ">
                تعداد شب
              </th>
              <th className="px-3 py-5  border-[#6C757D80] ">وضعیت رزرو</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="px-3 py-6.5 border-l border-[#6C757D80] text-center ">
                {otaghReservation.otagh}
              </td>
              <td className="px-3 py-6.5 border-l border-[#6C757D80] text-center">
                {otaghReservation.checkIn}
              </td>
              <td className="px-3 py-6.5 border-l border-[#6C757D80] text-center">
                {otaghReservation.checkOut}
              </td>
              <td className="px-3 py-6.5 border-l border-[#6C757D80] text-center ">
                {otaghReservation.stayDays}
              </td>
              <td className="px-3 py-6.5   text-center ">
                {otaghReservation.status ? (
                  <span className="text-success"> تایید شده</span>
                ) : (
                  <span className="text-error"> رد شده</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationInfoVoucher;
