import Image from 'next/image'

const Blog = () => {
  return (
    <section className="w-full grid grid-cols-2 bg-">
        <div>
          <Image src="/Images/presentation.png" alt="Filha beijando a mãe na bochecha durante café da manhã" width={924} height={513} className="w-full h-full object-cover object-right-top"/>
        </div>
        <div className="bg-white-to-gray flex flex-col gap-12 ml-4 px-28 py-14">
          <h2 className="text-[#A1A7AA] text-2xl font-bold">Aqui vai uma frase de efeito</h2>
          <div>
            <h3 className="text-[#4E5254] font-bold relative"><Image src="/circle.svg" alt="" width={24} height={24} className="absolute -left-10"/>Motivo para negociar com a Netimóveis</h3>
            <p className="text-[#4E5254] mt-3 max-w-[46ch]">Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
          </div>
          <div className="mt-2">
            <h3 className="text-[#4E5254] font-bold relative"><Image src="/circle.svg" alt="" width={24} height={24} className="absolute -left-10"/>Motivo para negociar com a Netimóveis</h3>
            <p className="text-[#4E5254] mt-3 max-w-[46ch]">Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
          </div>
          <div className="mt-2">
            <h3 className="text-[#4E5254] font-bold relative"><Image src="/circle.svg" alt="" width={24} height={24} className="absolute -left-10"/>Motivo para negociar com a Netimóveis</h3>
            <p className="text-[#4E5254] mt-3 max-w-[46ch]">Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
          </div>
        </div>
    </section>
  );
};

export default Blog;