import Image from "next/image";
import Button from "@/components/ui/button";
import Link from "next/link";
const navItems = [
  { href: "/Home", label: "خانه" },
  { href: "/Rooms", label: "اتاق ها" },
  { href: "/Restaurant", label: "رستوران ما" },
  { href: "/About", label: "درباره ما" },
];
function Navbar() {
  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className="transition-all duration-300 ease-out hover:scale-105 focus:scale-105 text-gray-700 mt-4"
    >
      {label}
    </Link>
  );
  return (
    <div>
      <nav className="sticky top-0 z-50">
        <div className="min-w-screen h-16 flex justify-between shadow shadow-gray-400 pt-2 pr-[60px] pb-2 pl-[60px] text-gray-500  ">
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
              size="medium"
              radius="md"
              className="hidden md:flex items-center gap-4"
            >
              ورود I ثبت نام
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
