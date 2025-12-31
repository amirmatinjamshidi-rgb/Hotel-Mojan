import dynamic from "next/dynamic";
import React from "react";

const MosaferInfoVoucher = dynamic(
  () => import("../../../Features/components/Voucher/MosaferInfoVoucher")
);
const ReservationInfoVoucher = dynamic(
  () => import("../../../Features/components/Voucher/ReservationInfoVoucher")
);
const VoucherMaliInfo = dynamic(
  () => import("../../../Features/components/Voucher/VoucherMaliInfo")
);
const ReservationInfoTable = dynamic(
  () => import("@/Features/components/Tables/ReservationInfoTable")
);
const VoucherRules = dynamic(
  () => import("../../../Features/components/Voucher/VoucherRules")
);
const VoucherHeader = dynamic(
  () => import("../../../Features/components/Voucher/VoucherHeader")
);
const VoucherFooter = dynamic(
  () => import("../../../Features/components/Voucher/VoucherFooter")
);

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
