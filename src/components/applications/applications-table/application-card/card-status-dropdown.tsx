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
import { useZsaAction } from "@/hooks/use-zsa-action";
import { editApplicationStatusAction } from "@/lib/zsa/actions";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

function CardStatusDropdown({ appl }: { appl: Application }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { execute, isPending } = useZsaAction({
    fn: editApplicationStatusAction,
    closeModalFn: handleClose,
    errorToastMessage:
      "Could not update the application status. Please try again.",
  });

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "min-w-20 cursor-pointer rounded-full px-3 py-1 text-xs font-semibold text-white",
            getStatusColor(appl.status),
          )}
        >
          {isPending ? (
            <Spinner className="inline-flex h-4 w-4 items-center justify-center" />
          ) : (
            appl.status.charAt(0).toUpperCase() + appl.status.slice(1)
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {STATUS_OPTIONS.map((status) => (
          <DropdownMenuItem
            disabled={status === appl.status || isPending}
            key={status}
            className={cn("cursor-pointer", {
              ["font-bold"]: appl.status === status,
            })}
            onClick={() => execute({ status, noteId: appl.id })}
          >
            {status}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CardStatusDropdown;
