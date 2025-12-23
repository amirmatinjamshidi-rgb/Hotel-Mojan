import ReservationInfoTable from "@/Features/components/Reservation/ReservationInfoTable";
import ListPagination from "../UserPanel/components/ListPagination";

const page = () => {
  return (
    <div>
      <ReservationInfoTable />
      <ListPagination />
    </div>
  );
};

export default page;
