import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getRecentApplications,
  getUpcomingInterviews,
} from "@/services/dashboard/recent-activity-services";
import { Calendar, Users } from "lucide-react";
import { formatDifferenceInTimestamp } from "@/lib/utils";

async function RecentActivityCards({ userId }: { userId: string }) {
  const [upcomingInterviews, recentApplications] = await Promise.all([
    getUpcomingInterviews(userId),
    getRecentApplications(userId),
  ]);

  const today = new Date();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* UPCOMING INTERVIEWS CARD */}
      <Card className="shadow-sm transition-shadow hover:shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-semibold">
              Upcoming Interviews
            </CardTitle>
            <CardTitle className="rounded-full bg-[#f59e0b] p-2">
              <Calendar size={16} color="white" />
            </CardTitle>
          </div>
          <CardTitle className="text-sm font-normal text-gray-500">
            Your scheduled interviews
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[104px] overflow-scroll">
          <div className="grid gap-4">
            {upcomingInterviews.length === 0 ? (
              <p className="text-sm text-gray-500">
                No upcoming interviews scheduled.
              </p>
            ) : (
              upcomingInterviews.map((interview) => {
                return (
                  <div
                    key={interview.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium">{interview.companyName}</p>
                      <p className="text-sm text-gray-500">
                        {interview.position}
                      </p>
                    </div>
                    <p className="rounded-full bg-[#f59e0b] px-2 py-1 text-center text-xs font-semibold text-white">
                      {formatDifferenceInTimestamp(
                        today,
                        new Date(interview.date),
                      )}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </CardContent>
      </Card>

      {/* RECENT APPLICATIONS CARD */}
      <Card className="shadow-sm transition-shadow hover:shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-semibold">
              Recent Applications
            </CardTitle>
            <CardTitle className="rounded-full bg-[#3b82f6] p-2">
              <Users size={16} color="white" />
            </CardTitle>
          </div>
          <CardTitle className="text-sm font-normal text-gray-500">
            Your latest job applications
          </CardTitle>
        </CardHeader>
        <CardContent className="h-[104px] overflow-scroll">
          <div className="grid gap-4">
            {recentApplications.length === 0 ? (
              <p className="text-sm text-gray-500">
                No recent applications found.
              </p>
            ) : (
              recentApplications.map((recentApplication) => (
                <div
                  className="flex items-center justify-between"
                  key={recentApplication.id}
                >
                  <div>
                    <p className="font-medium">
                      {recentApplication.companyName}
                    </p>
                    <p className="text-sm text-gray-500">
                      {recentApplication.position}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="rounded-full bg-[#3b82f6] px-2 py-1 text-center text-xs font-semibold text-white">
                      {recentApplication.status[0].toUpperCase() +
                        recentApplication.status.slice(1)}
                    </p>
                    <p className="text-center text-sm text-gray-500">
                      {formatDifferenceInTimestamp(
                        today,
                        new Date(recentApplication.created_at),
                      )}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default RecentActivityCards;
