import { ApplicationStatus } from "@/components/applications/applications-table/applications-table";
import DeleteApplicationModal from "@/components/applications/delete-applcation-modal/delete-application-modal";
import EditApplicationModal from "@/components/applications/edit-application-modal/edit-applicatin-modal";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Ellipsis } from "lucide-react";
import ApplicationDetailsModal from "../../application-details-modal/application-details-modal";

function CardMenuPopover({
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
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="cursor-pointer"
          variant="ghost"
          size="icon"
          aria-label="Open menu popover"
        >
          <Ellipsis />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="flex w-fit flex-col items-start p-0"
      >
        {/* APPLICATION DETAILS */}
        <ApplicationDetailsModal
          companyName={companyName}
          position={position}
          status={status}
          date={date}
          notes={notes}
        />
        {/* EDIT MODAL */}
        <EditApplicationModal
          companyName={companyName}
          position={position}
          status={status as ApplicationStatus}
          date={date}
          notes={notes}
          noteId={noteId}
        />
        {/* DELETE MODAL*/}
        <DeleteApplicationModal appl={{ companyName, position, noteId }} />
      </PopoverContent>
    </Popover>
  );
}

export default CardMenuPopover;
