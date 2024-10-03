import Image from "next/image";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/images/hero-img.png";
export default function Hero() {
  return (
    <div className="bg-[#ffc754] h-screen pt-16 lg:pt-0">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-0">
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16  lg:flex-row-reverse ">
          {/* Text content */}
          <div className="flex flex-col justify-center lg:py-12 xl:w-full xl:py-24 md:px-10 items-center md:items-center lg:items-start">
            <h1 className="mb-5 text-4xl text-black sm:text-5xl md:mb-10 lg:text-6xl xl:text-8xl max-lg:text-center ">
              Listen to <br className="max-lg:hidden" />
              the <span className="text-blue-500">amazing</span>
              <br className="" />
              music sound.
            </h1>
            <p className="mb-8 leading-relaxed text-gray-800 md:mb-12 lg:w-4/5 xl:text-lg">
              Experience music like never before
            </p>
            <Button size="lg" variant="main" className="w-fit text-lg">
              Shopping Now
            </Button>
          </div>
          {/* Image banner */}
          <div className="h-auto w-auto mx-auto overflow-hidden lg:h-full xl:w-full">
            <Image
              src={heroImg}
              alt="Person listening to music"
              className="h-full w-full object-center"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
