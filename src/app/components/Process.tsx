export default function Process() {
  const steps = [
    {
      step: "PASSO 1",
      title: "Briefing",
      description:
        "Entendemos seu negócio, público e objetivos para garantir uma abordagem certeira.",
    },
    {
      step: "PASSO 2",
      title: "Narrativa e Copy",
      description:
        "Criamos um texto persuasivo e envolvente, feito para capturar atenção e converter.",
    },
    {
      step: "PASSO 3",
      title: "Design",
      description:
        "Transformamos a copy em uma página visualmente impactante e funcional.",
    },
    {
      step: "PASSO 4",
      title: "Implementação",
      description:
        "Colocamos tudo em prática, garantindo uma experiência fluida e responsiva.",
    },
  ];

  return (
    <section className="bg-black w-full px-4 py-12 border-gray-500 border-b md:px-30 text-center">
      <p className="text-white text-4xl md:5xl mb-4">
        Como organizamos nosso processo
      </p>
      <p className="text-white text-xl mb-8">
        Para criar uma boa landing page precisamos de uma boa estratégia <br />
        segue o passo a passo
      </p>

      <div className="flex flex-col w-full md:flex-row px-4 md:px-30 gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#242424] flex flex-col flex-1 rounded-md gap-2 items-start p-8"
          >
            <span className="text-white font-semibold">{step.step}</span>
            <p className="text-blue-500 text-2xl font-semibold text-start">
              {step.title}
            </p>
            <p className="text-white text-start">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
