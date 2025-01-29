import Link from 'next/link';
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-white top-0 fixed w-full h-78 flex items-center justify-between px-24 z-50 text-[#555555]">
        <Link href="/">
        <Image src="/logo.svg" alt="Netimóveis" width={169} height={42} className="max-w-none"/>
        </Link>
        <nav className="space-x-10 flex">
        <Link href="/imoveis">Imóveis</Link>
        <Link href="/associar">Quero me associar</Link>
        <Link href="/sobre">Sobre<Image src="/down-arrow.svg" alt="" width={10} height={4} className="inline-block ml-1"/></Link>
        <Link href="/blog">Blog</Link>
        </nav>
        <div className="flex">
        <Link href="#" className="border border-purple rounded-full bg-transparent hover:bg-purple text-purple hover:text-white py-1 px-4 duration-100 ease-linear">Anunciar Imóvel</Link>
        <button className="ml-8">Filtrar</button>
        </div>
    </header>
  );
};

export default Header;