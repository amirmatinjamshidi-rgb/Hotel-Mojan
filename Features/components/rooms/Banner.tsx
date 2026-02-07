import Image from "next/image";
import Button from "@/Features/ui/button";

function RoomBanner() {
  return (
    <section
      className="
        w-full
        bg-[#E6F4F7]
        rounded-2xl
        flex flex-col lg:flex-row
        overflow-hidden
        lg:h-[200px]
      "
    >
      <div
        className="
          flex flex-col justify-center gap-3
          px-6 py-6
          text-base
          lg:w-1/2 lg:px-16 lg:text-xl
        "
      >
        <h1 className="font-bold">
          تجربه ای متفاوت با اقامت در هتل ساحلی موجان
        </h1>

        <span>رزرو سوئیت کینگ ساحلی با ۲۰٪ تخفیف ویژه برای آخر هفته</span>

        <Button
          color="blue2"
          border="blue"
          radius="none"
          size="small"
          className="text-white lg:w-4/8  w-fit"
        >
          مشاهده بیشتر
        </Button>
      </div>

      <div
        className="
          relative
          w-full h-[180px]
          lg:w-[50%] lg:h-full
        "
      >
        <Image
          src="/img.png"
          alt="Hotel view"
          width={451}
          height={200}
          className="object-cover rounded-2xl lg:rounded-r-none aspect-auto"
          priority={true}
        />
      </div>
    </section>
  );
}

export default RoomBanner;
