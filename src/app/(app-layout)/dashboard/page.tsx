import DashboardHeader from "@/components/dashboard/dashboard-header";
import OverviewContainer from "@/components/dashboard/overview/overview-container";
import { Button } from "@/components/ui/button";
import DashboardWrapper from "@/components/ui/dashboard-wrapper";
import { auth } from "@/lib/auth";
import { ArrowRight } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
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

      <div className="flex flex-col justify-between gap-3 sm:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold">Recent Activity</h2>
          <p className="text-gray-500">
            You have X upcoming intervie(s) this week
          </p>
        </div>
        <div>
          <Button
            className="bg-blue-500 text-white transition-colors duration-300 hover:bg-blue-700"
            asChild
          >
            <Link
              href="/dashboard/applications"
              className="group inline-flex items-center gap-1"
            >
              View Applications{" "}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </DashboardWrapper>
  );
}

export default DashboardPage;
