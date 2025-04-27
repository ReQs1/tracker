"use client";

import { ApplicationStatus } from "@/components/applications/applications-table/applications-table";
import DeleteApplicationModal from "@/components/applications/delete-applcation-modal/delete-application-modal";
import EditApplicationModal from "@/components/applications/edit-application-modal/edit-applicatin-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, Eye, Pen, Trash } from "lucide-react";
import { useState } from "react";
import ApplicationDetailsModal from "../../application-details-modal/application-details-modal";

function CardMenuDropdown({
  status,
  date,
  companyName,
  position,
  notes,
  noteId,
}: {
  status: string;
  date: Date;
  companyName: string;
  position: string;
  notes: string;
  noteId: number;
}) {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="cursor-pointer"
            variant="ghost"
            size="icon"
            aria-label="Open menu popover"
          >
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="flex w-fit flex-col items-start p-0"
        >
          {/* APPLICATION DETAILS TRIGGER */}
          <DropdownMenuItem
            onClick={() => setIsDetailsModalOpen(true)}
            className="w-full p-0"
          >
            <Button className="cursor-pointer" variant="ghost">
              <Eye size={16} color="black" /> <span>View Details</span>
            </Button>
          </DropdownMenuItem>

          {/* EDIT MODAL TRIGGER*/}
          <DropdownMenuItem
            onClick={() => setIsEditModalOpen(true)}
            className="w-full p-0"
          >
            <Button
              className="w-full cursor-pointer justify-start"
              variant="ghost"
            >
              <Pen size={16} color="black" /> <span>Edit</span>
            </Button>
          </DropdownMenuItem>

          {/* DELETE MODAL TRIGGER*/}
          <DropdownMenuItem
            onClick={() => setIsDeleteModalOpen(true)}
            className="w-full p-0"
          >
            <Button
              variant="outline"
              className="w-full cursor-pointer justify-start border-0 text-red-500 hover:text-red-500"
            >
              <Trash size={16} color="#fb2c36" /> <span>Delete</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {isDetailsModalOpen && (
        <ApplicationDetailsModal
          companyName={companyName}
          position={position}
          status={status}
          date={date}
          notes={notes}
          isOpen={isDetailsModalOpen}
          onOpenChange={setIsDetailsModalOpen}
        />
      )}

      {isEditModalOpen && (
        <EditApplicationModal
          companyName={companyName}
          position={position}
          status={status as ApplicationStatus}
          date={date}
          notes={notes}
          noteId={noteId}
          isOpen={isEditModalOpen}
          onOpenChange={setIsEditModalOpen}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteApplicationModal
          appl={{ companyName, position, noteId }}
          isOpen={isDeleteModalOpen}
          onOpenChange={setIsDeleteModalOpen}
        />
      )}
    </>
  );
}

export default CardMenuDropdown;
