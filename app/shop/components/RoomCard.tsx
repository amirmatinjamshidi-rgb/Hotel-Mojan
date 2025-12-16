import Image from "next/image";
import Dummy from "@/public/Dummy.jpg";
import { Divider } from "@mui/material";

const RoomCard = () => {
  return (
    <div className="w-[912px] h-[202px] border border-primaryBorder hover:shadow-md mt-50 mr-50 py-4 px-6 rounded-lg">
      <div className="border border-yellow-700 w-[864px] h-[170px] flex flex-row gap-8">
        <div>
          <Image
            src={Dummy}
            width={237}
            height={170}
            alt="Dummy"
            className="w-[237px] h-[170px] rounded-lg"
          />
        </div>
        <div className="w-[356px] flex flex-col justify-start gap-4">
          <div>
            <span className="text-[22px] text-textPrimary">
              دو تخته اکونومی
            </span>
          </div>
          <div>
            <span className="text-[13px] text-textPrimary">1 بزرگسال</span>
          </div>
          <div>
            <span className="text-[12px] text-textPrimary">قابل استرداد </span>
          </div>
          <div className="w-[356px] h-10 bg-[#6C757D1A] rounded-lg">
            <div className="flex flex-row justify-between "></div>
          </div>
        </div>
        <div>
          <Divider orientation="vertical" className="text-primaryBorder" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default RoomCard;
