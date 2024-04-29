"use client"

import { update } from "@/app/actions/servico/update";
import { icons } from "@/app/utils/icons";
import { SubmitButton } from "@/components/SubmitButton";
import { Autocomplete, AutocompleteItem, Button, Input } from "@nextui-org/react";
import Link from "next/link";

import { useFormState } from "react-dom";


export function EditForm(servico : Servico) {

    const initialState = {
        message: ""
    }

    const [state, formAction] = useFormState(update, initialState)
    return (
        <form action={formAction} className="flex flex-col gap-4 p-6 m-6 bg-slate-900 rounded min-w-[500px]">
            <input type="hidden" name="id" value={servico.id} />
            <h2 className="text-2xl font-bold">Editar servico {servico.nome}</h2>
            <Input
                key="nome"
                label="Nome"
                name="nome"
                variant="bordered"
                defaultValue={servico.nome}
                labelPlacement="outside"
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
            />

            <Autocomplete
                label="Ícone"
                placeholder="buscar ícone"
                defaultInputValue={servico.icone}
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
    )
}