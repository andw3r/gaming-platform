"use client";

import Image from "next/image";

interface GalleryItemProps {
  imgSrc: string;
}

const GalleryItem = ({ imgSrc }: GalleryItemProps) => {
  return (
    <div className="md:h-[175px] lg:h-[195px] xl:h-[223px]">
      <Image src={imgSrc} alt="gallery image" className="w-full h-full" />
    </div>
  );
};

export default GalleryItem;
