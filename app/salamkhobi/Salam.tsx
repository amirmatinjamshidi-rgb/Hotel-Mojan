// app/page.tsx 'use client';

import {
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  Avatar,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import StarIcon from "@mui/icons-material/Star";

const Salam = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      {" "}
      <div className="w-full max-w-5xl space-y-6">
        {/* Room Info */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <Typography className="text-gray-500">
                  تاریخ و ساعت ورود
                </Typography>
                <Typography className="font-medium">
                  1404/08/21 - 14:00
                </Typography>
              </div>
              <div>
                <Typography className="text-gray-500">
                  تاریخ و ساعت خروج
                </Typography>
                <Typography className="font-medium">
                  1404/08/24 - 15:00
                </Typography>
              </div>
            </div>

            <Divider
              orientation="vertical"
              flexItem
              className="hidden md:block"
            />

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="text-right">
                <Typography className="font-semibold">
                  اتاق دو تخته نخل اکونومی
                </Typography>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <StarIcon className="text-yellow-400" fontSize="small" />
                  <span>4.8 امتیاز کاربران</span>
                </div>
              </div>
              <Avatar
                variant="rounded"
                className="w-full sm:w-28 h-24 sm:h-20 "
                src="/room.jpg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Passenger Info */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <Typography className="font-semibold">مشخصات مسافران</Typography>
              <Button
                variant="outlined"
                startIcon={<EditOutlinedIcon />}
                className="rounded-xl">
                ویرایش مسافران
              </Button>
            </div>

            <Divider />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>اطلاعات سرپرست: نگین هاشمی</div>
              <div>شماره تماس: 09123456789</div>
              <div>ایمیل: negin.hashemi@gmail.com</div>
            </div>

            <Divider />

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border-separate border-spacing-y-2">
                <thead className="text-gray-500">
                  <tr>
                    <th className="text-right px-1 sm:px-2">نوع مسافر</th>
                    <th className="text-right px-1 sm:px-2">نام مسافر</th>
                    <th className="text-right px-1 sm:px-2">کدملی</th>
                    <th className="text-right px-1 sm:px-2">جنسیت</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3].map((i) => (
                    <tr key={i} className="bg-gray-100 rounded-xl">
                      <td className="px-1 sm:px-2 py-3">بزرگسال</td>
                      <td className="px-1 sm:px-2">نگین هاشمی</td>
                      <td className="px-1 sm:px-2">0123456789</td>
                      <td className="px-1 sm:px-2">زن</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

/* Notes:

1. Tailwind v4 assumed (RTL via plugin or dir="rtl" on html)


2. MUI theme + RTL can be added in layout.tsx


3. Colors & spacing adjustable */
export default Salam;
