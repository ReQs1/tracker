import DashboardHeader from "@/components/dashboard/dashboard-header";
import OverviewContainer from "@/components/dashboard/overview/overview-container";
import RecentActivityCards from "@/components/dashboard/recent-activity/recent-activity-cards";
import RecentActivityHeader from "@/components/dashboard/recent-activity/recent-activity-header";
import DashboardWrapper from "@/components/ui/dashboard-wrapper";
import { Skeleton } from "@/components/ui/skeleton";
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

      <RecentActivityCards />
    </DashboardWrapper>
  );
}

export default DashboardPage;

function OverviewCardsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Skeleton className="h-[144px]" />
      <Skeleton className="h-[144px]" />
      <Skeleton className="h-[144px]" />
      <Skeleton className="h-[144px]" />
    </div>
  );
}
