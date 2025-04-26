import CardHeaderContent from "@/components/applications/applications-table/application-card/application-card-header";
import CardMenuPopover from "@/components/applications/applications-table/application-card/card-menu-popover";
import CardStatusDropdown from "@/components/applications/applications-table/application-card/card-status-dropdown";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { STATUS_OPTIONS } from "@/constants/status-options";
import { auth } from "@/lib/auth";
import { getApplications } from "@/lib/fetches/get-applications";
import { cn, getStatusColor } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { headers } from "next/headers";

export type ApplicationStatus = (typeof STATUS_OPTIONS)[number];

async function ApplicationsTable({
  searchParams,
}: {
  searchParams: {
    query: string;
    from: string;
    to: string;
    status: string;
    page: number;
  };
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const currentUserId = session!.user.id;

  const applications = await getApplications(searchParams, currentUserId);

  const { query, from, to, status } = searchParams;

  if (applications.length === 0) {
    if (!query && !from && !to && !status) {
      return (
        <p className="text-center text-gray-500">
          No applications found. Add a new application to start tracking!
        </p>
      );
    } else {
      return (
        <p className="text-center text-gray-500">
          No applications match the current filters. Try adjusting your search
          criteria.
        </p>
      );
    }
  }

  return (
    <div className="grow space-y-6">
      {applications.map((appl) => (
        <Card key={appl.id}>
          <CardHeader className="flex justify-between border-b px-4 [.border-b]:pb-4">
            <CardHeaderContent
              companyName={appl.companyName}
              position={appl.position}
            />
            <CardMenuPopover
              status={appl.status}
              date={new Date(appl.date)}
              companyName={appl.companyName}
              position={appl.position}
              notes={appl.notes}
              noteId={appl.id}
            />
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="inline-flex items-center gap-2 text-sm">
                <Calendar size={16} color="gray" />{" "}
                {new Date(appl.date).toLocaleDateString("en-GB")}
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
                      {appl.status.charAt(0).toUpperCase() +
                        appl.status.slice(1)}
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
      ))}
    </div>
  );
}

export default ApplicationsTable;
