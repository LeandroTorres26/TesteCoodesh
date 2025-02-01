import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import places from "../../../../assets/place.json";
import flats from "../../../../assets/flats.json";

import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

interface Place {
  name: string;
  state: {
    name: string;
    shortname: string;
  };
  placeId: number;
}

const Carousel = () => {
  const [Open, setOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("Belo Horizonte");

  const toggleDropdown = () => {
    setOpen(!Open);
  };

  const placeChange = (event: Place) => {
    setSelectedPlace(event.name);
    setOpen(false);
  };

  function NextArrow(props: CustomArrowProps) {
    const { className, style, onClick, currentSlide, slideCount } = props;
    const disabled = (currentSlide ?? 0) + 3 === (slideCount ?? 0) - 1;

    return (
      <div
        className={`${className} absolute right-5 top-[-3.5rem] flex items-center justify-center ${
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
        className={`${className} absolute right-[4.5rem] top-[-3.5rem] flex rotate-180 items-center justify-center ${
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
    dots: true,
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
          dots: false,
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="adsCarousel" className="mb-14 mt-16 w-full">
      <div className="container relative mx-auto pl-4 md:pl-0">
        <h2 className="text-xl font-bold text-[#3A3A3A] md:text-2xl md:text-[#393B3D]">
          Novos Anúncios em
          <div className="relative ml-2 inline-block">
            <button className="text-orange-500" onClick={toggleDropdown}>
              {selectedPlace}
              <Image
                src="/down-arrow-orange.svg"
                alt=""
                width={20}
                height={16}
                className="inline-block"
              />
            </button>
            {Open && (
              <ul className="absolute top-8 z-10 overflow-hidden whitespace-nowrap rounded-2xl bg-white shadow-xl">
                {places.map((place) => (
                  <li
                    key={place.placeId}
                    onClick={() => placeChange(place)}
                    className="cursor-pointer p-2 hover:bg-gray-100"
                  >
                    {place.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </h2>
        <Link
          href="#"
          className="mt-3 block text-[#2362AF] hover:brightness-75"
        >
          Ver todos os imóveis{" "}
          <Image
            src="/external-link.svg"
            alt=""
            width={24}
            height={24}
            className="inline-block"
          />
        </Link>
        <Slider
          {...settings}
          className="mt-4 grid grid-cols-4 gap-6 pr-10 md:pr-0"
        >
          {flats
            .filter((flat) => flat.City === selectedPlace)
            .map((flat, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="mr-4 block overflow-hidden rounded-2xl border"
                >
                  <Image
                    src="/images/flat-placeholder.png"
                    alt="Sala espaçosa com 2 sofas, lareira, mesa de centro e vista para varanda"
                    width={293}
                    height={198}
                    className="aspect-video w-full"
                  />
                  <div className="flex flex-col gap-1 p-5">
                    <h3 className="truncate font-bold" title={flat.Title}>
                      {flat.Title}
                    </h3>
                    <h4 className="text-[#848484]">{flat.Author}</h4>
                    <ul className="flex gap-2 text-sm text-[#3a3a3a]">
                      <li>{flat.Rooms} Quartos</li>
                      <li>2 Banheiros</li>
                      <li>4 Vagas</li>
                    </ul>
                    <ul className="flex gap-2 text-xs">
                      {flat.Tags.map((tag, index) => (
                        <li
                          key={index}
                          className="rounded-full bg-[#f3f3f3] px-[6px] py-[2px] capitalize text-[#48617e]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <em className="mt-2 text-xl font-bold text-orange-500">
                      {" "}
                      {flat.Price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        maximumFractionDigits: 0,
                      })}
                    </em>
                  </div>
                </Link>
              </li>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
