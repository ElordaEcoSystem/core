import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";

export default function Procurement() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="container py-10 mb-auto">
        <h3 className="text-def_black text-4xl font-bold">
          Планы закупок товаров, работ и услуг
        </h3>
        <div className="flex flex-col gap-3 mt-4">
          <a href="/document_procurment/План-2023.xls">План 2023</a>
          <a href="/document_procurment/Приказ_2023.pdf">Приказ 2023</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
