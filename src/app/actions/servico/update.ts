"use server"

import { redirect } from "next/navigation"

export async function update(prevState: any, formData: FormData){
    const id = formData.get("id")
    
    const data = {
        nome: formData.get("nome"),
        icone: formData.get("icone")
    }

    const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(`${process.env.API_BASE_URL}/servico/${id}`, options)

    if (resp.ok){
        redirect("/servicos")
    }

    if (resp.status == 400){
        return {
            message: "campo nome é obrigatório"
        }
    }

}