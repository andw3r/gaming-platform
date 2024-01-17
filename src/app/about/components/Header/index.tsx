"use client";

import CurrentPageTag from "@/app/components/CurrentPageTag";
import aboutushero from "@/app/assets/img/aboutushero.png";
import serviceoffer2 from "@/app/assets/img/serviceoffer2.png";
import serviceoffer3 from "@/app/assets/img/serviceoffer3.png";
import ImageSlider from "./ImageSlider";
import TouchButton from "./TouchButton";

const images = [
  "/images/aboutushero.png",
  "/images/serviceoffer2.png",
  "/images/serviceoffer3.png",
];

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row relative w-full">
      {/* content */}
      <div className="container flex self-center md:absolute left-1/2 md:-translate-x-1/2">
        {/* Your other content here */}
        <div className="md:w-[350px] lg:w-[425px]">
          <CurrentPageTag />

          <div className="flex flex-col mt-9">
            <h1 className="text-3xl font-bold leading-[54.15px]">
              Lorem Ipsum is simply dummy text of the printing and.
            </h1>

            <p className="leading-loose text-[15px] mt-4 lg:mt-6 mb-8 lg:mb-14">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>

            <TouchButton />
          </div>
        </div>
      </div>

      {/* slider */}
      <div className="mt-10 md:mt-0 md:ml-auto max-w-[640px] md:max-w-fit px-4 md:px-0 mx-auto md:mx-0 w-full md:w-auto flex justify-center md:justify-normal">
        <ImageSlider images={images} />
      </div>
    </header>
  );
};

export default Header;
