"use client"

import { Icon } from "@/components/Icon";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useRouter } from "next/navigation";


interface DashboardItemProps {
    servico: Servico
}

export function DashboardItem(props: DashboardItemProps) {
    const servico = props.servico
    const router = useRouter()

    return (
        <Card className="py-4  bg-white">
          <CardBody className="overflow-visible py-2">
          <div className="flex justify-between">
            <div className="flex gap-2 text-slate-900">
                <Icon name={servico.icone} />
                <span>{servico.nome}</span>
            </div>
        </div>
          </CardBody>
        </Card>
      );
}