"use client"

import DropDownActions from "@/components/DropDownActions";
import { Icon } from "@/components/Icon";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { destroy } from "../actions/servico/destroy";


interface ServicoItemProps {
    servico: Servico
}

export function ServicoItem(props: ServicoItemProps) {
    const servico = props.servico
    const router = useRouter()

    function handleDelete() {
        toast.promise(
            destroy(servico.id),
            {
                loading: "apagando...",
                success: "apagado com sucesso",
                error: "erro ao apagar",
            }
        );
    }

    return (
        <div className="flex justify-between">
            <div className="flex gap-2">
                <Icon name={servico.icone} />
                <span>{servico.nome}</span>
            </div>
            <DropDownActions 
                onEdit={() => router.push("/servicos/" + servico.id)}
                onDelete={handleDelete} 
            />
        </div>
    )
}