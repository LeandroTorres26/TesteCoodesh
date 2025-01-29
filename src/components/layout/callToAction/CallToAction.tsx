import Image from 'next/image'

const CallToAction = () => {
  return (
    <section className="grid place-items-center pb-40 items-center justify-items-center bg-[url(/images/main-banner-desktop.png)] bg-cover bg-right bg-no-repeat h-banner w-full">
        <div className="flex flex-col justify-center items-center">
        <h2 className="text-34 text-white">Vende. Aluga. Conecta</h2>
        <div id="searchContainer" className="w-[770px] h-78 bg-white rounded-full mt-8 grid grid-cols-5">
            <div className="col-span-3 flex flex-col justify-center rounded-full pl-8 bg-white hover:bg-inputHover duration-100 ease-linear">
                <label htmlFor="" className="flex items-center"><Image src="/location.svg" alt="" width={24} height={24} className="inline-block mr-2"/>Localização</label>
                <input type="text" placeholder="Qual é a Localização?" className="bg-transparent outline-none"/>
            </div>
            <div className="col-span-2 grid grid-cols-3 grid-rows-2 justify-center rounded-full pl-8 bg-white hover:bg-inputHover duration-100 ease-linear">
                <label htmlFor="" className="flex items-center col-span-2 self-end"><Image src="/bed.svg" alt="" width={24} height={24} className="inline-block mr-2"/>Nº de Quartos</label>
                <input type="text" placeholder="Quantos Quartos?" className="bg-transparent col-span-2 self-start outline-none"/>
                <button className="bg-orange hover:bg-orangeHover duration-100 ease-linear rounded-full h-[58px] p-4 col-3/4 row-1/3 justify-self-center self-center"><Image src="/search.svg" alt="Buscar" width={24} height={24}/></button>
            </div>
        </div>
        </div>
    </section>
  );
};

export default CallToAction;