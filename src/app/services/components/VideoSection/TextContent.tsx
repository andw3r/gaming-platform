"use client";

import { FaCheckCircle } from "react-icons/fa";

const TextContent = () => {
  const spans = [
    "Lorem Ipsum is simply",
    "Lorem Ipsum is simply",
    "Lorem Ipsum is simply",
    "Lorem Ipsum is simply",
  ];

  return (
    <div className="sm:grid grid-cols-6 block lg:block gap-8 mt-4 lg:mt-0">
      <div className="col-span-3 md:col-span-4">
        <h3 className="text-2xl md:text-3xl font-bold leading-[45px] md:leading-[54.15px]">
          Lorem Ipsum is simply dummy text.
        </h3>
        <p className="text-sm leading-relaxed mt-3 mb-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy .
        </p>
      </div>

      <div className="flex flex-col gap-5 col-span-3 md:col-span-2">
        {spans.map((span) => (
          <div key={span} className="flex items-center">
            <span className="mr-2.5 text-[#2FAB73]">
              <FaCheckCircle />
            </span>
            <span>{span}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextContent;
