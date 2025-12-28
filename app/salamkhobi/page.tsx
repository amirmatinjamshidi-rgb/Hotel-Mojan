import ReservationInfoTable from "@/Features/components/Reservation/ReservationInfoTable";
import ListPagination from "@/Features/components/UserPanel/ListPagination";

const page = () => {
  return (
    <div>
      <ReservationInfoTable />
      <ListPagination />
    </div>
  );
};

export default page;
