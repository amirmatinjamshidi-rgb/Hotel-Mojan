export type FakeUserType = {
  id: string;
  name: string;
  phone: string;
  avatar: string;
  otp: string;
  password: string;
};

export const fakeUsers: FakeUserType[] = [
  {
    id: "1",
    name: "امیر خرم‌دل اول",
    phone: "09912327476",
    password: "@Amir1384",
    otp: "111111",
    avatar: "/member1.png",
  },
  {
    id: "2",
    name: "امیرمتین جمشیدی",
    phone: "09120742295",
    password: "@Matin1385",
    otp: "111111",
    avatar: "/member2.png",
  },
  {
    id: "3",
    name: "ستایش کفیلی",
    phone: "09195663562",
    password: "setafili8831",
    otp: "111111",
    avatar: "/member3.png",
  },
  {
    id: "4",
    name: "کاربر مهمان",
    phone: "09111111111",
    password: "adminadmin",
    otp: "111111",
    avatar: "/member3.png",
  },
];
