"use client";

import { IoPersonSharp } from "react-icons/io5";
import { BsGeoAltFill } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";

const GridStatistics = () => {
  const data = [
    { id: 1, title: "90+", text: "Clients", icon: IoPersonSharp },
    { id: 2, title: "30+", text: "Countries", icon: BsGeoAltFill },
    { id: 3, title: "50+", text: "Projects", icon: AiFillDatabase },
  ];

  return (
    <div className="flex flex-wrap sm:grid grid-cols-9 bg-stone-900 rounded-[10px] py-7 sm:py-12 md:py-16 gap-5">
      {data.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="relative col-span-3 flex items-center justify-center mx-auto sm:mx-0 before:absolute before:content-[''] sm:before:w-[1px] sm:before:h-[125px] sm:before:right-0 before:bg-[#EEEFF2] last:before:hidden before:hidden sm:before:block"
          >
            <span className="flex justify-center items-center text-xl text-activeLink w-[40px] sm:w-[55px] h-[40px] sm:h-[55px] bg-rose-50 rounded-[70px]">
              <Icon />
            </span>
            <div className="ml-3 md:ml-9">
              <h6 className="text-xl sm:text-[25px] font-bold leading-[30px] mb-1">
                {item.title}
              </h6>
              <span className="text-lg sm:text-xl leading-[30px]">
                {item.text}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridStatistics;
