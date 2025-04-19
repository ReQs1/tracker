import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TEMP_JOB_APPLICATIONS from "@/constants/TEMP_DATA";
import { cn } from "@/lib/utils";
import { Calendar, Ellipsis, Eye } from "lucide-react";

const applications = TEMP_JOB_APPLICATIONS;
function ApplicationsTable() {
  return (
    <div className="space-y-4">
      {applications.map((appl) => (
        <Card key={appl.id}>
          <CardHeader className="flex justify-between border-b px-4 [.border-b]:pb-4">
            <CardHeaderContent
              companyName={appl.companyName}
              position={appl.position}
            />
            <MenuPopover
              status={appl.status}
              date={appl.date}
              companyName={appl.companyName}
              position={appl.position}
              notes={appl.notes}
            />
          </CardHeader>
          <CardContent>
            <div>
              <p className="inline-flex items-center gap-2 text-sm">
                <Calendar size={16} color="gray" />{" "}
                {appl.date.toLocaleDateString("en-GB")}
              </p>
              {/* add  select element with onChange to change status + dynamic colors */}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ApplicationsTable;

function CardHeaderContent({
  companyName,
  position,
}: {
  companyName: string;
  position: string;
}) {
  return (
    <div>
      <CardTitle className="text-lg">{companyName}</CardTitle>
      <CardDescription className="text-base">{position}</CardDescription>
    </div>
  );
}

type ApplicationStatus = "applied" | "rejected" | "offer" | "interview";

const Status_Colors: {
  [key in ApplicationStatus]: string;
} = {
  applied: "bg-blue-500 hover:bg-blue-700",
  rejected: "bg-red-500 hover:bg-red-700",
  offer: "bg-green-500 hover:bg-green-700",
  interview: "bg-amber-500 hover:bg-amber-600",
};

function MenuPopover({
  status,
  date,
  companyName,
  position,
  notes,
}: {
  status: ApplicationStatus;
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
            <Button variant="ghost">
              <Eye size={16} /> <span>View Details</span>
            </Button>
          </DialogTrigger>
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
                    {
                      [Status_Colors[status]]: status,
                    },
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
                <p className="rounded-lg bg-gray-100 p-4 text-sm">{notes}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </PopoverContent>
    </Popover>
  );
}
