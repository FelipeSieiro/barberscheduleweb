"use client"

import { create } from "@/app/actions/servico/create";
import { icons } from "@/app/utils/icons";
import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Autocomplete, AutocompleteItem, Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";

export default async function FormServicos() {
  
  const initialState = {
    message: ""
  }

  const [state, formAction] = useFormState(create, initialState)

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="servicos" />

      <form action={formAction} className="flex flex-col gap-4 p-6 m-6 bg-slate-900 rounded min-w-[500px]">
        <h2 className="text-2xl font-bold">Cadastrar servico</h2>
        <Input
          key="nome"
          label="Nome"
          name="nome"
          variant="bordered"
          labelPlacement="outside"
          isInvalid={state?.message != ""}
          errorMessage={state?.message}
        />

        <Autocomplete
          label="Ícone"
          placeholder="buscar ícone"
          variant="bordered"
          name="icone"
          labelPlacement="outside"
          defaultItems={icons}
        >
          {(icon) => 
            <AutocompleteItem key={icon.name} startContent={icon.icon}>
              {icon.name}
            </AutocompleteItem>}
        </Autocomplete>

        <div className="flex justify-around">
          <Link href="/servicos">
            <Button variant="bordered">cancelar</Button>
          </Link>

         <SubmitButton />
        </div>
      </form>
    </main>
  );
}
