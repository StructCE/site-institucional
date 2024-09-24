import SeçãoArtigosLandingPage from "./_components/artigos/secaoArtigosLandingPage";
import HeaderLandingPage from "./_components/headerLandingPage";
import { FormsContato } from "./_components/formsContato";
import { Equipe } from "./_components/equipe/equipe";
import QuemSomos from "./_components/quemSomos/quemSomos";
import SecaoParceiros from "./_components/parceiros/secaoParceiros";
import { Portfolio } from "./_components/portfolio/portfolio";
import Valores from "./_components/quemSomos/mvv";
import Whosomos from "./_components/whosomos/whosomos";

export default async function Home() {
  return (
    <main>
      <HeaderLandingPage />
      <QuemSomos />
      <Valores />
      <Portfolio />
      <Whosomos />
      <SeçãoArtigosLandingPage />
      <Equipe />
      <SecaoParceiros />
      <FormsContato />
    </main>
  );
}
