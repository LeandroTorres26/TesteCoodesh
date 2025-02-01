import Link from "next/link";
import Image from "next/image";
import React from "react";

interface Props {
  isMobile: boolean;
}

const JoinUs: React.FC<Props> = ({ isMobile }) => {
  return (
    <section className="mt-24 w-full bg-white lg:pb-32">
      <div className="container mx-auto justify-items-start overflow-hidden lg:grid lg:grid-cols-[auto_1fr] lg:rounded-2xl">
        <div className="flex flex-col items-start justify-items-start gap-6 bg-[#1C2A39] px-4 pb-4 pt-12 text-white lg:grid lg:grid-cols-[auto_1fr] lg:items-center lg:p-16">
          <span className="rounded-[1.1875rem] border border-orange-600 px-4 py-1 text-sm">
            Para Empresas
          </span>
          <h2 className="col-span-2 text-2xl font-bold lg:text-[2.125rem]">
            Faça parte da Netimóveis
          </h2>
          <p className="col-span-2 max-w-[47ch] text-xl text-[#C0C7CA]">
            É uma empresa ou rede de imobiliárias? Associe-se e alcance um
            próximo patamar de eficiência e tecnologia.
          </p>
          <Link
            href="#"
            className="rounded-[0.625rem] bg-white px-4 py-3 font-semibold text-orange-500"
          >
            Mais Sobre se Associar
          </Link>
          <Link href="#" className="border-b border-[#A1A7AA] text-sm">
            Conheça Nossos Produtos
          </Link>
        </div>
        <Image
          src={isMobile ? "/images/puzzle-mobile.png" : "/images/puzzle.png"}
          alt="Mão encaixando a ultima peça de um 'quebra-cabeça'"
          width={604}
          height={352}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default JoinUs;
