import CardHeaderContent from "@/components/applications/applications-table/application-card/application-card-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { STATUS_OPTIONS } from "@/constants/status-options";
import TEMP_JOB_APPLICATIONS from "@/constants/TEMP_DATA";
import { Calendar } from "lucide-react";
import ApplicationDialogContent from "@/components/applications/applications-table/application-card/application-dialog-content";
import MenuPopover from "@/components/applications/applications-table/application-card/card-menu-popover";
import CardStatusDropdown from "@/components/applications/applications-table/application-card/card-status-dropdown";

export type ApplicationStatus = (typeof STATUS_OPTIONS)[number];
const applications = TEMP_JOB_APPLICATIONS;

function ApplicationsTable() {
  return (
    <div className="space-y-6">
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
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="inline-flex items-center gap-2 text-sm">
                <Calendar size={16} color="gray" />{" "}
                {appl.date.toLocaleDateString("en-GB")}
              </p>
              <CardStatusDropdown appl={appl} />
            </div>
            <p className="line-clamp-2 text-sm text-gray-500">{appl.notes}</p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="cursor-pointer rounded-sm p-1 text-sm transition-colors hover:bg-gray-100">
                  View Details
                </button>
              </DialogTrigger>
              <DialogContent>
                <ApplicationDialogContent
                  companyName={appl.companyName}
                  position={appl.position}
                  status={appl.status}
                  date={appl.date}
                  notes={appl.notes}
                />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ApplicationsTable;
