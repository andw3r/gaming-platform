"use client";

import OfferItem from "./OfferItem";

const Сooperation = () => {
  return (
    <section className="my-16 sm:my-20 md:my-[100px] lg:my-[145px]">
      <div className="container">
        <h3 className="text-[25px] font-semibold leading-[45.12px] mb-8 sm:mb-12 md:mb-16">
          Why work with us
        </h3>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6 xl:gap-10">
          <OfferItem />
          <OfferItem />
          <OfferItem />
        </div>
      </div>
    </section>
  );
};

export default Сooperation;
