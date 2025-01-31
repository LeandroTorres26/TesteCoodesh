import Link from "next/link";
import Image from "next/image";
import React from "react";

const Reasons = () => {
  return (
    <section className="mt-24 w-full">
      <div className="container mx-auto">
        <div className="flex items-end justify-between">
          <h2 className="text-[2.125rem] font-bold text-[#393B3D]">
            Para compradores, vendedores ou curiosos {":)"}
          </h2>
          <Link href="#" className="mb-1 font-bold text-[#4E5254]">
            Ver mais no Blog{" "}
            <Image
              src="/right-arrow.svg"
              alt=""
              width={14}
              height={12}
              className="inline-block"
            />
          </Link>
        </div>
        <ul className="mt-12 grid grid-cols-3 gap-12">
          <li>
            <Link href="#" className="flex flex-col gap-4">
              <Image
                src="/images/blog1.png"
                alt="Funcionários da NetImóveis reunidos vestindo seus crachás."
                width={384}
                height={252}
                className="w-full rounded-2xl"
              />
              <div className="flex gap-6">
                <span className="flex items-center gap-1 text-[#848484]">
                  <Image
                    src="/clock.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="inline-block"
                  />
                  2 Min de Leitura
                </span>
                <span className="text-orange-500">Mundo Netimóveis</span>
              </div>
              <h3 className="text-2xl font-bold text-[#3A3A3A]">
                ENCONTRO NETIMÓVEIS BRASIL - N CONNECTIONS 2021: A FORÇA DOS
                NEGÓCIOS EM REDE
              </h3>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex flex-col gap-4">
              <Image
                src="/images/blog2.png"
                alt="Funcionários da NetImóveis reunidos vestindo seus crachás."
                width={384}
                height={252}
                className="w-full rounded-2xl"
              />
              <div className="flex gap-6">
                <span className="flex items-center gap-1 text-[#848484]">
                  <Image
                    src="/clock.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="inline-block"
                  />
                  3 Min de Leitura
                </span>
                <span className="text-orange-500">Finanças</span>
              </div>
              <h3 className="text-2xl font-bold text-[#3A3A3A]">
                ORGANIZAÇÃO FINANCEIRA NAS IMOBILIÁRIAS
              </h3>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex flex-col gap-4">
              <Image
                src="/images/blog3.png"
                alt="Funcionários da NetImóveis reunidos vestindo seus crachás."
                width={384}
                height={252}
                className="w-full rounded-2xl"
              />
              <div className="flex gap-6">
                <span className="flex items-center gap-1 text-[#848484]">
                  <Image
                    src="/clock.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="inline-block"
                  />
                  4 Min de Leitura
                </span>
                <span className="text-orange-500">Sucesso Profissional</span>
              </div>
              <h3 className="text-2xl font-bold text-[#3A3A3A]">
                EFICIÊNCIA NA GESTÃO DE CHAMADOS DE MANUTENÇÃO
              </h3>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Reasons;
