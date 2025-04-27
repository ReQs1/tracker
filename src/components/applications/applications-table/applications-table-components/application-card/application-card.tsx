import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CardHeaderContent from "@/components/applications/applications-table/applications-table-components/application-card/application-card-header";
import MenuDropdown from "@/components/applications/menu-dropdown/card-menu-dropdown";
import { Calendar } from "lucide-react";
import StatusDropdown from "@/components/applications/status-dropdown/status-dropdown";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn, getStatusColor } from "@/lib/utils";
import { Application } from "@/db/schema";

function ApplicationCard({ appl }: { appl: Application }) {
  return (
    <Card key={appl.id}>
      <CardHeader className="flex justify-between border-b px-4 [.border-b]:pb-4">
        <CardHeaderContent
          companyName={appl.companyName}
          position={appl.position}
        />
        <MenuDropdown
          status={appl.status}
          date={new Date(appl.date)}
          companyName={appl.companyName}
          position={appl.position}
          notes={appl.notes}
          applicationId={appl.id}
        />
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="inline-flex items-center gap-2 text-sm">
            <Calendar size={16} color="gray" />{" "}
            {new Date(appl.date).toLocaleDateString("en-GB")}
          </p>
          <StatusDropdown appl={appl} />
        </div>
        <p className="line-clamp-2 text-sm text-gray-500">{appl.notes}</p>
        <Dialog>
          <DialogTrigger asChild>
            <button className="cursor-pointer rounded-sm p-1 text-sm transition-colors hover:bg-gray-100">
              View Details
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Application Details</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-gray-500">Company</p>
                <p className="text-lg font-semibold">{appl.companyName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Position</p>
                <p className="text-lg">{appl.position}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p
                  className={cn(
                    "inline-flex items-center justify-center rounded-full px-3 py-0.5 text-xs font-semibold text-white transition-colors",
                    getStatusColor(appl.status),
                  )}
                >
                  {appl.status.charAt(0).toUpperCase() + appl.status.slice(1)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p>{new Date(appl.date).toLocaleDateString("en-GB")}</p>
              </div>

              <div className="md:col-span-2">
                <p className="mb-2 text-sm text-gray-500">Notes</p>
                <p className="rounded-lg bg-gray-100 p-4 text-sm">
                  {appl.notes}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}

export default ApplicationCard;
