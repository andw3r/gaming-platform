"use clint";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

interface OfferItemProps {
  imgSrc: string;
  title: string;
}

const OfferItem = ({ imgSrc, title }: OfferItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-[65px] h-[65px] bg-white rounded-full">
        <Image src={imgSrc} alt="dev image" />
      </div>

      <div className="mt-[30px] mb-6">{title}</div>
      <div>
        <FaArrowRight className="text-activeLink" />
      </div>
    </div>
  );
};

export default OfferItem;
