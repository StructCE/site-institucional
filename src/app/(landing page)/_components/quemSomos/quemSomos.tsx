import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";

export default function QuemSomos() {
  return (
    <section
      id="QuemSomos"
      className="mx-8 my-8 flex flex-col lg:mx-36 lg:mb-16 lg:mt-24"
    >
      <div className="flex flex-col items-center justify-between md:flex-row">
        <p className=" order-2 font-lora text-2xl md:order-1 md:max-w-5xl md:text-4xl">
          A Praxis Consultoria Jr. é a empresa júnior de gestão de pessoas da
          Universidade de Brasília. Com 28 anos de experiência, trabalhamos com
          empresas públicas e privadas, seguindo as mais novas tendências do
          mercado. Estamos sempre preparados para orientar e personalizar os
          serviços conforme as suas necessidades.
        </p>
        <div className="order-1 mb-4 flex w-full justify-end gap-2 md:order-2 md:w-24 md:gap-6 md:self-end">
          <div className="size-5 rounded-full bg-vermelho-praxis drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]  md:size-9" />
          <div className="size-5 rounded-full bg-off-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:size-9" />
        </div>
      </div>
      <Link
        href={"/#contato"}
        className={buttonVariants({
          className:
            "mt-7 h-12 self-start rounded-sm border-2 border-vermelho-praxis bg-transparent font-noto text-vermelho-praxis shadow-md hover:text-off-white md:mt-14 md:h-14 md:text-lg",
        })}
      >
        Entre em Contato
      </Link>
    </section>
  );
}
