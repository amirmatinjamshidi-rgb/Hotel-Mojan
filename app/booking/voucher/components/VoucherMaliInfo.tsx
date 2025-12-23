import React from "react";
import { formatFaNumber } from "@/utils/formatNumber";
import { formatPrice } from "@/utils/price";

type SooratHesab = {
  totalPrice: string;
  codePeigiri: string;
  status: boolean;
};

const Mali: SooratHesab = {
  totalPrice: `${formatFaNumber(3299382938)}`,
  codePeigiri: `${formatPrice(398438)}`,
  status: true,
};

const VoucherMaliInfo = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center ">
        <div className="rounded-[100px] bg-secondary w-2 h-2"></div>
        <div>
          <span> اطلاعات مالی</span>
        </div>
      </div>
      <div className="border border-primaryBorder rounded-lg overflow-hidden">
        <table className="w-full text-[15px] sm:text-sm border border-collapse">
          <thead className="bg-primaryThead">
            <tr>
              <th className="px-3 py-5 border-l border-[#6C757D80] ">
                مبلغ کل رزرو
              </th>
              <th className="px-3 py-5 border-l border-[#6C757D80] ">
                کد پیگیری پرداخت
              </th>
              <th className="px-3 py-5  border-[#6C757D80] ">وضعیت پرداخت</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="px-3 py-6.5 border-l border-[#6C757D80] text-center ">
                {Mali.totalPrice}
              </td>
              <td className="px-3 py-6.5 border-l border-[#6C757D80] text-center">
                {Mali.codePeigiri}
              </td>
              <td className="px-3 py-6.5   text-center ">
                {Mali.status ? (
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

export default VoucherMaliInfo;
