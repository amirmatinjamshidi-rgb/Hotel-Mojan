import React from "react";
import Dummy from "@/public/member1.png";
import Image from "next/image";
import Button from "@/Features/ui/button";

const UserProfile = () => {
  return (
    <div className="w-[70%] flex flex-col gap-5">
      <div className="flex flex-row gap-2 items-center ">
        <div className="rounded-[100px] bg-secondary w-2 h-2"></div>
        <div>
          <span>حساب کاربری</span>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 justify-between items-center">
          <div>
            <Image
              src={Dummy}
              alt="yaroo"
              width={144}
              height={144}
              className="h-36 w-36 rounded-[100%]"
            />
          </div>
          <div>
            <span>سارا محدی</span>
          </div>
          <div>
            <span>sara.mohammadi@gmail.com</span>
          </div>
        </div>

        <div className="grid grid-cols-2 w-full gap-x-4 gap-y-8">
          <div>
            <input
              type="text"
              className="py-2.5 px-4 placeholder:text-textSecondary bg-primaryThead w-full rounded-lg"
              placeholder="نام و نام خانوادگی"
            />
          </div>
          <div>
            <input
              type="email"
              className="py-2.5 px-4 placeholder:text-textSecondary bg-primaryThead w-full rounded-lg"
              placeholder="ایمیل"
            />
          </div>
          <div>
            <input
              type="text"
              className="py-2.5 px-4 placeholder:text-textSecondary bg-primaryThead w-full rounded-lg"
              placeholder="شماره تماس"
            />
          </div>
          <div>
            <input
              type="text"
              className="py-2.5 px-4 placeholder:text-textSecondary bg-primaryThead w-full rounded-lg"
              placeholder="کدملی"
            />
          </div>https://github.com/amirmatinjamshidi-rgb/Hotel-Mojan-Admin-Panel.git
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 ">
        <div className="flex flex-row gap-2 items-center ">
          <div className="rounded-[100px] bg-secondary w-2 h-2"></div>
          <div>
            <span>حساب کاربری</span>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full gap-x-4">
          <div>
            <input
              type="password"
              className="py-2.5 px-4 placeholder:text-textSecondary bg-primaryThead w-full rounded-lg"
              placeholder="رمز عبور"
            />
          </div>
          <div>
            <input
              type="password"
              className="py-2.5 px-4 placeholder:text-textSecondary bg-primaryThead w-full rounded-lg"
              placeholder="تکرار رمز عبور"
            />
          </div>
        </div>
      </div>

      <div className="w-[50%] mx-auto">
        <Button
          type="submit"
          color="orange1"
          size="big"
          className="w-full rounded-lg py-3.5">
          ثبت تغییرات
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
