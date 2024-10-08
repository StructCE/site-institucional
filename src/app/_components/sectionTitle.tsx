"use client";
import { redirect } from "next/navigation";
import { Button } from "~/components/ui/button";

interface SectionTitleProps {
  titulo: string;
  descricao: string;
  textoButton: string;
  linkButton: string;
}

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <>
      <div>
        <h1 className="mb-4 text-5xl font-bold">{props.titulo}</h1>
        <span className="text-base">{props.descricao}</span>
      </div>
      <div className="mt-6">
        <Button
          className="bg-black text-white hover:bg-black/80"
          onClick={() => redirect(props.linkButton)}
        >
          {props.textoButton}
        </Button>
      </div>
    </>
  );
}