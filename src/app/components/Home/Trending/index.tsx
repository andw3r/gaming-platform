"use client";
import imgsMap from "@/app/utils/imgMap";
import ImageItem from "./ImageItem";
import flame from "@/app/assets/icons/flame.svg";
import Image from "next/image";
import SeeAllButton from "../../SeeAllButton";

const Trending = () => {
  const trendingImgs = imgsMap({
    arrayLength: 4,
    imgName: "trending",
    imgExt: ".png",
  });

  return (
    <section className="relative z-10 pb-16 sm:pb-[90px] lg:pb-[130px]">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-14 text-center sm:text-left gap-4 sm:gap-0">
          <h3 className="text-[31px] font-bold leading-[58.12px]">
            Currently Trending Games
          </h3>
          <SeeAllButton />
        </div>

        <div className="grid justify-items-center gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {trendingImgs.map((img) => (
            <div key={img}>
              <ImageItem src={img} />
              <div className="flex mt-6 justify-center items-center">
                <span>
                  <Image src={flame} alt="flame" />
                </span>
                <span className="ml-2 text-[22px] font-medium leading-[41.25px]">
                  40 Followers
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
