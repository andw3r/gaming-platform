"use client";

import Image from "next/image";

interface SmallArticleProps {
  imgSrc: string;
  author: string;
  title: string;
}

const SmallArticle = ({ imgSrc, author, title }: SmallArticleProps) => {
  return (
    <article className="mb-6 md:mb-8 flex">
      <figure className="md:mb-4 flex gap-4 sm:gap-8">
        <Image src={imgSrc} alt="news img" className=" rounded-[20px]" />
        <figcaption className="flex flex-col justify-center">
          <div className="flex items-center leading-[30px] mb-2 sm:mb-4 md:mb-5">
            <span className="bg-blue-600 mr-2 sm:mr-5 px-4 sm:px-8 py-1.5 sm:py-2.5">
              {author}
            </span>
            <span>.5min</span>
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">{title}</h2>
        </figcaption>
      </figure>
    </article>
  );
};

export default SmallArticle;
