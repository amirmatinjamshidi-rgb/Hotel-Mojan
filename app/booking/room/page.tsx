import FrequantQuestions from "@/Features/components/RoomCard/FrequantQuestions";
import RoomAbout from "@/Features/components/RoomCard/RoomAbout";
import SimilarRooms from "@/Features/components/RoomCard/SimilarRooms";
import ReservationRulesComponent from "@/Features/components/rules/ReservationRulesComponent";
import GallerySection from "@/Features/components/RoomCard/GallerySection";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Circle, Star } from "lucide-react";
import FaqRooms from "@/Features/components/RoomCard/FaqRooms";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import { formatFaNumber } from "@/Features/utils/formatNumber";
import { formatPrice } from "@/Features/utils/price";
import NavigateRoomCard from "@/Features/components/RoomCard/Navigate";
function page() {
  return (
    <div className="">
      <div className="p-16 w-[265px]" role="presentation">
        <Breadcrumbs
          separator={<NavigateBeforeOutlinedIcon fontSize="small" />}
          aria-label="breadcrumb"
          className="w-[265px]"
        >
          <Link
            className="text-textOnText hover:text-primary"
            underline="hover"
            href="/Home"
          >
            خانه
          </Link>
          <Link className="hover:text-primary" underline="hover" href="/rules">
            اتاق‌ها
          </Link>
          <Typography className=" text-primary">
            اتاق دوتخته نخل اکونومی
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="h-10 flex justify-between items-center p-4">
        <h1 className="flex items-center gap-2">
          <Circle
            className="stroke-secondary bg-secondary rounded-full"
            size={15}
          />
          اتاق دو‌تخته نخل اکونومی 
        </h1>

        <div className="flex gap-8">
          <span>{formatFaNumber(2)} تخت دونفره</span>
          <span>{formatFaNumber(17)} نظر</span>
          <span className="flex">
            <Star className=" stroke-secondary fill-secondary" />
            4.8 امتیاز کاربران
          </span>
          <span>{formatPrice(250000000)} برای هر شب</span>
        </div>
      </div>
      <div className="flex justify-between flex-col gap-16 align-middle p-16">
        <GallerySection />
        <NavigateRoomCard />
        <div id="امکانات اتاق">
          {" "}
          <FrequantQuestions />
        </div>
        <div id="درباره اتاق">
          <RoomAbout />
        </div>
        <div id="قوانین و مقررات">
          <ReservationRulesComponent />
        </div>
        <div id="اتاق‌‌های مشابه">
          {" "}
          <SimilarRooms />
        </div>
        <div className=" flex flex-col gap-6">
          <h1 className="flex items-center gap-2 mr-8 ">
            <Circle
              size={15}
              className="bg-secondary rounded-full stroke-secondary"
            />
            سوالات متداول
          </h1>
          <div id="پرسش‌‌های متداول">
            <FaqRooms />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
