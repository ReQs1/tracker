import CardHeaderContent from "@/components/applications/applications-table/application-card/application-card-header";
import ApplicationDialogContent from "@/components/applications/applications-table/application-card/application-dialog-content";
import MenuPopover from "@/components/applications/applications-table/application-card/card-menu-popover";
import CardStatusDropdown from "@/components/applications/applications-table/application-card/card-status-dropdown";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ITEMS_PER_PAGE } from "@/constants/constants";
import { STATUS_OPTIONS } from "@/constants/status-options";

import { db } from "@/db/drizzle";
import { application } from "@/db/schema";
import { auth } from "@/lib/auth";
import { and, eq, gte, ilike, lte, or } from "drizzle-orm";
import { Calendar } from "lucide-react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

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

  if (!session?.user) {
    redirect("/login");
  }

  const currentUserId = session.user.id;
  const { query, from, to, status, page } = searchParams;

  const applications = await db.query.application.findMany({
    where: and(
      eq(application.userId, currentUserId),
      or(
        ilike(application.companyName, `%${query}%`),
        ilike(application.position, `%${query}%`),
      ),
      status ? eq(application.status, status) : undefined,
      from ? gte(application.date, new Date(from)) : undefined,
      to ? lte(application.date, new Date(to)) : undefined,
    ),
    limit: ITEMS_PER_PAGE,
    offset: (page - 1) * ITEMS_PER_PAGE,
  });

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
