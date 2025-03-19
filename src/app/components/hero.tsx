import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <section className="w-full flex flex-col md:items-start items-center md:px-36 md:pb-24 bg-[#0B1793] py-12">
        <div className="h-[40px] w-[200px] relative">
          <Image
            src={"/logobc.png"}
            alt="logo brothers company"
            className="object-contain"
            fill
          />
        </div>
        <div className="flex flex-col text-white md:text-start md:items-start items-center text-center mt-12">
          <p className="text-lg md:text-xl"> VOCÊ ESTÁ PRECISANDO DE UMA</p>
          <p className="text-4xl md:text-8xl font-semibold max-w-[800px]">
            LANDING PAGE OU UM SITE
          </p>
          <p className="md:text-xl">COM DESIGN ÍNCRIVEL E ALTA CONVERSÃO ?</p>
          <Link
            className="bg-blue-500 p-4 flex gap-2 items-center rounded-full mt-8"
            href={"https://api.whatsapp.com/send?phone=5574998073272&text=Ola"}
            target="_blank"
          >
            <FaWhatsapp />
            <span>VAMOS CONVERSAR</span>
          </Link>
        </div>
      </section>
    </>
  );
}
