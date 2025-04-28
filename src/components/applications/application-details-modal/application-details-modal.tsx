import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn, getStatusColor, renderTextWithLinks } from "@/lib/utils";

function ApplicationDetailsModal({
  companyName,
  position,
  status,
  date,
  notes,
  isOpen,
  onOpenChange,
}: {
  companyName: string;
  position: string;
  status: string;
  date: Date;
  notes: string;
  isOpen: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Application Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Company</p>
            <p className="text-lg font-semibold">{companyName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Position</p>
            <p className="text-lg">{position}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p
              className={cn(
                "inline-flex items-center justify-center rounded-full px-3 py-0.5 text-xs font-semibold text-white transition-colors",
                getStatusColor(status),
              )}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Date</p>
            <p>{date.toLocaleDateString("en-GB")}</p>
          </div>

          <div className="md:col-span-2">
            <p className="mb-2 text-sm text-gray-500">Notes</p>
            <p className="rounded-lg bg-gray-100 p-4 text-sm">
              {renderTextWithLinks(notes)}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ApplicationDetailsModal;
