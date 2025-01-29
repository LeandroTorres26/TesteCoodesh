import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';

const Intro = () => {
  const [activeTab, setActiveTab] = useState('alugar');

  return (
    <section className="bg-gradient-to-r from-[#ffffff] to-20% to-[#edf1f4] w-full mt-8">
      <div className="container mx-auto w-full grid grid-cols-2 py-[72px]">
        <div className="flex flex-col gap-12 justify-self-start">
          <h2 className="text-[#4E5254] text-6xl max-w-[13ch]">Encontre um lugar que é a sua cara</h2>
          <p className="text-[#808587] max-w-[40ch]">A Netimóveis te oferece uma experiência ágil e segura na hora de comprar ou alugar seu imóvel. Seja de maneira digital ou física, fazemos a diferença neste momento tão importante que é decidir um lar.</p>
        </div>
        <div className="bg-white rounded-2xl max-w-lg justify-self-end">
          <nav className="w-full border-b-2 border-[#E1E5E9]">
            <ul className="flex justify-around">
              <li className={`max-w-[87px] text-center flex flex-col items-center p-4 cursor-pointer hover:text-[#393B3D] ${activeTab === 'alugar' ? 'text-[#393B3D] border-b-4 border-orange' : 'text-[#808587]'}`} onClick={() => setActiveTab('alugar')}>
                <Image src="/key.svg" alt="" width={24} height={24}/>
                Alugar Imóvel
              </li>
              <li className={`max-w-[87px] text-center flex flex-col items-center p-4 cursor-pointer hover:text-[#393B3D] ${activeTab === 'comprar' ? 'text-[#393B3D] border-b-4 border-orange' : 'text-[#808587]'}`} onClick={() => setActiveTab('comprar')}>
                <Image src="/money.svg" alt="" width={24} height={24}/>
                Comprar Imóvel
              </li>
              <li className={`max-w-[87px] text-center flex flex-col items-center p-4 cursor-pointer hover:text-[#393B3D] ${activeTab === 'anunciar' ? 'text-[#393B3D] border-b-4 border-orange' : 'text-[#808587]'}`} onClick={() => setActiveTab('anunciar')}>
                <Image src="/house.svg" alt="" width={24} height={24}/>
                Anunciar Imóvel
              </li>
            </ul>
          </nav>
            {activeTab === 'alugar' && (
              <div className="p-10 flex flex-col items-start gap-4 min-h-[359px]">
                <h3 className="text-[#393B3D] text-[2.125rem] font-bold">Alugue sem complicação</h3>
                <p className="text-[#808587]">Alugue imóveis qualificados e sem repitição. Sed ut perspiciatis unde omnis iste natus error sit.</p>
                <Link href="#" className="border border-purple rounded-[10px] bg-transparent hover:bg-purple text-purple hover:text-white py-3 px-4 mt-4 mb-2 duration-100 ease-linear">Ver imóveis para Alugar</Link>
                <Link href="#" className="border-b border-[#C0C7CA] hover:border-purple text-[#393B3D] hover:text-purple text-sm duration-100 ease-linear">Veja como alugar sem Fiador</Link>
                <Link href="#" className="border-b border-[#C0C7CA] hover:border-purple text-[#393B3D] hover:text-purple text-sm duration-100 ease-linear">Saiba como funciona o Aluguel na Netimóveis</Link>
              </div>
            )}
            {activeTab === 'comprar' && (
              <div className="p-10 flex flex-col items-start gap-4 min-h-[359px]">
                <h3 className="text-[#393B3D] text-[2.125rem] font-bold">Compre com segurança</h3>
                <p className="text-[#808587]">Compre seu imóvel com segurança e agilidade. Sed ut perspiciatis unde omnis iste natus error sit.</p>
                <Link href="#" className="border border-purple rounded-[10px] bg-transparent hover:bg-purple text-purple hover:text-white py-3 px-4 mt-4 mb-2 duration-100 ease-linear">Ver imóveis para Comprar</Link>
                <Link href="#" className="border-b border-[#C0C7CA] hover:border-purple text-[#393B3D] hover:text-purple text-sm duration-100 ease-linear">Simule seu Financiamento</Link>
                <Link href="#" className="border-b border-[#C0C7CA] hover:border-purple text-[#393B3D] hover:text-purple text-sm duration-100 ease-linear">Saiba como funciona a Compra na Netimóveis</Link>
              </div>
            )}
            {activeTab === 'anunciar' && (
              <div className="p-10 flex flex-col items-start gap-4 min-h-[359px]">
                <h3 className="text-[#393B3D] text-[2.125rem] font-bold">Anuncie Seu Imóvel</h3>
                <p className="text-[#808587]">Anuncie gratuitamente na maior rede de imobiliárias do Brasil.</p>
                <Link href="#" className="border border-purple rounded-[10px] bg-transparent hover:bg-purple text-purple hover:text-white py-3 px-4 mt-4 mb-2 duration-100 ease-linear">Anunciar Imóvel</Link>
                <Link href="#" className="text-[#4E5254] font-bold">Descubra Quanto Cobrar <Image src="/right-arrow.svg" alt="" width={14} height={12} className="inline-block"/></Link>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default Intro;