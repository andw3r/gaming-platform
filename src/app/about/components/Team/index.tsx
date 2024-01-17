"use client";

import imgsMap from "@/app/utils/imgMap";
import TeamItem from "./TeamItem";

const Team = () => {
  const teamWorkers = imgsMap({
    arrayLength: 4,
    imgExt: ".png",
    imgName: "headteam",
  });

  return (
    <section className="my-[150px]">
      <div className="container">
        <div className="text-[25px] font-semibold leading-[45.12px] mb-12">
          <h3>Our Team</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {teamWorkers.map((worker) => (
            <TeamItem key={worker} imgSrc={worker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
