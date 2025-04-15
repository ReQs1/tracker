import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function RecentActivityHeader() {
  return (
    <div className="flex flex-col justify-between gap-3 sm:flex-row md:items-center">
      <div>
        <h2 className="text-2xl font-semibold">Recent Activity</h2>
        <p className="text-gray-500">
          View your recent applications and upcoming interviews
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
  );
}

export default RecentActivityHeader;
