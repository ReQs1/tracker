import OverviewCard from "@/components/dashboard/overview/overview-card";
import {
  Briefcase,
  ChartNoAxesColumnIncreasing,
  CircleCheckBig,
  Loader,
} from "lucide-react";

async function OverviewContainer() {
  //TODO: fetch data from db and make each card dynamic

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <OverviewCard
        title="Total Applications"
        Icon={Briefcase}
        iconColor="#3b82f6"
        data="12"
        subParagraph="+2 from last week"
      />
      <OverviewCard
        title="Interviews"
        Icon={CircleCheckBig}
        iconColor="#f59e0b"
        data="3"
        subParagraph="+1 from last week"
      />
      <OverviewCard
        title="Total Applications"
        Icon={ChartNoAxesColumnIncreasing}
        iconColor="#22c55e"
        data="12"
        subParagraph="+2 from last week"
      />
      <OverviewCard
        title="Total Applications"
        Icon={Loader}
        iconColor="#64748b"
        data="12"
        subParagraph="+2 from last week"
      />
    </div>
  );
}

export default OverviewContainer;
