import {
  GraduationCap,
  HeartHandshake,
  Icon,
  Scale,
  Users,
} from "lucide-react";
import { tuxedo } from "@lucide/lab";

export const valoresPraxis = [
  {
    nome: "Trabalho em Equipe",
    icon: <Users className="stroke-vermelho-praxis" size={24} />,
  },
  {
    nome: "Empatia",
    icon: <HeartHandshake className="stroke-vermelho-praxis" size={24} />,
  },
  {
    nome: "Excelência em Resultados",
    icon: (
      <GraduationCap className="shrink-0 stroke-vermelho-praxis" size={24} />
    ),
  },
  {
    nome: "Profissionalismo",
    icon: (
      <Icon iconNode={tuxedo} className="stroke-vermelho-praxis" size={24} />
    ),
  },
  {
    nome: "Ética",
    icon: <Scale className="stroke-vermelho-praxis" size={24} />,
  },
];
