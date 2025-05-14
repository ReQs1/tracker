import DashboardHeader from "@/components/dashboard/dashboard-header";
import OverviewCardsSkeleton from "@/components/dashboard/overview/overview-cards-skeleton";
import OverviewContainer from "@/components/dashboard/overview/overview-container";
import RecentActivityCards from "@/components/dashboard/recent-activity/recent-activity-cards";
import RecentActivityCardsSkeleton from "@/components/dashboard/recent-activity/recent-activity-cards-skeleton";
import RecentActivityHeader from "@/components/dashboard/recent-activity/recent-activity-header";
import DashboardWrapper from "@/components/ui/dashboard-wrapper";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

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

      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewContainer userId={user.id} />
      </Suspense>

      <RecentActivityHeader />

      <Suspense fallback={<RecentActivityCardsSkeleton />}>
        <RecentActivityCards userId={user.id} />
      </Suspense>
    </DashboardWrapper>
  );
}

export default DashboardPage;
