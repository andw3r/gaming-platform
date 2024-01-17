"use client";

import imgsMap from "@/app/utils/imgMap";
import LargeArticle from "./LargeArticle";
import newsData from "@/app/news/newsData.json";
import SmallArticle from "./SmallArticle";

const NewsContent = () => {
  return (
    <section className="">
      <div className="container">
        <div className="lg:grid grid-cols-8 gap-8 lg:gap-16 xl:gap-[72px]">
          <div className="col-span-4">
            {/* should take half of width. This goes column */}
            {newsData.slice(0, 2).map((item, index) => (
              <>
                <LargeArticle
                  key={index}
                  imgSrc={require(`@/app/assets/img/${item.img}`)}
                  author={item.author}
                  title={item.title}
                  desc={item.desc}
                />
                {index < 1 && <hr className="my-10 sm:my-16 md:my-[90px]" />}
              </>
            ))}
          </div>

          <div className="col-span-4">
            {/* should take half of width and also height of each article should be 183px. This goes column */}
            {newsData.slice(2).map((item, index) => (
              <SmallArticle
                key={index}
                imgSrc={require(`@/app/assets/img/${item.img}`)}
                author={item.author}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsContent;
