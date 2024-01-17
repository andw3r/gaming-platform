"use client";

import TrustSwiper from "./TrustSwiper";

const Trust = () => {
  return (
    <section className="bg-stone-900 pt-20 mt-16 sm:mt-20 md:mt-[120px] lg:mt-[140px] xl:mt-[160px] mb-14 sm:mb-16 md:mb-20 lg:mb-[100px] xl:mb-[125px]">
      <div className="container">
        <div className="text-center flex flex-col gap-5 mb-16">
          <h3 className="text-[35px] font-medium leading-[50px]">
            Trusted by Thousands of Happy Customer
          </h3>
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy .
          </p>
        </div>
      </div>
      <TrustSwiper />
    </section>
  );
};

export default Trust;
