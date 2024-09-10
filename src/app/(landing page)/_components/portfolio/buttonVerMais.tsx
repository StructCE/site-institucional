"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cardInformativo } from "./cardInformativo";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";
export function VerMais() {
  const [alive, setAlive] = useState(false);
  const { data } = api.portfolio.getAll.useQuery();

  return (
    <section>
      <div className="flex justify-center">
        <Button
          className="mt-2 h-12 rounded-sm border-2 border-vermelho-praxis bg-transparent font-noto text-vermelho-praxis shadow-md hover:text-off-white md:h-14 md:text-lg"
          onClick={() => setAlive((prev) => !prev)}
        >
          {!alive ? "Ver Mais" : "Ver menos"}
        </Button>
      </div>

      <AnimatePresence>
        {alive && (
          <motion.section
            initial={{ y: 0, opacity: 1, height: 0 }}
            animate={{ y: 40, opacity: 1, height: "max-content" }}
            transition={{ duration: 0.25 }}
            exit={{ y: 0, opacity: 1, height: 0 }}
            className="overflow-hidden"
          >
            <cardInformativo.Root>
              {(data?.slice(4) ?? []).map((dados, index) => (
                <cardInformativo.Card
                  titulo={dados.name}
                  descricao={dados.description}
                  value={index}
                  key={dados.name}
                ></cardInformativo.Card>
              ))}
            </cardInformativo.Root>
          </motion.section>
        )}
      </AnimatePresence>
    </section>
  );
}
