"use client";

import CurrentPageTag from "@/app/components/CurrentPageTag";
import GridStatistics from "./GridStatistics";

const Statistics = () => {
  return (
    <section className="mt-12 sm:mt-16 md:mt-20 lg:mt-[110px]">
      <div className="container">
        <div className="text-center">
          <div className="flex justify-center">
            <CurrentPageTag />
          </div>

          <div>
            <h1 className="text-3xl md:text-[33px] font-semibold leading-[59.56px] mt-4 mb-3">
              Lorem Ipsum is simply dummy text of the printing and.
            </h1>

            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <div className="my-11">
          <GridStatistics />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
