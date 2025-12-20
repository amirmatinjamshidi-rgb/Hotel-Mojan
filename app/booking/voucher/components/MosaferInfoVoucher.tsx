import React from "react";

type Sarparast = {
  Esm: string;
  membersQuantity: string;
  phoneNumber: string;
  email: string;
};

const sarparast: Sarparast = {
  Esm: "سارا احمدی",
  membersQuantity: "2 بزرگسال و 1 کودک",
  phoneNumber: "09123456789",
  email: "example@email.com",
};

const MosaferInfoVoucher = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center ">
        <div className="rounded-[100px] bg-secondary w-2 h-2"></div>
        <div>
          <span>مشخصات مسافر</span>
        </div>
      </div>
      <div className="border border-primaryBorder rounded-lg overflow-hidden">
        <table className="w-full text-[15px] sm:text-sm border border-collapse">
          <thead className="bg-primaryThead">
            <tr>
              <th className="px-10 py-3.5 border-b border-primaryBorder ">
                نام مهمان
              </th>
              <th className="px-10 py-3.5 border-b border-primaryBorder ">
                تعداد مهمانان
              </th>
              <th className="px-10 py-3.5 border-b border-primaryBorder ">
                شماره تماس
              </th>
              <th className="px-10 py-3.5 border-b border-primaryBorder ">
                ایمیل
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="px-10 py-3.5 border-b border-primaryBorder text-center ">
                {sarparast.Esm}
              </td>
              <td className="px-10 py-3.5 border-b border-primaryBorder text-center">
                {sarparast.membersQuantity}
              </td>
              <td className="px-10 py-3.5 border-b border-primaryBorder text-center">
                {sarparast.phoneNumber}
              </td>
              <td className="px-10 py-3.5 border-b border-primaryBorder text-center ">
                {sarparast.email}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MosaferInfoVoucher;
