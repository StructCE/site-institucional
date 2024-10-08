"use client";
import { signOut } from "next-auth/react";
import { Button } from "~/components/ui/button";
export function ButtonSignOut() {
  return (
    <Button
      onClick={() => signOut()}
      className="rounded-md border-2 px-4 text-xls transition duration-200 ease-linear"
    >
      Sair
    </Button>
  );
}