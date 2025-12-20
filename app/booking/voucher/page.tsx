import React from "react";
import MosaferInfoVoucher from "./components/MosaferInfoVoucher";
import ReservationInfoVoucher from "./components/ReservationInfoVoucher";
import VoucherMaliInfo from "./components/VoucherMaliInfo";
import ReservationInfoTable from "@/components/Reservation/ReservationInfoTable";

import VoucherRules from "./components/VoucherRules";
import VoucherHeader from "./components/VoucherHeader";
import VoucherFooter from "./components/VoucherFooter";

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
