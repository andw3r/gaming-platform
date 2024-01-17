"use client";
import Image from "next/image";

interface TeamItemProps {
  imgSrc: string;
}

const TeamItem = ({ imgSrc }: TeamItemProps) => {
  return (
    <div className="flex flex-col justify-center items-center bg-stone-900 rounded-[20px] pt-[35px] pb-[30px]">
      <div>
        <Image src={imgSrc} alt="team worker" />
      </div>
      <div className="text-center">
        <h6 className="text-[19px] font-semibold leading-[38.48px]">
          John peter
        </h6>
        <span className="text-gray-200 font-light leading-loose">COO</span>
      </div>
    </div>
  );
};

export default TeamItem;
