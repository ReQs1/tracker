import { STATUS_OPTIONS } from "@/constants/status-options";
import { auth } from "@/lib/auth";
import { getApplications } from "@/services/get-applications";
import { headers } from "next/headers";
import ApplicationsTableComponents from "./applications-table-components/applications-table-components";

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

  return <ApplicationsTableComponents applications={applications} />;
}

export default ApplicationsTable;
