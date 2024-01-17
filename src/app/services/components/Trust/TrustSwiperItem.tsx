"use client";

import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa";

interface TrustSwiperItemProps {
  img: StaticImageData;
  name: string;
  location: string;
  text: string;
  rating: string;
  activeIndex: boolean;
}

const TrustSwiperItem = ({
  img,
  name,
  location,
  text,
  rating,
  activeIndex,
}: TrustSwiperItemProps) => {
  return (
    <article
      className={clsx(
        "w-[400px] bg-stone-950 rounded-[10px] border-2 p-7 flex flex-col gap-5",
        activeIndex ? "border-amber-600" : "border-[#DDDDDD]"
      )}
    >
      <div className="flex justify-between">
        <div className="flex gap-5">
          <div>
            <Image src={img} alt="swiper image" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-medium">{name}</span>
            <span className="text-sm text-gray-600">{location}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span>{rating}</span>

          <span className="text-[#FEA250]">
            <FaStar />
          </span>
        </div>
      </div>

      <p className="leading-relaxed">{text}</p>
    </article>
  );
};

export default TrustSwiperItem;
