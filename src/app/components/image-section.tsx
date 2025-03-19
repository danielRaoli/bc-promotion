import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="w-full min-h-[238px] md:min-h-[600px] relative">
      <Image
        src={"/mockup.png"}
        alt="imagem exibindo algumas páginas feitas pela brothers company"
        className="object-cover"
        fill
      />
    </section>
  );
}
