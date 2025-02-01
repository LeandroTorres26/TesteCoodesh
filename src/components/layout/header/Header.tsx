import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [openedMenu, setOpenedMenu] = useState(false);

  const toggleMenu = () => {
    setOpenedMenu(!openedMenu);
  };

  return (
    <header className="fixed top-0 z-50 h-[3.5rem] w-full bg-white px-4 text-[#555555] md:h-[4.875rem] md:px-24">
      <div className="container mx-auto flex h-full items-center justify-between md:grid md:grid-cols-[auto_1fr] md:gap-x-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Netimóveis"
            width={169}
            height={42}
            className="h-[2rem] w-[7.875rem] max-w-none md:h-[2.625rem] md:w-[10.5625rem]"
          />
        </Link>
        <button
          onClick={toggleMenu}
          className="z-10 flex flex-col gap-[0.3125rem] md:hidden"
        >
          <span
            className={`block h-[3px] w-6 origin-center rounded-full bg-[#4E5254] transition-all duration-300 ${openedMenu ? "translate-y-[10px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[3px] w-6 rounded-full bg-[#4E5254] transition-opacity duration-300 ${openedMenu ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-[3px] w-6 origin-center rounded-full bg-[#4E5254] transition-all duration-300 ${openedMenu ? "translate-y-[-6px] -rotate-45" : ""}`}
          />
        </button>
        <div
          className={`fixed inset-0 flex flex-col gap-2 bg-white px-3 py-5 transition-all duration-700 ease-in-out md:relative md:flex-row md:items-center md:justify-between md:bg-transparent md:px-0 md:py-0 ${openedMenu ? "" : "translate-y-[-100%] md:translate-y-[0]"}`}
        >
          <nav className="flex flex-col items-start gap-2 md:flex-row md:gap-10">
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
          <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:gap-8">
            <Link
              href="#"
              className="self-center rounded-full border border-purple-700 bg-transparent px-4 py-1 text-purple-800 duration-100 ease-linear hover:bg-purple-800 hover:text-white"
            >
              Anunciar Imóvel
            </Link>
            <button>Filtrar</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
