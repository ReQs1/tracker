import ApplicationsTable from "@/components/applications/applications-table/applications-table";
import ApplicationsHeader from "@/components/applications/header/applications-header";
import PaginationContainer from "@/components/applications/pagination/pagination-container";
import DashboardWrapper from "@/components/ui/dashboard-wrapper";
import { ITEMS_PER_PAGE } from "@/constants/constants";
import { db } from "@/db/drizzle";
import { application } from "@/db/schema";
import { auth } from "@/lib/auth";
import { count, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

async function ApplicationsPage(props: {
  searchParams: Promise<{
    query?: string;
    from?: string;
    to?: string;
    status?: string;
    page?: string;
  }>;
}) {
  const {
    query = "",
    from = "",
    to = "",
    status = "",
  } = await props.searchParams;
  const page = Number((await props.searchParams).page) || 1;
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }

  const { id } = session.user;

  const [usersApplicationsCount] = await db
    .select({ count: count() })
    .from(application)
    .where(eq(application.userId, id));

  const totalApplications = usersApplicationsCount.count;

  const totalPages = Math.ceil(totalApplications / ITEMS_PER_PAGE);

  return (
    <DashboardWrapper className="space-y-4">
      <ApplicationsHeader />
      <Suspense
        key={query + from + to + status + page}
        fallback={
          <div className="flex h-64 items-center justify-center">
            <div className="border-primary h-16 w-16 animate-spin rounded-full border-t-2 border-b-2"></div>
          </div>
        }
      >
        <ApplicationsTable searchParams={{ query, from, to, status, page }} />
      </Suspense>

      <PaginationContainer
        totalPages={totalPages}
        currentPage={page}
        totalApplications={totalApplications}
      />
    </DashboardWrapper>
  );
}

export default ApplicationsPage;
