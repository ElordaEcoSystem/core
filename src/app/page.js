// import Image from 'next/image'

import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { News } from "@/components/News";
import { Perform } from "@/components/Perform";

export default function Home() {
  return (
    <div className=" ">
      <main className="">
        <Banner />
        <Perform />
        <News />
      </main>
    </div>
  );
}
