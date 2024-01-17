"use client";

import VideoElement from "./VideoElement";
import TextContent from "./TextContent";

const VideoSection = () => {
  return (
    <section className="mb-16 sm:mb-20 md:mb-[100px] lg:mb-[140px] xl:mb-[180px]">
      <div className="container">
        <div className="lg:grid grid-cols-10 gap-5 xl:gap-0">
          <div className="col-span-6 xl:col-span-6">
            <VideoElement />
          </div>
          <div className="col-span-4 xl:col-span-3 xl:col-start-8">
            <TextContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
