import Link from 'next/link';
import Image from 'next/image';
import { useState} from 'react';
import places from '../../../../assets/place.json';
import flats from '../../../../assets/flats.json';

import Slider, {CustomArrowProps} from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

interface Place {
  name: string;
  state: {
    name: string;
    shortname: string;
  }
  placeId: number;
}

const Carousel = () => {
  const [Open, setOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState('Belo Horizonte');

  const toggleDropdown = () => {
    setOpen(!Open);
  };

  const placeChange = (event: Place) => {
    setSelectedPlace(event.name);
    setOpen(false);
  };


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
    dots: true,
    arrows: true,
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow />,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section className="w-full mt-16">
        <div className="container mx-auto relative">
            <h2 className="text-2xl">
              Novos Anúncios em
              <div className='relative inline-block ml-2'>
                <button className="text-orange-500" onClick={toggleDropdown}>{selectedPlace}<Image src="/down-arrow-orange.svg" alt="" width={20} height={16} className="inline-block"/></button>
                {Open && (
                  <ul className="absolute top-8 whitespace-nowrap rounded-2xl shadow-xl overflow-hidden bg-white z-10">
                    {places.map((place) => (
                      <li key={place.placeId} onClick={() => placeChange(place)} className="cursor-pointer hover:bg-gray-100 p-2">
                        {place.name}
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            </h2>
            <Link href="#" className="text-[#2362AF] hover:brightness-75 visited:text-purple-700-600">Ver todos os imóveis <Image src="/external-link.svg" alt="" width={24} height={24} className="inline-block"/></Link>
            <Slider {...settings} className="grid grid-cols-4 gap-6 mt-4">
              {flats.filter(flat => flat.City === selectedPlace).map((flat, index) => (
                <li key={index}>
                  <Link href="#" className="block border rounded-2xl overflow-hidden mr-4">
                    <Image src="/images/flat-placeholder.png" alt="Sala espaçosa com 2 sofas, lareira, mesa de centro e vista para varanda" width={293} height={198} className="w-full aspect-video"/>
                    <div className="flex flex-col p-5 gap-1">
                      <h3 className="font-bold truncate" title={flat.Title}>{flat.Title}</h3>
                      <h4 className="text-[#848484]">{flat.Author}</h4>
                      <ul className="flex gap-2 text-sm text-[#3a3a3a]">
                        <li>{flat.Rooms} Quartos</li>
                        <li>2 Banheiros</li>
                        <li>4 Vagas</li>
                      </ul>
                      <ul className="flex gap-2 text-xs">{flat.Tags.map((tag, index) => (
                        <li key={index} className="bg-[#f3f3f3] text-[#48617e] py-[2px] px-[6px] rounded-full capitalize">{tag}</li>
                      ))}</ul>
                      <em className="text-orange-500 font-bold mt-2 text-xl"> {flat.Price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0})}</em>
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