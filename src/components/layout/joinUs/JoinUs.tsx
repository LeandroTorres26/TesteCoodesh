import Link from "next/link";
import Image from "next/image";
import React from "react";

const JoinUs = () => {
  return (
    <section className="mt-24 w-full bg-gray-to-white pb-32">
      <div className="container mx-auto grid grid-cols-[auto_1fr] justify-items-start overflow-hidden rounded-2xl">
        <div className="grid grid-cols-[auto_1fr] items-center justify-items-start gap-6 bg-[#1C2A39] p-16 text-white">
          <span className="rounded-[1.1875rem] border border-orange-600 px-4 py-1">
            Para Empresas
          </span>
          <h2 className="col-span-2 text-[2.125rem] font-bold">
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
          <Link href="#" className="border-b border-[#A1A7AA]">
            Conheça Nossos Produtos
          </Link>
        </div>
        <Image
          src="/images/puzzle.png"
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
