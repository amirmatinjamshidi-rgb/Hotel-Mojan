"use client";
import Image from "next/image";

function HeroBanner() {
  return (
    <section className="mb-12 min-h-[500px] lg:h-[75vh] xl:h-[688px] rounded-2xl bg-[#E6F4F7] flex flex-col lg:flex-row overflow-hidden">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
          اقامت در آرامش دریا
          <br />
          <span className="text-primary">در هتل ساحلی موجان، </span>
          <span>چابهار</span>
        </h1>

        <p className="mt-6 max-w-md text-base sm:text-lg">
          لذت اقامتی لوکس در قلب سواحل مکران.
        </p>
        <p className="mt-2 max-w-md">
          با چشم‌انداز خیره‌کننده دریا، رستوران ساحلی، و فضایی آرام برای
          استراحتی بی‌نظیر.
        </p>
      </div>

      <div className="relative w-full lg:w-1/2 h-[300px] lg:h-full">
        <Image
          src="/HeroImage.jpg"
          alt="Hotel view"
          fill
          className="object-cover"
          priority={true}
        />
      </div>
    </section>
  );
}

export default HeroBanner;
