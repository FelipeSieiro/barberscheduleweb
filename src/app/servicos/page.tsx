import NavBar from "@/components/NavBar";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import Link from "next/link";

import { getServicos } from "../actions/servico/get";
import { ServicoItem } from "./ServicoItem";

export default async function servicos() {

  const servicos : Array<Servico> = await getServicos()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="servicos" />

      <section className="flex flex-col gap-5 bg-slate-900 p-6 mt-6 rounded min-w-96">

        <div className="flex justify-between gap-4">
          <h2 className="text-2xl font-bold">Servicos Cadastrados</h2>
          <Link href="/servicos/new">
            <Button color="primary" startContent={<Plus size={18} />}>
            </Button>
          </Link>
        </div>

        {servicos.map(servico => <ServicoItem servico={servico} /> )}

      </section>
      
    </main>
  );
}
