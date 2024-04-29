"use server"

import { redirect } from "next/navigation"

export async function destroy(id: number){

    await new Promise(r => setTimeout(r, 4000))
    
    const resp = await fetch(`${process.env.API_BASE_URL}/servico/${id}`, { method: "DELETE" } )

    if (resp.ok){
        redirect("/servicos")
    }

    if(!resp.ok){
        throw new Error("erro ao apagar")
    }

}