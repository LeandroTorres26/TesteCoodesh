import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';

import Slider, {CustomArrowProps} from "react-slick";
import "slick-carousel/slick/slick.css";

const Filters = () => {
  const [activeTab, setActiveTab] = useState('sun');

  function NextArrow(props: CustomArrowProps) {
    const { className, style, onClick, currentSlide } = props;
    const disabled = (currentSlide ?? 0) > 0;
    console.log("disabled right", disabled);

    return (
      <div
        className={`${className} absolute top-2/4 -translate-y-2/4 right-0 z-10 ${disabled ? '!opacity-0 !cursor-default' : 'cursor-pointer'}`}
        style={{ ...style, display: "block" }}
        onClick={disabled ? undefined : onClick}
      >
        <Image src="/chevron-right.svg" alt="Avançar Slide" width={40} height={40} />
      </div>
    );
  }

  function PrevArrow(props: CustomArrowProps) {
    const { className, style, onClick, currentSlide } = props;
    const disabled = currentSlide === 0;
    console.log("disabled left", disabled);
    return (
      <div
        className={`${className} rotate-180 absolute top-2/4 -translate-y-2/4 left-0 z-10 ${disabled ? '!opacity-0 !cursor-default' : 'cursor-pointer'}`}
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
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow />,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <section className={`w-full bg-cover bg-[url(/images/banner-${activeTab}.png)]`}>
      <div className="container mx-auto w-full grid grid-cols-2 py-[72px]">
        <div className="bg-white rounded-2xl max-w-lg justify-self-start">
          <nav className="w-full border-b-2 border-[#E1E5E9]">
              <Slider {...settings}>
                  <div className="!flex justify-center"><li className={`max-w-[87px] text-center !flex flex-col items-center p-4 cursor-pointer hover:text-[#393B3D] ${activeTab === 'sun' ? 'text-[#393B3D] border-b-4 border-orange' : 'text-[#808587]'}`} onClick={() => setActiveTab('sun')}><Image src="/sun.svg" alt="" width={24} height={24}/>Pega Sol</li></div>
                  <div className="!flex justify-center"><li className={`max-w-[87px] text-center !flex flex-col items-center p-4 cursor-pointer hover:text-[#393B3D] ${activeTab === 'pet' ? 'text-[#393B3D] border-b-4 border-orange' : 'text-[#808587]'}`} onClick={() => setActiveTab('pet')}><Image src="/pet.svg" alt="" width={24} height={24}/>Aceitam Pet</li></div>
                  <div className="!flex justify-center"><li className={`max-w-[87px] text-center !flex flex-col items-center p-4 cursor-pointer hover:text-[#393B3D] ${activeTab === 'bus' ? 'text-[#393B3D] border-b-4 border-orange' : 'text-[#808587]'}`} onClick={() => setActiveTab('bus')}><Image src="/bus.svg" alt="" width={24} height={24}/>Ônibus Perto</li></div>
                  <div className="!flex justify-center"><li className={`max-w-[87px] text-center !flex flex-col items-center p-4 cursor-pointer hover:text-[#393B3D] ${activeTab === 'balcony' ? 'text-[#393B3D] border-b-4 border-orange' : 'text-[#808587]'}`} onClick={() => setActiveTab('balcony')}><Image src="/circle.svg" alt="" width={24} height={24}/>Tem Varanda</li></div>
                  <div className="!flex justify-center"><li className={`max-w-[87px] text-center !flex flex-col items-center p-4 cursor-pointer hover:text-[#393B3D] ${activeTab === 'backyard' ? 'text-[#393B3D] border-b-4 border-orange' : 'text-[#808587]'}`} onClick={() => setActiveTab('backyard')}><Image src="/circle.svg" alt="" width={24} height={24}/>Tem Quintal</li></div>
                  <div className="!flex justify-center"><li className={`max-w-[87px] text-center !flex flex-col items-center p-4 cursor-pointer hover:text-[#393B3D] ${activeTab === 'internet' ? 'text-[#393B3D] border-b-4 border-orange' : 'text-[#808587]'}`} onClick={() => setActiveTab('internet')}><Image src="/circle.svg" alt="" width={24} height={24}/>Boa Internet</li></div>
              </Slider>
          </nav>
            {activeTab === 'sun' && (
              <div className="p-10 flex flex-col items-start gap-4 min-h-[359px]">
                <h3 className="text-[#393B3D] text-[2.125rem] font-bold max-w-[12ch]">Sol que ilumina as suas manhãs</h3>
                <p className="text-[#808587]">Busque imóveis que pegam Sol durante a manhã para que você fique com a vitamina D em dia  ;)</p>
                <Link href="#" className="border border-purple rounded-[10px] bg-transparent hover:bg-purple text-purple hover:text-white py-3 px-4 mt-4 mb-2 duration-100 ease-linear">Buscar Imóveis</Link>
              </div>
            )}
            {activeTab === 'pet' && (
              <div className="p-10 flex flex-col items-start gap-4 min-h-[359px]">
                <h3 className="text-[#393B3D] text-[2.125rem] font-bold max-w-[12ch]">Imóveis que aceitam pets</h3>
                <p className="text-[#808587]">perspiciatis unde omnis iste natus erron sit voluptatem accusanti sutan etsi sinmos.</p>
                <Link href="#" className="border border-purple rounded-[10px] bg-transparent hover:bg-purple text-purple hover:text-white py-3 px-4 mt-4 mb-2 duration-100 ease-linear">Buscar Imóveis</Link>
              </div>
            )}
            {activeTab === 'bus' && (
              <div className="p-10 flex flex-col items-start gap-4 min-h-[359px]">
                <h3 className="text-[#393B3D] text-[2.125rem] font-bold max-w-[14ch]">Imóveis com ponto de ônibus perto</h3>
                <p className="text-[#808587]">perspiciatis unde omnis iste natus erron sit voluptatem accusanti sutan etsi sinmos.</p>
                <Link href="#" className="border border-purple rounded-[10px] bg-transparent hover:bg-purple text-purple hover:text-white py-3 px-4 mt-4 mb-2 duration-100 ease-linear">Buscar Imóveis</Link>
              </div>
            )}
            {activeTab === 'balcony' && (
              <div className="p-10 flex flex-col items-start gap-4 min-h-[359px]">
                <h3 className="text-[#393B3D] text-[2.125rem] font-bold max-w-[12ch]">Imóveis com varanda</h3>
                <p className="text-[#808587]">perspiciatis unde omnis iste natus erron sit voluptatem accusanti sutan etsi sinmos.</p>
                <Link href="#" className="border border-purple rounded-[10px] bg-transparent hover:bg-purple text-purple hover:text-white py-3 px-4 mt-4 mb-2 duration-100 ease-linear">Buscar Imóveis</Link>
              </div>
            )}
            {activeTab === 'backyard' && (
              <div className="p-10 flex flex-col items-start gap-4 min-h-[359px]">
                <h3 className="text-[#393B3D] text-[2.125rem] font-bold max-w-[12ch]">Imóveis com Quintal</h3>
                <p className="text-[#808587]">perspiciatis unde omnis iste natus erron sit voluptatem accusanti sutan etsi sinmos.</p>
                <Link href="#" className="border border-purple rounded-[10px] bg-transparent hover:bg-purple text-purple hover:text-white py-3 px-4 mt-4 mb-2 duration-100 ease-linear">Buscar Imóveis</Link>
              </div>
            )}
            {activeTab === 'internet' && (
              <div className="p-10 flex flex-col items-start gap-4 min-h-[359px]">
                <h3 className="text-[#393B3D] text-[2.125rem] font-bold max-w-[12ch]">Imóveis com Boa Internet</h3>
                <p className="text-[#808587]">perspiciatis unde omnis iste natus erron sit voluptatem accusanti sutan etsi sinmos.</p>
                <Link href="#" className="border border-purple rounded-[10px] bg-transparent hover:bg-purple text-purple hover:text-white py-3 px-4 mt-4 mb-2 duration-100 ease-linear">Buscar Imóveis</Link>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default Filters;