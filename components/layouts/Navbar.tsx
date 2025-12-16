import Image from "next/image";
import Button from "@/components/ui/button";
import Link from "next/link";
import { User } from "lucide-react";
const navItems = [
  { href: "/", label: "خانه" },
  { href: "/Rooms", label: "اتاق ها" },
  { href: "/Restaurant", label: "رستوران ما" },
  { href: "/About-Us", label: "درباره ما" },
];
function Navbar() {
  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className="transition-all duration-300 ease-out hover:scale-105 focus:scale-105 text-gray-700 mt-4 active:bg-primaryActive"
    >
      {label}
    </Link>
  );
  return (
    <div>
      <nav className="sticky top-0 z-50 ">
        <div className="w-full max-w-[1530px] mx-auto h-16 flex justify-between shadow shadow-gray-400 px-6 text-gray-500 overflow-hidden">
          <div className="flex">
            <Image alt="logo" src="/Logo.png" width={100} height={128} />
          </div>
          <div className="flex justify-center gap-10 text-gray-600">
            {navItems.map(({ href, label }) => (
              <NavLink key={href} href={href} label={label} />
            ))}
          </div>
          <div>
            <Button
              color="white"
              border="blue"
              text="blue"
              size="small"
              className="hidden md:flex rounded-md items-center gap-4 w-[147px] mt-2"
            >
              <User size={25} className="stroke-primary" strokeWidth={3} /> ورود
              I ثبت نام
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
