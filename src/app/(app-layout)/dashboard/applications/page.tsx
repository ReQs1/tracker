import ApplicationsTable from "@/components/applications/applications-table/applications-table";
import ApplicationsHeader from "@/components/applications/header/applications-header";
import DashboardWrapper from "@/components/ui/dashboard-wrapper";

function ApplicationsPage() {
  return (
    <DashboardWrapper className="space-y-4">
      <ApplicationsHeader />
      <ApplicationsTable />
    </DashboardWrapper>
  );
}

export default ApplicationsPage;
