import ApplicationDialogContent from "@/components/applications/applications-table/application-card/application-dialog-content";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Ellipsis, Eye } from "lucide-react";

function MenuPopover({
  status,
  date,
  companyName,
  position,
  notes,
}: {
  status: string;
  date: Date;
  companyName: string;
  position: string;
  notes: string;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="cursor-pointer" variant="ghost" size="icon">
          <Ellipsis />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-auto p-0">
        {/* APPLICATION DETAILS */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="cursor-pointer" variant="ghost">
              <Eye size={16} /> <span>View Details</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <ApplicationDialogContent
              companyName={companyName}
              position={position}
              status={status}
              date={date}
              notes={notes}
            />
          </DialogContent>
        </Dialog>
      </PopoverContent>
    </Popover>
  );
}

export default MenuPopover;
