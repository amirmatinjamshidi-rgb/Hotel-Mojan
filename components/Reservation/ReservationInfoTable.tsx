import { Button } from "@mui/material";
import { Edit } from "lucide-react";

type Passenger = {
  id: number;
  name: string;
  ageType: "بزرگسال" | "کودک";
  sex: "مرد" | "زن";
  codeMelli: string;
};

type RoomReservation = {
  id: number;

  sarparast: string;
  phoneNumber: string;
  email: string;
  passengers: Passenger[];
};
interface roomTableInfo {
  room: RoomReservation;
  passenger: Passenger;
  index: Passenger;
}
const roomTableInfo: RoomReservation[] = [
  {
    id: 1,

    sarparast: "نگین هاشمی",
    phoneNumber: "09123456789",
    email: "negin@gmail.com",

    passengers: [
      {
        id: 1,
        name: "علی هاشمی",
        ageType: "بزرگسال",
        sex: "مرد",
        codeMelli: "1234567890",
      },
      {
        id: 2,
        name: "سارا هاشمی",
        ageType: "کودک",
        sex: "زن",
        codeMelli: "0987654321",
      },
      {
        id: 3,
        name: "سارا هاشمی",
        ageType: "کودک",
        sex: "زن",
        codeMelli: "0987654321",
      },
    ],
  },
  {
    id: 2,

    sarparast: "محمد رضایی",
    phoneNumber: "09351234567",
    email: "rezaei@gmail.com",
    passengers: [
      {
        id: 1,
        name: "محمد رضایی",
        ageType: "بزرگسال",
        sex: "مرد",
        codeMelli: "1122334455",
      },
    ],
  },
];

const ReservationInfoTable = ({ showButton = true, className ="" }) => {
  return (
    <div className=" bg-primaryBG text-textPrimary">
      {roomTableInfo.map((room) => {
        return (
          <div className={`w-[70%]  flex flex-col gap-10 ${className}`} key={room.id}>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-2 items-center ">
                <div className="rounded-[100px] bg-secondary w-2 h-2"></div>
                <div>
                  <span>مشخصات مسافران</span>
                </div>
              </div>
              <div>
                {showButton && (
                  <Button
                    variant="outlined"
                    startIcon={<Edit />}
                    className="rounded-xl">
                    ویرایش مسافران
                  </Button>
                )}
              </div>
            </div>

            <div className="w-full bg-white p-6">
              <div className="w-full flex flex-col gap-6">
                <div className="flex flex-row items-center justify-between gap-4 text-[15px] ">
                  <div>
                    <span className="font-bold">
                      اطلاعات سرپرست:
                      <span className="font-normal">{room.sarparast}</span>
                    </span>
                  </div>
                  <div>
                    <span className="font-bold">
                      شماره تماس:
                      <span className="font-normal">{room.phoneNumber}</span>
                    </span>
                  </div>
                  <div>
                    <span className="font-bold">
                      ایمیل: <span className="font-normal">{room.email}</span>
                    </span>
                  </div>

                  <div>
                    <span className="font-bold">
                      تعداد مسافران:{" "}
                      <span className="font-normal">
                        {room.passengers.length} نفر
                      </span>
                    </span>
                  </div>
                </div>

                <div className="border border-primaryBorder rounded-lg overflow-hidden">
                  <table className="w-full text-[15px] sm:text-sm border border-collapse">
                    <thead className="bg-primaryThead">
                      <tr>
                        <th className="px-10 py-3.5 border-b border-primaryBorder ">
                          نوع مسافر
                        </th>
                        <th className="px-10 py-3.5 border-b border-primaryBorder ">
                          نام مسافر
                        </th>
                        <th className="px-10 py-3.5 border-b border-primaryBorder ">
                          کدملی
                        </th>
                        <th className="px-10 py-3.5 border-b border-primaryBorder ">
                          جنسیت
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {room.passengers.map((passenger, index) => {
                        const isEven = index % 2 === 0;

                        return (
                          <tr
                            key={passenger.id}
                            className={isEven ? "bg-zebra1" : "bg-zebra2"}
                          >
                            <td className="px-10 py-3.5 border-b border-primaryBorder text-center ">
                              {passenger.ageType}
                            </td>
                            <td className="px-10 py-3.5 border-b border-primaryBorder text-center">
                              {passenger.name}
                            </td>
                            <td className="px-10 py-3.5 border-b border-primaryBorder text-center">
                              {passenger.codeMelli}
                            </td>
                            <td className="px-10 py-3.5 border-b border-primaryBorder text-center ">
                              {passenger.sex}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReservationInfoTable;
