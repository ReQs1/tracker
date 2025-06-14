import OverviewCard from "@/components/dashboard/overview/overview-card";
import {
  getInterviewApplications,
  getMonthlyResponseRateDifference,
  getPendingApplicationsCount,
  getResponseRate,
  getTotalApplicationsCount,
  getWeeklyApplicationsDifference,
  getWeeklyInterviewsDifference,
} from "@/services/dashboard/overview-container-services";
import { formatOverviewDifference } from "@/lib/utils";
import {
  Briefcase,
  ChartNoAxesColumnIncreasing,
  CircleCheckBig,
  Loader,
} from "lucide-react";

async function OverviewContainer({ userId }: { userId: string }) {
  const [
    currentTotalApps,
    diffApps,
    interviewsCount,
    weeklyInterviewsDiff,
    responseRate,
    responseRateMonthlyDiff,
    pendingApplicationsCount,
  ] = await Promise.all([
    getTotalApplicationsCount(userId),
    getWeeklyApplicationsDifference(userId),
    getInterviewApplications(userId),
    getWeeklyInterviewsDifference(userId),
    getResponseRate(userId),
    getMonthlyResponseRateDifference(userId),
    getPendingApplicationsCount(userId),
  ]);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <OverviewCard
        title="Total Applications"
        Icon={Briefcase}
        iconColor="#3b82f6"
        data={currentTotalApps.toString()}
        subParagraph={`${formatOverviewDifference(diffApps, false)} from last week`}
      />
      <OverviewCard
        title="Interviews"
        Icon={CircleCheckBig}
        iconColor="#f59e0b"
        data={interviewsCount.toString()}
        subParagraph={`${formatOverviewDifference(weeklyInterviewsDiff, false)} from last week`}
      />
      <OverviewCard
        title="Response Rate"
        Icon={ChartNoAxesColumnIncreasing}
        iconColor="#22c55e"
        data={`${responseRate.toFixed(0)}%`}
        subParagraph={`${formatOverviewDifference(
          responseRateMonthlyDiff,
          true,
        )} from last month`}
      />
      <OverviewCard
        title="Pending"
        Icon={Loader}
        iconColor="#64748b"
        data={pendingApplicationsCount.toString()}
        subParagraph="Applications in progress"
      />
    </div>
  );
}

export default OverviewContainer;
