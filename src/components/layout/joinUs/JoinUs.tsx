import Link from 'next/link';
import Image from 'next/image'

const JoinUs = () => {
  return (
    <section className="w-full mt-24 pb-32 bg-gray-to-white">
      <div className="container mx-auto grid grid-cols-[auto_1fr] justify-items-start rounded-2xl overflow-hidden">
        <div className="bg-[#1C2A39] grid grid-cols-[auto_1fr] justify-items-start items-center gap-6 text-white p-16">
          <span className="border border-orange-600 rounded-[1.1875rem] px-4 py-1">Para Empresas</span>
          <h2 className="col-span-2 font-bold text-[2.125rem]">Faça parte da Netimóveis</h2>
          <p className="col-span-2 text-[#C0C7CA] text-xl max-w-[39ch]">É uma empresa ou rede de imobiliárias? Associe-se e alcance um próximo patamar de eficiência e tecnologia.</p>
          <Link href="#" className="bg-white rounded-[0.625rem] text-orange-500 font-semibold px-4 py-3">Mais Sobre se Associar</Link>
          <Link href="#" className="border-b border-[#A1A7AA]">Conheça Nossos Produtos</Link>
        </div>
        <Image src="/images/puzzle.png" alt="Mão encaixando a ultima peça de um 'quebra-cabeça'" width={604} height={352} className="w-full h-full object-cover"/>
      </div>
    </section>
  );
};

export default JoinUs;