import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Intro = () => {
  const [activeTab, setActiveTab] = useState("alugar");

  return (
    <section className="mt-8 w-full bg-gradient-to-r from-white to-[#edf1f4]">
      <div className="container mx-auto grid w-full grid-cols-2 py-[72px]">
        <div className="flex flex-col gap-12 justify-self-start">
          <h2 className="max-w-[16ch] text-6xl text-[#4E5254]">
            Encontre um lugar que é a sua cara
          </h2>
          <p className="max-w-[48ch] text-[#808587]">
            A Netimóveis te oferece uma experiência ágil e segura na hora de
            comprar ou alugar seu imóvel. Seja de maneira digital ou física,
            fazemos a diferença neste momento tão importante que é decidir um
            lar.
          </p>
        </div>
        <div className="max-w-lg justify-self-end rounded-2xl bg-white shadow-lg">
          <nav className="w-full border-b-[1px] border-[#E1E5E9]">
            <ul className="flex justify-around">
              <li
                className={`flex max-w-[87px] cursor-pointer flex-col items-center p-4 text-center hover:text-[#393B3D] ${
                  activeTab === "alugar"
                    ? "border-b-2 border-orange-500 text-[#393B3D]"
                    : "text-[#808587]"
                }`}
                onClick={() => setActiveTab("alugar")}
              >
                <Image src="/key.svg" alt="" width={24} height={24} />
                Alugar Imóvel
              </li>
              <li
                className={`flex max-w-[87px] cursor-pointer flex-col items-center p-4 text-center hover:text-[#393B3D] ${
                  activeTab === "comprar"
                    ? "border-b-2 border-orange-500 text-[#393B3D]"
                    : "text-[#808587]"
                }`}
                onClick={() => setActiveTab("comprar")}
              >
                <Image src="/money.svg" alt="" width={24} height={24} />
                Comprar Imóvel
              </li>
              <li
                className={`flex max-w-[87px] cursor-pointer flex-col items-center p-4 text-center hover:text-[#393B3D] ${
                  activeTab === "anunciar"
                    ? "border-b-2 border-orange-500 text-[#393B3D]"
                    : "text-[#808587]"
                }`}
                onClick={() => setActiveTab("anunciar")}
              >
                <Image src="/house.svg" alt="" width={24} height={24} />
                Anunciar Imóvel
              </li>
            </ul>
          </nav>
          {activeTab === "alugar" && (
            <div className="flex min-h-[359px] flex-col items-start gap-4 p-10">
              <h3 className="text-[2.125rem] font-bold text-[#393B3D]">
                Alugue sem complicação
              </h3>
              <p className="text-[#808587]">
                Alugue imóveis qualificados e sem repitição. Sed ut perspiciatis
                unde omnis iste natus error sit.
              </p>
              <Link
                href="#"
                className="mb-2 mt-4 rounded-[10px] border border-purple-700 bg-transparent px-4 py-3 text-purple-700 duration-100 ease-linear hover:bg-purple-700 hover:text-white"
              >
                Ver imóveis para Alugar
              </Link>
              <Link
                href="#"
                className="border-b border-[#C0C7CA] text-sm text-[#393B3D] duration-100 ease-linear hover:border-purple-700 hover:text-purple-700"
              >
                Veja como alugar sem Fiador
              </Link>
              <Link
                href="#"
                className="border-b border-[#C0C7CA] text-sm text-[#393B3D] duration-100 ease-linear hover:border-purple-700 hover:text-purple-700"
              >
                Saiba como funciona o Aluguel na Netimóveis
              </Link>
            </div>
          )}
          {activeTab === "comprar" && (
            <div className="flex min-h-[359px] flex-col items-start gap-4 p-10">
              <h3 className="text-[2.125rem] font-bold text-[#393B3D]">
                Compre com segurança
              </h3>
              <p className="text-[#808587]">
                Compre seu imóvel com segurança e agilidade. Sed ut perspiciatis
                unde omnis iste natus error sit.
              </p>
              <Link
                href="#"
                className="mb-2 mt-4 rounded-[10px] border border-purple-700 bg-transparent px-4 py-3 text-purple-700 duration-100 ease-linear hover:bg-purple-700 hover:text-white"
              >
                Ver imóveis para Comprar
              </Link>
              <Link
                href="#"
                className="border-b border-[#C0C7CA] text-sm text-[#393B3D] duration-100 ease-linear hover:border-purple-700 hover:text-purple-700"
              >
                Simule seu Financiamento
              </Link>
              <Link
                href="#"
                className="border-b border-[#C0C7CA] text-sm text-[#393B3D] duration-100 ease-linear hover:border-purple-700 hover:text-purple-700"
              >
                Saiba como funciona a Compra na Netimóveis
              </Link>
            </div>
          )}
          {activeTab === "anunciar" && (
            <div className="flex min-h-[359px] flex-col items-start gap-4 p-10">
              <h3 className="text-[2.125rem] font-bold text-[#393B3D]">
                Anuncie Seu Imóvel
              </h3>
              <p className="text-[#808587]">
                Anuncie gratuitamente na maior rede de imobiliárias do Brasil.
              </p>
              <Link
                href="#"
                className="mb-2 mt-4 rounded-[10px] border border-purple-700 bg-transparent px-4 py-3 text-purple-700 duration-100 ease-linear hover:bg-purple-700 hover:text-white"
              >
                Anunciar Imóvel
              </Link>
              <Link href="#" className="font-bold text-[#4E5254]">
                Descubra Quanto Cobrar{" "}
                <Image
                  src="/right-arrow.svg"
                  alt=""
                  width={14}
                  height={12}
                  className="inline-block"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
