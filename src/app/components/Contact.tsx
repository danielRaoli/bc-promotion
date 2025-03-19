import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section className="bg-[#0B1793] py-12 px-4 w-full md:px-30">
        <div className="flex gap-8 items-center mb-16">
          <div className="w-12 h-[2px] bg-white "></div>
          <span className="text-white -tracking-tighter">CONTATO</span>
        </div>
        <p className="text-4xl my-8 md:text-6xl lg:text-8xl text-white font-semibold">
          CONVERSE COM A NOSSA EQUIPE
        </p>
        <p className="text-white text-xl">
          Crie seu Website ou Landing Page com A Brothers Company
        </p>

        <Link
          className="bg-blue-500 max-w-[400px] text-blue-950 p-4 flex gap-2 justify-center items-center rounded-md mt-8"
          href={"https://api.whatsapp.com/send?phone=5574998073272&text=Ola"}
          target="_blank"
        >
          <FaWhatsapp className="text-lg md:text-3xl" />
          <p className="text-lg font-semibold md:text-2xl"> VAMOS CONVERSAR</p>
        </Link>
      </section>
    </>
  );
}
