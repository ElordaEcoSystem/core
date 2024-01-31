// import Image from 'next/image'

import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Perform } from "@/components/Perform";

export default function Home() {
  return (
    <div className=" ">
      <Header />
      <main className="">
        <Banner />
        <Perform />
      </main>
      <Footer />
    </div>
  );
}
