"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/mockup1.jpg", "/mockup2.jpg", "/mockup4.jpg"];

export default function ImageSection() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContador((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <section className="w-full min-h-[238px] md:min-h-[600px] relative">
      <Image
        src={`/mockup${contador}.jpg`}
        alt="Imagem de site feito pela brothers company"
        className="w-full h-auto object-contain"
        layout="intrinsic"
        width={1200}
        height={800}
      />
    </section>
  );
}
