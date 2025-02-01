import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  isMobile: boolean;
}

const Intro: React.FC<Props> = ({ isMobile }) => {
  const [activeTab, setActiveTab] = useState("alugar");
  return (
    <section className="mt-8 w-full border-b border-[#E1E5E9] bg-gradient-to-t from-white to-[#edf1f4] md:border-none md:bg-gradient-to-r">
      <div className="container mx-auto grid w-full px-4 py-16 md:grid-cols-2 md:py-[72px]">
        <div className="flex flex-col gap-5 justify-self-start">
          <h2 className="max-w-[16ch] text-[2.125rem] font-bold text-[#4E5254] md:text-6xl md:font-semibold">
            Encontre um lugar que é a sua cara
          </h2>
          <p className="text-xl text-[#808587] md:max-w-[48ch]">
            A Netimóveis te oferece uma experiência ágil e segura na hora de
            comprar ou alugar seu imóvel. Seja de maneira digital ou física,
            fazemos a diferença neste momento tão importante que é decidir um
            lar.
          </p>
        </div>
        <div className="max-w-lg justify-self-end rounded-2xl md:bg-white md:shadow-lg">
          <nav className="hidden w-full border-b-[1px] border-[#E1E5E9] md:block">
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
          {(isMobile || activeTab === "alugar") && (
            <div className="relative mt-10 flex flex-col items-start gap-4 px-6 md:mt-0 md:min-h-[359px] md:p-10">
              <div className="absolute left-0 top-1 block h-8 w-[2px] bg-orange-600 md:hidden" />
              <h3 className="text-[2.125rem] font-bold text-[#4E5254] md:text-[#393B3D]">
                Alugue
                <br className="md:hidden" /> sem Complicação
              </h3>
              <p className="text-[#808587] md:w-[55ch]">
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
          {(isMobile || activeTab === "comprar") && (
            <div className="relative mt-10 flex flex-col items-start gap-4 px-6 md:mt-0 md:min-h-[359px] md:p-10">
              <div className="absolute left-0 top-1 block h-8 w-[2px] bg-orange-600 md:hidden" />
              <h3 className="text-[2.125rem] font-bold text-[#4E5254] md:text-[#393B3D]">
                Compre
                <br className="md:hidden" /> com segurança
              </h3>
              <p className="text-[#808587] md:w-[55ch]">
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
          {(isMobile || activeTab === "anunciar") && (
            <div className="relative mt-10 flex flex-col items-start gap-4 px-6 md:mt-0 md:min-h-[359px] md:p-10">
              <div className="absolute left-0 top-1 block h-8 w-[2px] bg-orange-600 md:hidden" />
              <h3 className="text-[2.125rem] font-bold text-[#4E5254] md:text-[#393B3D]">
                Anuncie
                <br className="md:hidden" /> Seu Imóvel
              </h3>
              <p className="text-[#808587] md:w-[55ch]">
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
