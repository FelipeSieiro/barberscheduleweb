
import { getById } from "@/app/actions/servico/get-by-id";
import NavBar from "@/components/NavBar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "./EditForm";

export default async function EditServicos({params}: Params) {
  const id = params.id

  const servico = await getById(id)

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="servicos" />
      <EditForm {...servico} />
      
    </main>
  );
}
