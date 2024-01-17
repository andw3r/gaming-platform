"use client";

import Image from "next/image";

interface LargeArticleProps {
  imgSrc: string;
  author: string;
  title: string;
  desc: string;
}

const LargeArticle = ({ imgSrc, author, title, desc }: LargeArticleProps) => {
  return (
    <article className="mb-8">
      <figure className="mb-4">
        <Image
          src={imgSrc}
          alt="news img"
          className="w-full h-auto rounded-[20px]"
        />
        <figcaption className="flex items-center leading-[30px] my-5">
          <span className="bg-blue-600 mr-5 px-4 sm:px-8 py-1.5 sm:py-2.5">
            {author}
          </span>
          <span>.5min</span>
        </figcaption>
      </figure>
      <h2 className="text-3xl font-semibold mb-4 sm:mb-8">{title}</h2>
      <p className="text-[17px] leading-8 sm:leading-9">{desc}</p>
    </article>
  );
};

export default LargeArticle;
