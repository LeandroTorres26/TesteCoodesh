import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex h-[4.875rem] w-full items-center justify-between bg-white px-24 text-[#555555]">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Netimóveis"
          width={169}
          height={42}
          className="max-w-none"
        />
      </Link>
      <nav className="flex space-x-10">
        <Link href="/imoveis">Imóveis</Link>
        <Link href="/associar">Quero me associar</Link>
        <Link href="/sobre">
          Sobre
          <Image
            src="/down-arrow.svg"
            alt=""
            width={10}
            height={4}
            className="ml-1 inline-block"
          />
        </Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <div className="flex">
        <Link
          href="#"
          className="rounded-full border border-purple-700 bg-transparent px-4 py-1 text-purple-800 duration-100 ease-linear hover:bg-purple-800 hover:text-white"
        >
          Anunciar Imóvel
        </Link>
        <button className="ml-8">Filtrar</button>
      </div>
    </header>
  );
};

export default Header;
