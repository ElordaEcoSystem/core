import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const newsArr = [
  {
    photoName: "man.jpg",
    label: "30 августа — День Конституции Республики Казахстан",
    description:
      "Узнайте больше о законе Казахстана о языке Узнайте о влияние языка и законодательства на жизнь в Казахстане из доклада «Закон о языках»! Докладчик: Касымбекова А., Тыныштыгулова Д. Краткая выжимка из доклада: Статья 7 нашей Конституции определяет казахский язык в качестве государственного, при этом русский язык также имеет официальный статус в органах государственной власти и местного.  Докладчик: Касымбекова А., Тыныштыгулова Д. Краткая выжимка из доклада...",
    date: "20/09/2023",
  },
  {
    photoName: "man.jpg",
    label: "30 августа — День Конституции Республики Казахстан",
    description:
      "Узнайте больше о законе Казахстана о языке Узнайте о влияние языка и законодательства на жизнь в Казахстане из доклада «Закон о языках»! Докладчик: Касымбекова А., Тыныштыгулова Д. Краткая выжимка из доклада: Статья 7 нашей Конституции определяет казахский язык в качестве государственного, при этом русский язык также имеет официальный статус в органах государственной власти и местного.  Докладчик: Касымбекова А., Тыныштыгулова Д. Краткая выжимка из доклада...",
    date: "20/09/2023",
  },
  {
    photoName: "man.jpg",
    label: "30 августа — День Конституции Республики Казахстан",
    description:
      "Узнайте больше о законе Казахстана о языке Узнайте о влияние языка и законодательства на жизнь в Казахстане из доклада «Закон о языках»! Докладчик: Касымбекова А., Тыныштыгулова Д. Краткая выжимка из доклада: Статья 7 нашей Конституции определяет казахский язык в качестве государственного, при этом русский язык также имеет официальный статус в органах государственной власти и местного.  Докладчик: Касымбекова А., Тыныштыгулова Д. Краткая выжимка из доклада...",
    date: "20/09/2023",
  },
];

export default function PressCenter() {
  return (
    <div className="flex flex-col justify-around">
      <Header />
      <section>
        <div className="container py-12 flex flex-col gap-4 ">
          <h2 className="text-3xl font-bold text-prime">Новости</h2>
          <div className="flex flex-col gap-5">
            {newsArr.map((item) => {
              return (
                <div className="flex">
                  <Image
                    src={`/image/DirectorsImage/${item.photoName}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-52 w-52 object-cover justify-center"
                  ></Image>
                  <div className="py-3 px-4">
                    <Link
                      href="press_center/item"
                      className="text-lg font-bold text-prime"
                    >
                      {item.label}
                    </Link>
                    <p className="text-sm mt-2 line-clamp-5">
                      {item.description}
                    </p>
                    <div className="text-gray-400 text-sm mt-2">
                      {item.date}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
