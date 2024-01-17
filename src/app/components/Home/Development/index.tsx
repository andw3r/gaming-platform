"use client";
import imgsMap from "@/app/utils/imgMap";
import OfferItem from "./OfferItem";
import Image from "next/image";
import devbg from "@/app/assets/img/devbg.png";

const Development = () => {
  const devTitles = [
    "Mobile Game Development",
    "PC Game Development",
    "PS4 Game Development",
    "AR/VR Solutions",
    "AR/ VR design",
    "3D Modelings",
  ];

  const devImgs = imgsMap({
    arrayLength: devTitles.length,
    imgName: "dev",
    imgExt: ".svg",
    srcFolder: "icons",
  });

  const devData = devTitles.map((item, index) => {
    return {
      title: item,
      img: devImgs[index],
    };
  });

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-60 backdrop-blur-sm"></div>
        <Image
          src={devbg}
          alt="section background"
          className="w-full h-full object-cover pointer-events-none"
        />
        /
      </div>
      <div className="relative z-10 container">
        <div className="sm:text-center mx-auto w-full lg:w-8/12 mb-10 sm:mb-[75px] md:mb-[100px]">
          <h2 className="text-2xl md:text-3xl font-semibold leading-[48px] md:leading-[56.25px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>

          <p className="mt-6 leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s,
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-14">
          {devData.map((item, index) => (
            <OfferItem key={index} imgSrc={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Development;
