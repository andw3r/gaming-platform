"use client";
import imgsMap from "@/app/utils/imgMap";
import GalleryItem from "./GalleryItem";
import SeeAllButton from "../../SeeAllButton";

const Projects = () => {
  const gallery = imgsMap({
    arrayLength: 6,
    imgName: "galleryimg",
    imgExt: ".png",
    srcFolder: "img",
  });

  return (
    <section className="md:pt-20 lg:pt-[100px] xl:pt-[145px] pb-16 md:pb-20 lg:pb-[105px]">
      <div className="container">
        {/* text */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold leading-[56.25px] mb-4">
            Our Recent Projects
          </h3>

          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>

      {/* gallery */}
      <div className="flex flex-wrap px-1 gap-x-2 md:gap-x-4 xl:gap-x-6 gap-y-2 md:gap-y-4 lg:gap-y-6 xl:gap-y-8 justify-center xl:w-11/12 mx-auto">
        {gallery.map((item) => (
          <GalleryItem key={item} imgSrc={item} />
        ))}
      </div>

      <div className="flex justify-center mt-8 sm:mt-10 md:mt-16">
        <SeeAllButton />
      </div>
    </section>
  );
};

export default Projects;
