"use client";

import CurrentPageTag from "@/app/components/CurrentPageTag";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <header className="my-12 sm:my-16 md:my-20 lg:my-[110px]">
      <div className="container">
        <div className="flex flex-col items-center">
          <CurrentPageTag />
          <div className="text-center mt-3.5 mb-10 md:mb-[74px]">
            <h1 className="mb-1 md:mb-3 text-[28px] md:text-[33px] leading-[47px] md:leading-[59.56px] font-semibold">
              Lorem Ipsum is simply dummy text of the printing and.
            </h1>
            <p className="font-medium leading-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="flex items-center text-white leading-[30.32px] py-2.5 pl-6 bg-stone-900 rounded-[10px] max-w-96 w-full">
            <span className="mr-5">
              <IoIosSearch />
            </span>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="bg-transparent outline-none"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
