import Image from "next/image";
import Button from "@/components/ui/button";
function RoomBanner() {
  return (
    <section className=" h-[200px] w-10/12 bg-[#E6F4F7] flex rounded-2xl">
      <div className="w-1/2 flex flex-col justify-center align-baseline rounded-2xl gap-6 px-16 text-xl ">
        <h1 className="font-bold">
          تجربه ای متفاوت با اقامت در هتل ساحلی موجان
        </h1>
        <span>رزرو سوئیت کینگ ساحلی با ۲۰٪ تخفیف ویژه برای آخر هفته</span>
        <Button
          color="blue2"
          border="blue"
          radius="md"
          size="medium"
          className="text-white w-3/8"
        >
          مشاهده بیشتر
        </Button>
      </div>

      <div className="w-1/2 relative">
        <Image
          src="/img.png"
          alt="Hotel view"
          fill
          className="object-cover rounded-2xl rounded-r-none "
          priority
        />
      </div>
    </section>
  );
}

export default RoomBanner;
