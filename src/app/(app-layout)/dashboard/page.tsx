import DashboardHeader from "@/components/dashboard/dashboard-header";
import OverviewContainer from "@/components/dashboard/overview/overview-container";
import RecentActivityCards from "@/components/dashboard/recent-activity/recent-activity-cards";
import RecentActivityHeader from "@/components/dashboard/recent-activity/recent-activity-header";
import DashboardWrapper from "@/components/ui/dashboard-wrapper";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }

  const { user } = session;

  return (
    <DashboardWrapper className="grid gap-6">
      <DashboardHeader userName={user.name} />

      <OverviewContainer />
      <RecentActivityHeader />
      <RecentActivityCards />
    </DashboardWrapper>
  );
}

export default DashboardPage;
