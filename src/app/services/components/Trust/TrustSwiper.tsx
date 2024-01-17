"use client";

import TrustSwiperItem from "./TrustSwiperItem";
import avatar1 from "@/app/assets/img/avatar1.png";
import avatar2 from "@/app/assets/img/avatar2.png";
import avatar3 from "@/app/assets/img/avatar3.png";
import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";
import SwiperButtons from "./SwiperButtons";
import { FaArrowLeft } from "react-icons/fa6";

const TrustSwiper = ({}) => {
  const swiperData = [
    {
      id: 1,
      img: avatar1,
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      rating: "2.5",
    },
    {
      id: 2,
      img: avatar2,
      name: "Yessica Christy",
      location: "Shanxi, China",
      text: "Lorem Ipsum is simply dummy text of the printing and ",
      rating: "4.7",
    },
    {
      id: 3,
      img: avatar3,
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      rating: "3.4",
    },
    {
      id: 4,
      img: avatar1,
      name: "Jon Doe",
      location: "Amsterdam, Netherlands",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      rating: "4.5",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + swiperData.length) % swiperData.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % swiperData.length);
  };

  const handleDotClick = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: `${activeIndex * -15}%` }}
        className={clsx("flex gap-12 mx-10")}
      >
        {swiperData.map((item, index) => (
          // <motion.div key={item.id} animate={{ x: activeIndex * 20 }}>
          <TrustSwiperItem
            key={item.id}
            activeIndex={index === activeIndex}
            img={item.img}
            location={item.location}
            name={item.name}
            rating={item.rating}
            text={item.text}
          />
          // </motion.div>
        ))}
      </motion.div>

      <div className="container">
        <SwiperButtons
          activeIndex={activeIndex}
          handleDotClick={handleDotClick}
          handleNext={handleNext}
          handlePrev={handlePrev}
          swiperData={swiperData}
        />
      </div>
    </div>
  );
};

export default TrustSwiper;
