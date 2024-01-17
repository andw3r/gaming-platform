"use client";
import Image from "next/image";

interface ImageItemProps {
  src: string;
}

const ImageItem = ({ src }: ImageItemProps) => {
  return (
    <>
      <Image src={src} alt="trending game" />
    </>
  );
};

export default ImageItem;
