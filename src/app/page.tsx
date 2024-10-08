import { HydrateClient } from "~/trpc/server";
import AboutUs from "./_components/AboutUs";

export default async function Home() {
  return (
    <HydrateClient>
      <main>
        <AboutUs />
      </main>
    </HydrateClient>
  );
}
