import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NEWS_DATA } from "@/app/needed/constans";

export default function PressCenter() {
  const pathToThumbnail = "/image/posts";
  return (
    <section className="container py-12 flex flex-col gap-4 ">
      <h2 className="text-3xl font-bold text-prime">Новости</h2>
      <div className="flex flex-col gap-5">
        {NEWS_DATA.map((item) => {
          return (
            <div className="grid grid-cols-[207px_auto] gap-4" key={item.id}>
              <Image
                src={`${pathToThumbnail}/${item.title}/${item.thumbnail}`}
                width={0}
                height={0}
                sizes="100vw"
                className="h-52  w-52 object-cover justify-center"
              ></Image>
              <div className="py-3 px-4">
                <Link
                  href={`press_center/${item.id}`}
                  className="text-lg font-bold text-prime"
                >
                  {item.title}
                </Link>
                <p className="text-sm mt-2 line-clamp-5">{item.description}</p>
                <div className="text-gray-400 text-sm mt-2">{item.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
