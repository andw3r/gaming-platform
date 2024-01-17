"use client";

import videoImg from "@/app/assets/img/video-image.png";
import Image from "next/image";
import { AiOutlinePlayCircle } from "react-icons/ai";

const VideoElement = () => {
  return (
    <div className="relative w-fit h-fit">
      <Image src={videoImg} alt="video img" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl cursor-pointer">
        <AiOutlinePlayCircle />
      </div>
    </div>
  );
};

export default VideoElement;
