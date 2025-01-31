import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";

const Filters = () => {
  const [activeTab, setActiveTab] = useState("sun");

  function NextArrow(props: CustomArrowProps) {
    const { className, style, onClick, currentSlide } = props;
    const disabled = (currentSlide ?? 0) > 0;

    return (
      <div
        className={`${className} absolute right-0 top-2/4 z-10 -translate-y-2/4 ${
          disabled ? "!cursor-default !opacity-0" : "cursor-pointer"
        }`}
        style={{ ...style, display: "block" }}
        onClick={disabled ? undefined : onClick}
      >
        <Image
          src="/chevron-right.svg"
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
        className={`${className} absolute left-0 top-2/4 z-10 -translate-y-2/4 rotate-180 ${
          disabled ? "!cursor-default !opacity-0" : "cursor-pointer"
        }`}
        style={{ ...style, display: "block" }}
        onClick={disabled ? undefined : onClick}
      >
        <Image src="/chevron-right.svg" alt="Recuar" width={40} height={40} />
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
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <section
      className={`w-full bg-cover ${activeTab === "sun" ? "bg-[url(/images/banner-sun.png)]" : ""} ${activeTab === "pet" ? "bg-[url(/images/banner-pet.png)]" : ""} ${activeTab === "bus" ? "bg-[url(/images/banner-bus.png)]" : ""} ${activeTab === "balcony" ? "bg-[url(/images/banner-balcony.png)]" : ""} ${activeTab === "backyard" ? "bg-[url(/images/banner-backyard.png)]" : ""} ${activeTab === "internet" ? "bg-[url(/images/banner-internet.png)]" : ""} `}
    >
      <div className="container mx-auto grid w-full grid-cols-2 py-[72px]">
        <div className="max-w-lg justify-self-start rounded-2xl bg-white shadow-lg">
          <nav className="w-full border-b-[1px] border-[#E1E5E9]">
            <Slider {...settings}>
              <div className="!flex justify-center">
                <li
                  className={`!flex max-w-[87px] cursor-pointer flex-col items-center p-4 text-center hover:text-[#393B3D] ${
                    activeTab === "sun"
                      ? "border-b-2 border-orange-500 text-[#393B3D]"
                      : "text-[#808587]"
                  }`}
                  onClick={() => setActiveTab("sun")}
                >
                  <Image src="/sun.svg" alt="" width={24} height={24} />
                  Pega Sol
                </li>
              </div>
              <div className="!flex justify-center">
                <li
                  className={`!flex max-w-[87px] cursor-pointer flex-col items-center p-4 text-center hover:text-[#393B3D] ${
                    activeTab === "pet"
                      ? "border-b-2 border-orange-500 text-[#393B3D]"
                      : "text-[#808587]"
                  }`}
                  onClick={() => setActiveTab("pet")}
                >
                  <Image src="/pet.svg" alt="" width={24} height={24} />
                  Aceitam Pet
                </li>
              </div>
              <div className="!flex justify-center">
                <li
                  className={`!flex max-w-[87px] cursor-pointer flex-col items-center p-4 text-center hover:text-[#393B3D] ${
                    activeTab === "bus"
                      ? "border-b-2 border-orange-500 text-[#393B3D]"
                      : "text-[#808587]"
                  }`}
                  onClick={() => setActiveTab("bus")}
                >
                  <Image src="/bus.svg" alt="" width={24} height={24} />
                  Ônibus Perto
                </li>
              </div>
              <div className="!flex justify-center">
                <li
                  className={`!flex max-w-[87px] cursor-pointer flex-col items-center p-4 text-center hover:text-[#393B3D] ${
                    activeTab === "balcony"
                      ? "border-b-2 border-orange-500 text-[#393B3D]"
                      : "text-[#808587]"
                  }`}
                  onClick={() => setActiveTab("balcony")}
                >
                  <Image src="/circle.svg" alt="" width={24} height={24} />
                  Tem Varanda
                </li>
              </div>
              <div className="!flex justify-center">
                <li
                  className={`!flex max-w-[87px] cursor-pointer flex-col items-center p-4 text-center hover:text-[#393B3D] ${
                    activeTab === "backyard"
                      ? "border-b-2 border-orange-500 text-[#393B3D]"
                      : "text-[#808587]"
                  }`}
                  onClick={() => setActiveTab("backyard")}
                >
                  <Image src="/circle.svg" alt="" width={24} height={24} />
                  Tem Quintal
                </li>
              </div>
              <div className="!flex justify-center">
                <li
                  className={`!flex max-w-[87px] cursor-pointer flex-col items-center p-4 text-center hover:text-[#393B3D] ${
                    activeTab === "internet"
                      ? "border-b-2 border-orange-500 text-[#393B3D]"
                      : "text-[#808587]"
                  }`}
                  onClick={() => setActiveTab("internet")}
                >
                  <Image src="/circle.svg" alt="" width={24} height={24} />
                  Boa Internet
                </li>
              </div>
            </Slider>
          </nav>
          {activeTab === "sun" && (
            <div className="flex min-h-[359px] flex-col items-start gap-4 p-10">
              <h3 className="max-w-[13ch] text-[2.125rem] font-bold text-[#393B3D]">
                Sol que ilumina as suas manhãs
              </h3>
              <p className="text-[#808587]">
                Busque imóveis que pegam Sol durante a manhã para que você fique
                com a vitamina D em dia ;)
              </p>
              <Link
                href="#"
                className="mb-2 mt-4 rounded-[10px] border border-purple-700 bg-transparent px-4 py-3 text-purple-700 duration-100 ease-linear hover:bg-purple-700 hover:text-white"
              >
                Buscar Imóveis
              </Link>
            </div>
          )}
          {activeTab === "pet" && (
            <div className="flex min-h-[359px] flex-col items-start gap-4 p-10">
              <h3 className="max-w-[13ch] text-[2.125rem] font-bold text-[#393B3D]">
                Imóveis que aceitam pets
              </h3>
              <p className="text-[#808587]">
                perspiciatis unde omnis iste natus erron sit voluptatem
                accusanti sutan etsi sinmos.
              </p>
              <Link
                href="#"
                className="mb-2 mt-4 rounded-[10px] border border-purple-700 bg-transparent px-4 py-3 text-purple-700 duration-100 ease-linear hover:bg-purple-700 hover:text-white"
              >
                Buscar Imóveis
              </Link>
            </div>
          )}
          {activeTab === "bus" && (
            <div className="flex min-h-[359px] flex-col items-start gap-4 p-10">
              <h3 className="max-w-[16ch] text-[2.125rem] font-bold text-[#393B3D]">
                Imóveis com ponto de ônibus perto
              </h3>
              <p className="text-[#808587]">
                perspiciatis unde omnis iste natus erron sit voluptatem
                accusanti sutan etsi sinmos.
              </p>
              <Link
                href="#"
                className="mb-2 mt-4 rounded-[10px] border border-purple-700 bg-transparent px-4 py-3 text-purple-700 duration-100 ease-linear hover:bg-purple-700 hover:text-white"
              >
                Buscar Imóveis
              </Link>
            </div>
          )}
          {activeTab === "balcony" && (
            <div className="flex min-h-[359px] flex-col items-start gap-4 p-10">
              <h3 className="max-w-[12ch] text-[2.125rem] font-bold text-[#393B3D]">
                Imóveis com Varanda
              </h3>
              <p className="text-[#808587]">
                perspiciatis unde omnis iste natus erron sit voluptatem
                accusanti sutan etsi sinmos.
              </p>
              <Link
                href="#"
                className="mb-2 mt-4 rounded-[10px] border border-purple-700 bg-transparent px-4 py-3 text-purple-700 duration-100 ease-linear hover:bg-purple-700 hover:text-white"
              >
                Buscar Imóveis
              </Link>
            </div>
          )}
          {activeTab === "backyard" && (
            <div className="flex min-h-[359px] flex-col items-start gap-4 p-10">
              <h3 className="max-w-[12ch] text-[2.125rem] font-bold text-[#393B3D]">
                Imóveis com Quintal
              </h3>
              <p className="text-[#808587]">
                perspiciatis unde omnis iste natus erron sit voluptatem
                accusanti sutan etsi sinmos.
              </p>
              <Link
                href="#"
                className="mb-2 mt-4 rounded-[10px] border border-purple-700 bg-transparent px-4 py-3 text-purple-700 duration-100 ease-linear hover:bg-purple-700 hover:text-white"
              >
                Buscar Imóveis
              </Link>
            </div>
          )}
          {activeTab === "internet" && (
            <div className="flex min-h-[359px] flex-col items-start gap-4 p-10">
              <h3 className="max-w-[12ch] text-[2.125rem] font-bold text-[#393B3D]">
                Imóveis com Boa Internet
              </h3>
              <p className="text-[#808587]">
                perspiciatis unde omnis iste natus erron sit voluptatem
                accusanti sutan etsi sinmos.
              </p>
              <Link
                href="#"
                className="mb-2 mt-4 rounded-[10px] border border-purple-700 bg-transparent px-4 py-3 text-purple-700 duration-100 ease-linear hover:bg-purple-700 hover:text-white"
              >
                Buscar Imóveis
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Filters;
