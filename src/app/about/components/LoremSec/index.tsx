"use client";

import Image from "next/image";
import serviceoffer2 from "@/app/assets/img/serviceoffer2.png";

const LoremSec = () => {
  return (
    <section className="bg-stone-900 py-8 sm:py-10 md:py-14">
      <div className="container">
        <div className="grid md:grid-cols-9 justify-between gap-5 lg:gap-0">
          <div className="md:col-span-5 lg:col-span-4 my-auto">
            <Image
              src={serviceoffer2}
              alt="section image"
              className="w-full md:w-auto"
            />
          </div>

          <div className="flex flex-col self-center md:col-span-4 md:col-start-6">
            <h6 className="font-medium leading-loose">Lorem ipsum</h6>
            <h3 className="text-2xl lg:text-[28px] font-semibold leading-[38px] lg:leading-[44.10px] pt-2.5 lg:pt-3.5 pb-3 lg:pb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h3>
            <p className="leading-relaxed lg:leading-loose">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoremSec;
