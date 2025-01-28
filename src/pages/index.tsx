import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <header className="bg-white top-0 fixed w-full h-78 flex items-center gap-x-72 px-24 text-headerGray">
          <Link href="/">
            <Image src="/logo.svg" alt="Netimóveis" width={169} height={42}/>
          </Link>
          <nav className="space-x-10">
            <Link href="/imoveis">Imóveis</Link>
            <Link href="/quem-nos-associa">Quero me associar</Link>
            <Link href="/sobre">Sobre<Image src="/down-arrow.svg" alt="" width={10} height={4} className="inline-block ml-1"/></Link>
            <Link href="/blog">Blog</Link>
          </nav>
          <div className="flex pl-52">
            <button className="border border-purple rounded-full bg-transparent hover:bg-purple text-purple hover:text-white py-1 px-4 rounded duration-100 ease-linear">Anunciar Imóvel</button>
            <button className="ml-8">Filtrar</button>
          </div>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-16">
        <section className="grid place-items-center items-center justify-items-center bg-[url(/images/main-banner-desktop.png)] bg-no-repeat h-banner w-full">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-34 text-white">Vende. Aluga. Conecta</h2>
            <div id="searchContainer" className="w-[770px] h-78 bg-white rounded-full mt-8 grid grid-cols-5">
              <div className="col-span-3 flex flex-col justify-center rounded-full pl-8 bg-white hover:bg-inputHover duration-100 ease-linear">
                <label htmlFor=""><Image src="/bed.svg" alt="" width={24} height={24} className="inline-block mr-2"/>Localização</label>
                <input type="text" placeholder="Qual é a Localização?" className="bg-transparent"/>
              </div>
              <div className="col-span-2 grid grid-cols-3 grid-rows-2 justify-center rounded-full pl-8 bg-white hover:bg-inputHover duration-100 ease-linear">
                <label htmlFor="" className="col-span-2 self-end"><Image src="/bed.svg" alt="" width={24} height={24} className="inline-block mr-2"/>Nº de Quartos</label>
                <input type="text" placeholder="Quantos Quartos?" className="bg-transparent col-span-2 self-start"/>
                <button className="bg-orange hover:bg-orangeHover duration-100 ease-linear rounded-full h-[58px] p-4 col-3/4 row-1/3 justify-self-center self-center"><Image src="/search.svg" alt="Buscar" width={24} height={24}/></button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
