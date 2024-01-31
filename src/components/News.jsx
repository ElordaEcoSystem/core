import React from "react";

import { ArrowIcon } from "./icons/ArrowIcon";
import { NEWS_DATA } from "@/app/needed/constans";
import Image from "next/image";
import Link from "next/link";

export const News = () => {
  const newsArr = NEWS_DATA.slice(-4);
  return (
    <section id="news" className="py-10 container ">
      <div className="flex justify-between items-center">
        <h3 className="text-def_black text-4xl font-bold">Новости</h3>
        <button className="flex items-center gap-2 bg-white py-2 px-4 shadow-md rounded  hover:scale-[102%] transition-all">
          <Link
            href="/press_center"
            className="text-prime text-sm font-bold leading-6"
          >
            Смотреть все новости
          </Link>
          <ArrowIcon className="h-4 stroke-[4px] w-auto stroke-prime" />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-14">
        <div className="h-[584px] flex flex-col">
          <div className="h-full bg-slate-400">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src={`/image/DirectorsImage/${
                newsArr[newsArr.length - 1].imageName
              }`}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="bottom-0 w-full bg-base-color px-5 py-[30px] bg-prime">
            <div className="text-white text-xl font-bold line-clamp-2 ">
              {newsArr[0].title}
            </div>
            <div className="text-slate-400 text-xs font-normal mt-1 ">
              {newsArr[0].date}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-[19px]">
          {newsArr.slice(0, 3).map(({ id, title, date, imageName }) => (
            <LittleNews
              key={id}
              title={title}
              date={date}
              imageName={imageName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const LittleNews = ({ title, date, imageName }) => {
  return (
    <div className="w-full grid grid-cols-[182px_auto] h-full">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        src={`/image/DirectorsImage/${imageName}`}
        className="h-full w-full object-cover"
      />
      {/* <div className="bg-gray-300 "></div> */}
      <div className="bg-prime w-full p-6 flex flex-col justify-center">
        <div className="text-white text-base font-bold line-clamp-4">
          {title}
        </div>
        <div className="text-base font-normal mt-1 text-slate-400">{date}</div>
      </div>
    </div>
  );
};
