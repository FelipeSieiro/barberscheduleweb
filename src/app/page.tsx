import NavBar from "@/components/NavBar"
import { getServicos } from "./actions/servico/get";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { DashboardItem } from "./servicos/Dashboard";

export default async function Home() {

  const servicos : Array<Servico> = await getServicos()
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="dashboard" />
      <h2>Dashboard</h2>

      <section className="flex flex-col bg-sky-700 p-6 mt-6 rounded min-w-96 items-center">
      <div className="flex justify-between gap-4">
          <h2 className="text-2xl font-bold p-4">Serviços Prestados</h2>
      </div>
      
        <div className=" grid grid-cols-5 gap-5">
          {servicos.map(servico => <DashboardItem servico={servico} /> )}
        </div>
        
      
      </section>
    </main>
  );
}
