"use client";

import Image from "next/image";
import map from "@/app/assets/img/map.svg";

const Map = () => {
  return (
    <section className="mt-8 sm:mt-10 md:mt-14 lg:mt-[70px] xl:mt-[90px] mb-16">
      <div className="container">
        <div className="flex justify-center">
          <Image src={map} alt="map image" />
        </div>
      </div>
    </section>
  );
};

export default Map;
