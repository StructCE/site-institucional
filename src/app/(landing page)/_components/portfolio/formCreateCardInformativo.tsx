"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

export default function FormCriarCardInformativo() {
  const formSchema = z.object({
    description: z.string().min(1, { message: "Campo obrigatório" }),
    name: z.string().min(1, { message: "Campo obrigatório" }),
  });

  const router = useRouter();
  const [response, setResponse] = useState("");

  const updatePortfolio = api.portfolio.createCardInformativo.useMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", description: "" },
  });

  const onSubmit = async (dados: z.infer<typeof formSchema>) => {
    setResponse("");
    await updatePortfolio
      .mutateAsync({ ...dados })
      .then(() => {
        router.refresh();
        setResponse("Alteração feita com sucesso!");
      })
      .catch(() => setResponse("Ocorreu um erro ao criar o card Informativo!"));
  };

  return (
    <div className="flex max-w-full flex-col gap-y-2 rounded-2xl border border-vermelho-excelencia bg-white px-8 py-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button>Criar card informativo</Button>
          </div>
        </form>
      </Form>
      <Label className="w-full text-center font-semibold text-vermelho-excelencia">
        Os cards não podem ter nomes iguais para poderem ser criados.
      </Label>
      <Label className="w-full text-center font-semibold text-vermelho-excelencia">
        {response}
      </Label>
    </div>
  );
}
