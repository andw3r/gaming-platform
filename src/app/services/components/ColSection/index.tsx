"use client";

import imgsMap from "@/app/utils/imgMap";
import ColText from "./ColText";
import Image from "next/image";
import clsx from "clsx";

const ColSection = () => {
  const textData = {
    title: "Lorem Ipsum is simply dummy text dummy text",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    subtext:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    button: "Read more",
  };

  const imgsData = imgsMap({
    arrayLength: 3,
    imgExt: ".png",
    imgName: "serviceoffer",
  });

  return (
    <section className="">
      <div className="container">
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-[120px]">
          {imgsData.map((item, index) => (
            <article
              className="flex flex-col lg:grid grid-cols-10 lg:gap-0 gap-5"
              key={index}
            >
              <div
                className={clsx(
                  "col-span-5 xl:col-span-4",
                  index % 2 !== 0
                    ? "lg:order-1"
                    : "lg:order-2 col-start-6 xl:col-start-7"
                )}
              >
                <Image src={item} alt="img" />
              </div>

              <div
                className={clsx(
                  "col-span-4 flex flex-col justify-center",
                  index % 2 == 0
                    ? "lg:order-1"
                    : "lg:order-2 col-start-7 xl:col-start-6"
                )}
              >
                <ColText
                  title={textData.title}
                  text={textData.text}
                  subtext={textData.subtext}
                  button={textData.button}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColSection;
