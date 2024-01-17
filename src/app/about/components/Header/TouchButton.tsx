"use client";
import { FaArrowRight } from "react-icons/fa6";

const TouchButton = () => {
  return (
    <button className="flex w-fit items-center bg-gradient-to-r from-orange-500 to-orange-400 rounded-[40px] pt-2.5 pb-4 pl-5 pr-7">
      <span className="mr-4">Get in touch</span>
      <span>
        <FaArrowRight />
      </span>
    </button>
  );
};

export default TouchButton;
