"use client";
import Image from "next/image";
import spiderman from "@/app/assets/img/spiderman.png";
import spidermandotsbg from "@/app/assets/img/spidermandotsbg.svg";

const Industry = () => {
  return (
    <section className="pb-14 sm:pb-16 md:pb-20 lg:pb-[120px] xl:pb-[157px]">
      <div className="container">
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 lg:text-center mx-auto w-full lg:w-9/12 xl:w-7/12">
          <h2 className="text-2xl sm:text-3xl md:text-[35px] font-semibold leading-[48px] md:leading-[65.62px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
        </div>

        <div className="mb-12 relative z-10 w-full sm:w-9/12 md:w-7/12 lg:w-5/12">
          <h3 className="text-xl md:text-3xl font-semibold leading-[56.25px] mb-2 sm:mb-4 md:mb-8">
            Lorem Ipsum
          </h3>
          <p className="leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s,
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-fit h-fit">
            <div className="relative z-10">
              <Image src={spiderman} alt="spider man" />
            </div>

            <div className="absolute right-[125px] -top-[15%]">
              <Image src={spidermandotsbg} alt="dots" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
