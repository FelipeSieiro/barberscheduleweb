'use client'

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDown, Pencil, Trash } from "lucide-react";
import { MouseEventHandler } from "react";

interface DropDownActionsProps {
  onEdit: MouseEventHandler,
  onDelete: MouseEventHandler
}

export default function DropDownActions({onEdit, onDelete}: DropDownActionsProps) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light" 
        >
          <ChevronDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={onEdit} key="edit" startContent={<Pencil size={18} />} >editar</DropdownItem>
        <DropdownItem onClick={onDelete} key="delete" startContent={<Trash size={18} />} className="text-danger" color="danger">
          apagar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
