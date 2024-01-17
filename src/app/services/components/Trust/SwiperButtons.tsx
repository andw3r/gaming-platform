"use client";

import clsx from "clsx";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

interface SwiperButtonsProps {
  handlePrev: any;
  handleNext: any;
  swiperData: any[];
  activeIndex: any;
  handleDotClick: any;
}

const SwiperButtons = ({
  handlePrev,
  handleNext,
  swiperData,
  activeIndex,
  handleDotClick,
}: SwiperButtonsProps) => {
  return (
    <div className="flex justify-between items-center py-[60px]">
      <div className="flex gap-3">
        {swiperData.map((_, index) => (
          <button
            className={clsx(
              "w-[15px] h-[15px] rounded-full border-none cursor-pointer",
              index === activeIndex ? "bg-activeLink" : "bg-zinc-200"
            )}
            key={index}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <div className="flex gap-5">
        <button
          onClick={handlePrev}
          className="w-[60px] h-[60px] flex justify-center items-center border-2 border-activeLink rounded-full text-activeLink ease-linear duration-200 hover:bg-activeLink hover:text-white"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={handleNext}
          className="w-[60px] h-[60px] flex justify-center items-center border-2 border-activeLink rounded-full text-activeLink ease-linear duration-200 hover:bg-activeLink hover:text-white"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SwiperButtons;
