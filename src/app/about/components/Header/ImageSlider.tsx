"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("left");

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const nextSlide = () => {
    setDirection("right");

    setCurrentSlide((prevSlide) =>
      prevSlide + 1 === images.length ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setDirection("left");

    setCurrentSlide((prevSlide) =>
      prevSlide - 1 < 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const dragEndHandler = (dragInfo: any) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 100;
    if (draggedDistance > swipeThreshold) {
      prevSlide();
    } else if (draggedDistance < -swipeThreshold) {
      nextSlide();
    }
  };

  return (
    <div className="relative overflow-hidden flex justify-between w-full md:w-[350px] lg:w-[520px] xl:w-[739px] h-[390px] md:h-[410px] lg:h-[460px] xl:h-[656px]">
      <AnimatePresence initial={false} custom={currentSlide}>
        <motion.div
          style={{
            backgroundImage: `url(${images[currentSlide]})`,
            width: "100%",
            height: "100%",
          }}
          key={currentSlide}
          className="absolute bg-cover bg-no-repeat bg-center w-full h-full cursor-grab active:cursor-grabbing"
          variants={slideVariants}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          drag="x"
          onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
          dragElastic={1}
          dragConstraints={{ left: 0, right: 0 }}
        ></motion.div>
      </AnimatePresence>

      {/* buttons */}
      <div className="absolute bottom-0 left-0 flex items-center justify-center space-x-2 bg-zinc-800 w-[120px] lg:w-[179px] h-[54px] lg:h-[67px]">
        <button onClick={prevSlide}>
          <span>&lt;</span>
        </button>
        <span>{`${currentSlide + 1} of ${images.length}`}</span>
        <button onClick={nextSlide}>
          <span>&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
