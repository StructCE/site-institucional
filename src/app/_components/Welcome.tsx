import { CloudImage } from "~/components/cldImage";
import SectionTitle from "./sectionTitle";

export default function QuemSomos() {
  return (
    <section>
      <div>
        <SectionTitle
          titulo="Quem somos"
          descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur atque praesentium cupiditate! Nemo optio repellendus ipsam veniam dolorem nihil neque atque reprehenderit, suscipit voluptatibus minima nostrum assumenda, excepturi libero!"
          textoButton="Conheça nossa equipe"
          linkButton="/equipe"
        />
      </div>

      <CloudImage
        width="1000"
        height="1000"
        src="cld-sample-5"
        quality={100}
        alt="Foto Sobre Nos"
        className="order-1 float-right md:order-2"
      />
    </section>
  );
}