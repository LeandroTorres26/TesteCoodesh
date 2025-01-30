import Link from 'next/link';
import Image from 'next/image'

const Reasons = () => {
  return (
    <section className="w-full mt-24">
      <div className="container mx-auto">
        <div className="flex justify-between items-end">
          <h2 className="text-[#393B3D] text-[2.125rem] font-bold">Para compradores, vendedores ou curiosos  {":)"}</h2>
          <Link href="#" className="text-[#4E5254] font-bold mb-1">Ver mais no Blog <Image src="/right-arrow.svg" alt="" width={14} height={12} className="inline-block"/></Link>
        </div>
        <ul className="grid grid-cols-3 gap-12 mt-12">
          <li>
            <Link href="#" className="flex flex-col gap-4">
              <Image src="/images/blog1.png" alt="Funcionários da NetImóveis reunidos vestindo seus crachás." width={384} height={252} className="rounded-2xl w-full"/>
              <div className="flex gap-6">
                <span className="text-[#848484] flex gap-1 items-center"><Image src="/clock.svg" alt="" width={16} height={16} className="inline-block"/>2 Min de Leitura</span>
                <span className="text-orange-500">Mundo Netimóveis</span>
              </div>
              <h3 className="text-[#3A3A3A] text-2xl font-bold">ENCONTRO NETIMÓVEIS BRASIL - N CONNECTIONS 2021: A FORÇA DOS NEGÓCIOS EM REDE</h3>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex flex-col gap-4">
              <Image src="/images/blog2.png" alt="Funcionários da NetImóveis reunidos vestindo seus crachás." width={384} height={252} className="rounded-2xl w-full"/>
              <div className="flex gap-6">
                <span className="text-[#848484] flex gap-1 items-center"><Image src="/clock.svg" alt="" width={16} height={16} className="inline-block"/>3 Min de Leitura</span>
                <span className="text-orange-500">Finanças</span>
              </div>
              <h3 className="text-[#3A3A3A] text-2xl font-bold">ORGANIZAÇÃO FINANCEIRA NAS IMOBILIÁRIAS</h3>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex flex-col gap-4">
              <Image src="/images/blog3.png" alt="Funcionários da NetImóveis reunidos vestindo seus crachás." width={384} height={252} className="rounded-2xl w-full"/>
              <div className="flex gap-6">
                <span className="text-[#848484] flex gap-1 items-center"><Image src="/clock.svg" alt="" width={16} height={16} className="inline-block"/>4 Min de Leitura</span>
                <span className="text-orange-500">Sucesso Profissional</span>
              </div>
              <h3 className="text-[#3A3A3A] text-2xl font-bold">EFICIÊNCIA NA GESTÃO DE CHAMADOS DE MANUTENÇÃO</h3>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Reasons;