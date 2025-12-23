import React from "react";
import MosaferInfoVoucher from "../../../Features/components/Voucher/MosaferInfoVoucher";
import ReservationInfoVoucher from "../../../Features/components/Voucher/ReservationInfoVoucher";
import VoucherMaliInfo from "../../../Features/components/Voucher/VoucherMaliInfo";
import ReservationInfoTable from "@/Features/components/Reservation/ReservationInfoTable";

import VoucherRules from "../../../Features/components/Voucher/VoucherRules";
import VoucherHeader from "../../../Features/components/Voucher/VoucherHeader";
import VoucherFooter from "../../../Features/components/Voucher/VoucherFooter";

function page() {
  return (
    <div className="px-10 pt-10 flex flex-col gap-8">
      <VoucherHeader />
      <MosaferInfoVoucher />
      <ReservationInfoVoucher />
      <VoucherMaliInfo />
      <ReservationInfoTable showButton={false} className="w-full" />
      <VoucherRules />
      <VoucherFooter />
    </div>
  );
}

export default page;
