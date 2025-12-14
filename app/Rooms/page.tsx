import FrequantQuestions from "@/components/RoomCard/FrequantQuestions";
import RoomAbout from "@/components/RoomCard/RoomAbout";
import SimilarRooms from "@/components/RoomCard/SimilarRooms";
import ReservationRulesComponent from "@/components/rules/ReservationRulesComponent";
function page() {
  return (
    <div className="">
      <div className="flex justify-between flex-col gap-16 align-middle p-16">
        {" "}
        <RoomAbout />
        <FrequantQuestions />
        <ReservationRulesComponent />
        <SimilarRooms />
      </div>
    </div>
  );
}

export default page;
