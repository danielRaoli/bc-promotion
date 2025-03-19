import Link from "next/link";
import { FaRegCircleCheck } from "react-icons/fa6";
import Image from "next/image";

const images = ["/contabilidadesite.png", "/gsanalitycs.png", "/ducalsite.png"];

const offers = [
  {
    title: "Aumenta Conversão",
    description: "não é só “bonitinha”, é uma máquina de persuasão.",
  },
  {
    title: "Texto que prende",
    description: "sem enrolação, sem clichês, direto ao ponto.",
  },
  {
    title: "Design estratégico",
    description:
      "cada detalhe pensado pra guiar o cliente até o “SIM, EU QUERO”.",
  },
];

export default function Projects() {
  return (
    <section
      id="resultados-section"
      className="bg-black w-full py-20 md:px-48 px-4 relative"
    >
      <p className="text-2xl text-center md:text-5xl font-semibold mb-12 text-white">
        Veja Alguns dos Resultados que Nós Entregamos
      </p>

      {images.map((src, index) => (
        <div
          key={index}
          className="relative w-full h-auto flex justify-center overflow-hidden"
        >
          <Image
            src={src}
            alt="Imagem de site feito pela brothers company"
            className="w-full h-auto object-contain"
            layout="intrinsic"
            width={1200}
            height={800}
          />
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      ))}

      <div className="w-full flex justify-center p-8">
        <Link
          className="bg-blue-400 text-blue-950 text-center md:text-2xl font-semibold p-4 rounded-full mx-auto"
          href="https://api.whatsapp.com/send?phone=5574998073272&text=Olá"
        >
          Quero Uma Landing Page
        </Link>
      </div>

      <div className="text-white flex flex-col lg:flex-row md:gap-6 lg:gap-12 px-4 items-center w-full py-12">
        <div className="lg:text-start text-center md:max-w-[30%]">
          <p className="text-3xl lg:text-5xl">Mas afinal</p>
          <p className=" text-lg mb-4 ">
            Qual é o real intuito de ter uma landing page? o que torna essa
            oferta única?
          </p>
        </div>

        <div className="grid lg:grid-cols-3 w-full gap-4">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="rounded-md bg-blue-400 p-6 text-blue-950 flex flex-col w-full max-h-[350px] items-start gap-4"
            >
              <FaRegCircleCheck className="text-white text-2xl" />
              <h3 className="text-3xl md:text-2xl font-semibold">
                {offer.title}
              </h3>
              <p>{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
