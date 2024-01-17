"use client";

import HeaderButton from "./HeaderButton";

const HeaderContent = () => {
  return (
    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12 mt-[60px] md:mt-[117px] relative z-10">
      <h5 className="text-accentOrange text-xl font-bold">3D game Dev </h5>
      <h1 className="text-5xl font-bold mt-4 leading-[77.60px]">
        Work that we produce for our clients
      </h1>
      <p className="font-medium mt-6 mb-12 leading-loose">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard.
      </p>
      <HeaderButton />
    </div>
  );
};

export default HeaderContent;
