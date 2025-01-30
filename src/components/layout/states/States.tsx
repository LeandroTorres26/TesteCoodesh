import Link from 'next/link';
import Image from 'next/image'

import Slider, {CustomArrowProps} from "react-slick";
import "slick-carousel/slick/slick.css";

const States = () => {
  function NextArrow(props: CustomArrowProps) {
    const { className, style, onClick, currentSlide, slideCount } = props;
    const disabled = (currentSlide ?? 0) + 3  === (slideCount ?? 0) - 1;

    return (
        <div
        className={`${className} flex justify-center items-center absolute top-[-3.5rem] right-5 ${disabled ? '!opacity-50 !cursor-default' : 'cursor-pointer'}`}
        style={{ ...style, display: "block" }}
        onClick={disabled ? undefined : onClick}
        >
        <Image src="/slide-arrow.svg" alt="Avançar Slide" width={40} height={40} />
        </div>
    );
  }

  function PrevArrow(props: CustomArrowProps) {
    const { className, style, onClick, currentSlide } = props;
    const disabled = currentSlide === 0;

    return (
      <div
      className={`${className} flex justify-center items-center rotate-180 absolute top-[-3.5rem] right-[4.5rem] ${disabled ? '!opacity-50 !cursor-default' : 'cursor-pointer'}`}
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
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow />,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    <section className="w-full py-28">
        <div className="container mx-auto flex flex-col gap-28">
            <div className="grid grid-cols-5 border border-#D0D5D8 rounded-2xl overflow-hidden">
                <Image src="/images/advertise.png" width={822} height={420} alt="2 pessoas usando o Net Imóveis no celular." className="col-span-3 w-full h-full object-cover"/>
                <div className="flex flex-col items-start p-8 gap-4 col-span-2">
                    <h3 className="text-orange-500 font-bold">Quer Vender ou Alugar?</h3>
                    <h4 className="text-[#393B3D] font-bold text-[2.125rem] max-w-[16ch]">Anuncie grátis<br/> para mais de 100 mil pessoas todos os dias.</h4>
                    <Link href="#" className="border border-purple-700 rounded-[10px] bg-transparent hover:bg-purple-700 text-purple-700 hover:text-white py-3 px-4 mt-20 mb-2 duration-100 ease-linear">Anunciar Imóvel</Link>
                    <Link href="#" className="text-[#4E5254] font-bold">Saiba quanto vale seu imóvel <Image src="/right-arrow.svg" alt="" width={14} height={12} className="inline-block"/></Link>
                </div>
            </div>
            <div>
              <h2 className="text-[#393B3D] font-bold text-[2.125rem] mb-10">Prontos para te Receber em mais de 10 estados</h2>
              <Slider {...settings}>
                {cities.map((location, index) => (
                  <div key={index}>
                    <div className="flex flex-col">
                      <figure className="relative">
                        <Image src={location.image} alt="Foto da Igreja São Francisco de Assis da Pampulha, em Belo Horizonte" width={294} height={192} className="rounded-2xl brightness-[80%]"/>
                        <figcaption className="absolute bottom-0 p-4 text-2xl text-white font-bold">{location.state}</figcaption>
                      </figure>
                      <ul className="text-[#808587] text-sm flex flex-col gap-1 mt-4 ml-2">
                        {location.items.map((item, index) => (
                          <li key={index}><span className="text-orange-500">●</span>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="w-full bg-image-gradient bg-no-repeat bg-cover flex justify-between items-center py-8 px-14 rounded-2xl">
              <h3 className="text-[2.125rem] text-white font-bold max-w-[18ch]">Encontre a oportunidade Perfeita em Portugal</h3>
              <Link href="" className="bg-white text-orange-500 rounded-[0.625rem] font-semibold px-4 py-3">Ver imóveis em Portugal</Link>
            </div>
        </div>
    </section>
  );
};

export default States;