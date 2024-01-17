"use client";

import CurrentPageTag from "@/app/components/CurrentPageTag";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex flex-col items-center">
          <CurrentPageTag />
          <div className="text-center mt-3.5 mb-6 sm:mb-8 md:mb-10 lg:mb-14 xl:mb-[74px]">
            <h1 className="mb-3 text-2xl sm:text-[33px] leading-[44px] sm:leading-[59.56px] font-semibold">
              Lorem Ipsum is simply dummy text of the printing and.
            </h1>
            <p className="font-medium leading-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
