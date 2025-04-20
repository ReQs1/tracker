import ApplicationsTable from "@/components/applications/applications-table/applications-table";
import ApplicationsHeader from "@/components/applications/header/applications-header";
import DashboardWrapper from "@/components/ui/dashboard-wrapper";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

async function ApplicationsPage(props: {
  searchParams: Promise<{
    query?: string;
    from?: string;
    to?: string;
    status?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const from = searchParams?.from || "";
  const to = searchParams?.to || "";
  const status = searchParams?.status || "";
  const page = Number(searchParams?.page) || 1;

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
    </DashboardWrapper>
  );
}

export default ApplicationsPage;
