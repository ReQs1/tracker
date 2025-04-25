"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { STATUS_OPTIONS } from "@/constants/status-options";
import { cn, getStatusColor } from "@/lib/utils";
import { type Application } from "@/db/schema";

function CardStatusDropdown({ appl }: { appl: Application }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "cursor-pointer rounded-full px-3 py-1 text-xs font-semibold text-white",
            getStatusColor(appl.status),
          )}
        >
          {appl.status.charAt(0).toUpperCase() + appl.status.slice(1)}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {STATUS_OPTIONS.map((status) => (
          <DropdownMenuItem
            key={status}
            className={cn("cursor-pointer", {
              ["font-bold"]: appl.status === status,
            })}
            // TODO: add proper logic to change status value with db integration
            onClick={() => console.log(status, appl.id)}
          >
            {status}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CardStatusDropdown;
