"use client";
import Image from "next/image";
import joystick from "@/app/assets/img/joystick.png";
import unity from "@/app/assets/img/unity.png";
import cryengine from "@/app/assets/img/cryengine.png";
import unreal from "@/app/assets/img/unreal.png";

const HeaderImages = () => {
  return (
    <div className="block pointer-events-none opacity-65 lg:opacity-100">
      <div className="absolute top-0 -right-[170px] xl:right-0">
        <Image src={joystick} alt="joy-stick" />
      </div>
      <div className="absolute top-0 right-0 w-[668px] h-[761px]">
        <div className="absolute top-1/2 -left-[130px]">
          <Image src={unity} alt="" />
        </div>
        <div className="absolute top-1/4 left-[30px]">
          <Image src={cryengine} alt="" />
        </div>
        <div className="absolute top-1/4 left-[430px]">
          <Image src={unreal} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderImages;
