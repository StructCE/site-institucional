import { valoresPraxis } from "~/lib/valoresPraxis";

export default function Valores() {
  return (
    <div className="mb-16 flex w-full flex-col justify-between bg-gradient-to-r from-vermelho-praxis to-vermelho-praxis-translucido px-8 py-8 md:flex-row lg:px-36 lg:py-16">
      <div className="mb-8 flex flex-col md:w-2/5">
        <p className="order-2 text-2xl font-semibold text-white md:order-1">
          Expandir o desenvolvimento de pessoas por meio de uma atuação
          inclusiva e estratégica que permite a construção de uma psicologia
          impactante no ecossistema.
        </p>
        <div className="order-1 flex h-full items-end justify-end gap-2 md:justify-normal">
          <div className="size-5 rounded-full bg-white shadow-lg md:size-9" />
          <div className="size-5 rounded-full bg-white shadow-lg md:size-9" />
        </div>
      </div>
      <div className="min-w-min bg-white px-8 pb-4 pt-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <h3 className="mb-6 font-lora text-2xl">Valores</h3>
        {valoresPraxis.map((valor, index) => {
          return (
            <p
              className="mb-4 flex items-center gap-2 font-noto text-lg font-semibold md:text-2xl"
              key={index}
            >
              {valor.icon}
              {valor.nome}
            </p>
          );
        })}
      </div>
    </div>
  );
}
