import Link from "next/link";
import Image from "next/image";
import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";

const States = () => {
  function NextArrow(props: CustomArrowProps) {
    const { className, style, onClick, currentSlide, slideCount } = props;
    const disabled = (currentSlide ?? 0) + 3 === (slideCount ?? 0) - 1;

    return (
      <div
        className={`${className} absolute right-0 top-[-4rem] flex items-center justify-center md:right-5 md:top-[-3.5rem] ${
          disabled ? "!cursor-default !opacity-50" : "cursor-pointer"
        }`}
        style={{ ...style, display: "block" }}
        onClick={disabled ? undefined : onClick}
      >
        <Image
          src="/slide-arrow.svg"
          alt="Avançar Slide"
          width={40}
          height={40}
        />
      </div>
    );
  }

  function PrevArrow(props: CustomArrowProps) {
    const { className, style, onClick, currentSlide } = props;
    const disabled = currentSlide === 0;

    return (
      <div
        className={`${className} absolute right-[3.2rem] top-[-4rem] flex rotate-180 items-center justify-center md:right-[4.5rem] md:top-[-3.5rem] ${
          disabled ? "!cursor-default !opacity-50" : "cursor-pointer"
        }`}
        style={{ ...style, display: "block" }}
        onClick={disabled ? undefined : onClick}
      >
        <Image src="/slide-arrow.svg" alt="Recuar" width={40} height={40} />
      </div>
    );
  }

  const settings = {
    dots: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 748,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cities = [
    {
      image: "/images/MG.png",
      alt: "Foto da Igreja São Francisco de Assis da Pampulha, em Belo Horizonte, Minas Gerais",
      city: "Belo Horizonte",
      state: "Minas Gerais",
      items: [
        "Casas à venda em Belo Horizonte",
        "Apto. à venda em Belo Horizonte",
        "Casas para Locação em Belo Horizonte",
        "Apto. para locação em Belo Horizonte",
      ],
    },
    {
      image: "/images/SP.png",
      alt: "Foto da Ponte Estaiada, em São Paulo",
      city: "São Paulo",
      state: "São Paulo",
      items: [
        "Casas à venda em São Paulo",
        "Apto. à venda em São Paulo",
        "Casas para Locação em São Paulo",
        "Apto. para locação em São Paulo",
      ],
    },
    {
      image: "/images/RS.png",
      alt: "Foto do Arco do Triunfo do Parque Farroupilha, em Porto Alegre, Rio Grande do Sul",
      city: "Porto Alegre",
      state: "Rio Grande do Sul",
      items: [
        "Casas à venda em Rio Grande do Sul",
        "Apto. à venda em Rio Grande do Sul",
        "Casas para Locação em Rio Grande do Sul",
        "Apto. para locação em Rio Grande do Sul",
      ],
    },
    {
      image: "/images/RJ.png",
      alt: "Foto da Estátua do Cristo Redentor, no Rio de Janeiro",
      city: "Rio de Janeiro",
      state: "Rio de Janeiro",
      items: [
        "Casas à venda em Rio de Janeiro",
        "Apto. à venda em Rio de Janeiro",
        "Casas para Locação em Rio de Janeiro",
        "Apto. para locação em Rio de Janeiro",
      ],
    },
    {
      image: "/images/DF.png",
      alt: "Foto do Palácio do Congresso Nacional, em Brasília, Distrito Federal",
      city: "Brasília",
      state: "Rio de Janeiro",
      items: [
        "Casas à venda em Brasília",
        "Apto. à venda em Brasília",
        "Casas para Locação em Brasília",
        "Apto. para locação em Brasília",
      ],
    },
    {
      image: "/images/ES.png",
      alt: "Foto da Ponte Deputado Darcy Castello de Mendonça, mais conhecida como Terceira Ponte, em Vitória no Espírito Santo",
      city: "Vitória",
      state: "Espírito Santo",
      items: [
        "Casas à venda no Espírito Santo",
        "Apto. à venda no Espírito Santo",
        "Casas para Locação no Espírito Santo",
        "Apto. para locação no Espírito Santo",
      ],
    },
    {
      image: "/images/SC.png",
      alt: "Foto da Ponte Hercílio Luz, em Florianópolis, Santa Catarina",
      city: "Florianópolis",
      state: "Santa Catarina",
      items: [
        "Casas à venda em Santa Catarina",
        "Apto. à venda em Santa Catarina",
        "Casas para Locação em Santa Catarina",
        "Apto. para locação em Santa Catarina",
      ],
    },
    {
      image: "/images/PB.png",
      alt: "Foto da Praia de Tambaú, em João Pessoa, Paraíba",
      city: "Florianópolis",
      state: "Santa Catarina",
      items: [
        "Casas à venda em João Pessoa",
        "Apto. à venda em João Pessoa",
        "Casas para Locação em João Pessoa",
        "Apto. para locação em João Pessoa",
      ],
    },
    {
      image: "/images/BA.png",
      alt: "Foto do Farol da Barra, em Salvador, Bahia",
      city: "Florianópolis",
      state: "Santa Catarina",
      items: [
        "Casas à venda em Salvador",
        "Apto. à venda em Salvador",
        "Casas para Locação em Salvador",
        "Apto. para locação em Salvador",
      ],
    },
    {
      image: "/images/CE.png",
      alt: "Foto da Praia de Iracema, em Fortaleza, Ceará",
      city: "Florianópolis",
      state: "Santa Catarina",
      items: [
        "Casas à venda em Fortaleza",
        "Apto. à venda em Fortaleza",
        "Casas para Locação em Fortaleza",
        "Apto. para locação em Fortaleza",
      ],
    },
    {
      image: "/images/PT.png",
      alt: "Foto do Rio Mondego cruzando a cidade de Coimbra, Portugal",
      city: "Coimbra",
      state: "Portugal",
      items: [
        "Casas à venda em Portugal",
        "Apto. à venda em Portugal",
        "Casas para Locação em Portugal",
        "Apto. para locação em Portugal",
      ],
    },
  ];

  return (
    <section id="statesCarousel" className="w-full py-10 md:py-28">
      <div className="container mx-auto flex flex-col gap-20 md:gap-28">
        <div className="flex flex-col-reverse gap-10 overflow-hidden md:grid md:grid-cols-5 md:gap-0 md:rounded-2xl md:border md:border-[#D0D5D8]">
          <Image
            src="/images/advertise.png"
            width={822}
            height={420}
            alt="2 pessoas usando o Net Imóveis no celular."
            className="col-span-3 h-full w-full object-cover"
          />
          <div className="col-span-2 flex flex-col items-start gap-4 px-4 pt-8 md:p-8">
            <h3 className="font-bold text-orange-500">
              Quer Vender ou Alugar?
            </h3>
            <h4 className="max-w-[19ch] text-[2.125rem] font-bold text-[#4E5254] md:text-[#393B3D]">
              Anuncie grátis
              <br /> para mais de 100 mil pessoas todos os dias.
            </h4>
            <Link
              href="#"
              className="mb-2 rounded-[10px] border border-purple-700 bg-transparent px-4 py-3 font-semibold text-purple-700 duration-100 ease-linear hover:bg-purple-700 hover:text-white md:mt-20"
            >
              Anunciar Imóvel
            </Link>
            <Link href="#" className="font-bold text-[#4E5254]">
              Saiba quanto vale seu imóvel{" "}
              <Image
                src="/right-arrow.svg"
                alt=""
                width={14}
                height={12}
                className="inline-block"
              />
            </Link>
          </div>
        </div>
        <div className="px-4">
          <h2 className="mb-5 max-w-[25ch] text-base font-bold text-[#393B3D] md:mb-10 md:max-w-none md:text-[2.125rem]">
            Prontos para te Receber em mais de 10 estados
          </h2>
          <Slider {...settings} className="pr-7 md:pr-0">
            {cities.map((location, index) => (
              <div key={index} className="pr-4">
                <div className="flex flex-col">
                  <figure className="relative">
                    <Image
                      src={location.image}
                      alt="Foto da Igreja São Francisco de Assis da Pampulha, em Belo Horizonte"
                      width={294}
                      height={192}
                      className="w-full rounded-2xl brightness-[80%]"
                    />
                    <figcaption className="absolute bottom-0 p-4 text-2xl font-bold text-white">
                      {location.state}
                    </figcaption>
                  </figure>
                  <ul className="ml-2 mt-4 flex flex-col gap-1 text-sm text-[#808587]">
                    {location.items.map((item, index) => (
                      <li key={index}>
                        <span className="mr-1 text-orange-500">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="px-4 md:px-0">
          <div className="flex w-full flex-col items-start justify-between gap-8 rounded-2xl bg-image-gradient-mobile bg-cover bg-no-repeat px-4 py-8 md:flex-row md:items-center md:bg-image-gradient-desktop md:px-14">
            <h3 className="max-w-[21ch] text-2xl font-bold text-white md:text-[2.125rem]">
              Encontre a oportunidade Perfeita em Portugal
            </h3>
            <Link
              href=""
              className="rounded-[0.625rem] bg-white px-4 py-3 font-semibold text-orange-500"
            >
              Ver imóveis em Portugal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default States;
