import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <section className="grid w-full grid-cols-2 bg-white">
      <div>
        <Image
          src="/Images/presentation.png"
          alt="Filha beijando a mãe na bochecha durante café da manhã"
          width={924}
          height={513}
          className="h-full w-full object-cover object-right-top"
        />
      </div>
      <div className="ml-4 flex flex-col gap-12 bg-white-to-gray px-28 py-14">
        <h2 className="text-2xl font-bold text-[#A1A7AA]">
          Aqui vai uma frase de efeito
        </h2>
        <div>
          <h3 className="relative font-bold text-[#4E5254]">
            <Image
              src="/circle.svg"
              alt=""
              width={24}
              height={24}
              className="absolute -left-10"
            />
            Motivo para negociar com a Netimóveis
          </h3>
          <p className="mt-3 max-w-[55ch] text-[#4E5254]">
            Aqui é desenvolvido esse motivo para negociar com a Netimóveis.
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
          </p>
        </div>
        <div className="mt-2">
          <h3 className="relative font-bold text-[#4E5254]">
            <Image
              src="/circle.svg"
              alt=""
              width={24}
              height={24}
              className="absolute -left-10"
            />
            Motivo para negociar com a Netimóveis
          </h3>
          <p className="mt-3 max-w-[55ch] text-[#4E5254]">
            Aqui é desenvolvido esse motivo para negociar com a Netimóveis.
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
          </p>
        </div>
        <div className="mt-2">
          <h3 className="relative font-bold text-[#4E5254]">
            <Image
              src="/circle.svg"
              alt=""
              width={24}
              height={24}
              className="absolute -left-10"
            />
            Motivo para negociar com a Netimóveis
          </h3>
          <p className="mt-3 max-w-[55ch] text-[#4E5254]">
            Aqui é desenvolvido esse motivo para negociar com a Netimóveis.
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
