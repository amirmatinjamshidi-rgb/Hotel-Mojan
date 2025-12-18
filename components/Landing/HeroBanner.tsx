import Image from "next/image";

function HeroBanner() {
  return (
    <section className="mb-12 h-[688px] rounded-2xl bg-[#E6F4F7] flex">
      <div className="w-1/2 flex flex-col justify-center px-16">
        <h1 className="text-6xl leading-tight">
          اقامت در آرامش دریا
          <br />
          <span className="text-primary">در هتل ساحلی موجان، </span>
          <span>چابهار</span>
        </h1>

        <p className="mt-6 max-w-md text-lg">
          لذت اقامتی لوکس در قلب سواحل مکران.
        </p>
        <p className="mt-2 max-w-md">
          با چشم‌انداز خیره‌کننده دریا، رستوران ساحلی، و فضایی آرام برای
          استراحتی بی‌نظیر.
        </p>
      </div>

      <div className="w-1/2 relative">
        <Image
          src="/HeroImage.jpg"
          alt="Hotel view"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>
    </section>
  );
}

export default HeroBanner;
