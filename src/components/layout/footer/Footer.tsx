import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('tipos');
  return (
    <footer className="">
      <div className="bg-white w-full p-10">
        <div className="container mx-auto">
          <nav className="w-full border-b-[1px] border-[#E1E5E9]">
            <ul className="flex">
              <li className={`p-4 cursor-pointer hover:text-[#393B3D] ${activeTab === 'tipos' ? 'text-[#393B3D] border-b-2 border-orange-500' : 'text-[#808587]'}`} onClick={() => setActiveTab('tipos')}>
                Tipos de Propriedades
              </li>
              <li className={`p-4 cursor-pointer hover:text-[#393B3D] ${activeTab === 'venda' ? 'text-[#393B3D] border-b-2 border-orange-500' : 'text-[#808587]'}`} onClick={() => setActiveTab('venda')}>
                Populares para Venda
              </li>
              <li className={`p-4 cursor-pointer hover:text-[#393B3D] ${activeTab === 'aluguel' ? 'text-[#393B3D] border-b-2 border-orange-500' : 'text-[#808587]'}`} onClick={() => setActiveTab('aluguel')}>
                Populares para Locação
              </li>
            </ul>
          </nav>
          {activeTab === 'tipos' && (
            <div className="grid grid-cols-4 py-10 gap-10">
              <ul className="flex flex-col gap-3 text-[#555555] text-sm">
                <li><h3 className="text-[#555555] font-bold text-base">Alugar</h3></li>
                <li><Link href="#" >Apartamentos</Link></li>
                <li><Link href="#" >Casas</Link></li>
                <li><Link href="#" >Terrenos</Link></li>
                <li><Link href="#" >Lojas</Link></li>
              </ul>
              <ul className="flex flex-col gap-3 text-[#555555] text-sm">
                <li><h3 className="text-[#555555] font-bold text-base">Comprar</h3></li>
                <li><Link href="#" >Casas à venda</Link></li>
                <li><Link href="#" >Imóv. em Condomínios</Link></li>
                <li><Link href="#" >Comprar terrenos</Link></li>
                <li><Link href="#" >Lançamentos</Link></li>
              </ul>
              <ul className="flex flex-col gap-3 text-[#555555] text-sm">
                <li><h3 className="text-[#555555] font-bold text-base">Comercial</h3></li>
                <li><Link href="#" >imóveis com escritório</Link></li>
                <li><Link href="#" >Prédio comercial</Link></li>
                <li><Link href="#" >Galpão de Armazenamento</Link></li>
                <li><Link href="#" >Salão de Eventos</Link></li>
              </ul>
            </div>
          )}
          {activeTab === 'venda' && (
            <div className="grid grid-cols-4 py-10 gap-10">
              <ul className="flex flex-col gap-3 text-[#555555] text-sm">
                <li><h3 className="text-[#555555] font-bold text-base">Comercial</h3></li>
                <li><Link href="#" >imóveis com escritório</Link></li>
                <li><Link href="#" >Prédio comercial</Link></li>
                <li><Link href="#" >Galpão de Armazenamento</Link></li>
                <li><Link href="#" >Salão de Eventos</Link></li>
              </ul>
              <ul className="flex flex-col gap-3 text-[#555555] text-sm">
                <li><h3 className="text-[#555555] font-bold text-base">Alugar</h3></li>
                <li><Link href="#" >Apartamentos</Link></li>
                <li><Link href="#" >Casas</Link></li>
                <li><Link href="#" >Terrenos</Link></li>
                <li><Link href="#" >Lojas</Link></li>
              </ul>
              <ul className="flex flex-col gap-3 text-[#555555] text-sm">
                <li><h3 className="text-[#555555] font-bold text-base">Comprar</h3></li>
                <li><Link href="#" >Casas à venda</Link></li>
                <li><Link href="#" >Imóv. em Condomínios</Link></li>
                <li><Link href="#" >Comprar terrenos</Link></li>
                <li><Link href="#" >Lançamentos</Link></li>
              </ul>
            </div>
          )}
          {activeTab === 'aluguel' && (
            <div className="grid grid-cols-4 py-10  gap-10">
              <ul className="flex flex-col gap-3 text-[#555555] text-sm">
                <li><h3 className="text-[#555555] font-bold text-base">Alugar</h3></li>
                <li><Link href="#" >Apartamentos</Link></li>
                <li><Link href="#" >Casas</Link></li>
                <li><Link href="#" >Terrenos</Link></li>
                <li><Link href="#" >Lojas</Link></li>
              </ul>
              <ul className="flex flex-col gap-3 text-[#555555] text-sm">
                <li><h3 className="text-[#555555] font-bold text-base">Comercial</h3></li>
                <li><Link href="#" >imóveis com escritório</Link></li>
                <li><Link href="#" >Prédio comercial</Link></li>
                <li><Link href="#" >Galpão de Armazenamento</Link></li>
                <li><Link href="#" >Salão de Eventos</Link></li>
              </ul>
              <ul className="flex flex-col gap-3 text-[#555555] text-sm">
                <li><h3 className="text-[#555555] font-bold text-base">Comprar</h3></li>
                <li><Link href="#" >Casas à venda</Link></li>
                <li><Link href="#" >Imóv. em Condomínios</Link></li>
                <li><Link href="#" >Comprar terrenos</Link></li>
                <li><Link href="#" >Lançamentos</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="bg-[#EDF1F4]">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 py-10 gap-10">
            <ul className="flex flex-col gap-3 text-[#555555] text-sm">
              <li><h3 className="text-[#063D7E] font-bold text-base">A Netimóveis</h3></li>
              <li><Link href="#">Quem somos</Link></li>
              <li><Link href="#">Como funciona</Link></li>
              <li><Link href="#">Seja um parceiro</Link></li>
              <li><Link href="#">Quero me associar</Link></li>
              <li><Link href="#">Acessoria de imprensa</Link></li>
              <li><Link href="#">Soluções Corporativas</Link></li>
              <li><Link href="#">Covid-19</Link></li>
            </ul>
            <ul className="flex flex-col gap-3 text-[#555555] text-sm">
              <li><h3 className="text-[#063D7E] font-bold text-base">Recursos</h3></li>
              <li><Link href="#">Comprar</Link></li>
              <li><Link href="#">Alugar</Link></li>
              <li><Link href="#">Lançamentos</Link></li>
              <li><Link href="#">Anunciar Imóvel</Link></li>
              <li><Link href="#">Simular Financiamento</Link></li>
              <li><Link href="#">Imobiliárias</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
            <ul className="flex flex-col gap-3 text-[#555555] text-sm">
              <li><h3 className="text-[#063D7E] font-bold text-base">Contato</h3></li>
              <li><Link href="#">Fale Conosco</Link></li>
              <li><Link href="#">Perguntas Frequentes</Link></li>
              <li><Link href="#">Suporte</Link></li>
            </ul>
            <ul className="flex flex-col gap-3 text-[#555555] text-sm">
              <li><h3 className="text-[#063D7E] font-bold text-base">Nossos Aplicativos</h3></li>
              <li><Link href="#">Loc Fácil Netimóveis</Link></li>
              <li><Link href="#">Pro Imob Netimóveis</Link></li>
              <div className="flex gap-2 mt-4">
                <Link href="#"><Image src="/app-store.svg" alt="Dísponivel na App Store" width={108} height={32}/></Link>
                <Link href="#"><Image src="/google-play.svg" alt="Dísponivel na App Store" width={108} height={32}/></Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-orange-500 py-3 px-6">
        <div className="container mx-auto flex justify-between">
          <Image src="/logo-white.svg" alt="Netimóveis" width={169} height={42} className="max-w-none"/>
          <div className="grid grid-cols-4 items-center justify-items-center text-white">
            <small className="col-span-4 !text-xs">© Copyright 2021 Netimóveis Brasil SA. Todos os direitos reservados.</small>
            <small><Link href="#" className="text-xs">Política de privacidade</Link></small>
            <small><Link href="#" className="text-xs">Termos de uso</Link></small>
            <small><Link href="#" className="text-xs">LGPD</Link></small>
            <small className="text-xs">Versão: 25/10/2021</small>
          </div>
          <ul className="flex gap-8 justify-between items-center">
            <li><Link href="#"><Image src="/instagram.svg" alt="Nosso Instagram" width={32} height={32}/></Link></li>
            <li><Link href="#"><Image src="/facebook.svg" alt="Nosso Facebook" width={32} height={32}/></Link></li>
            <li><Link href="#"><Image src="/linkedin.svg" alt="Nosso LinkedIn" width={32} height={32}/></Link></li>
            <li><Link href="#"><Image src="/youtube.svg" alt="Nosso YouTube" width={32} height={32}/></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;