import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users } from "lucide-react";

function RecentActivityCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
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
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Globex Corporation</p>
                <p className="text-sm text-gray-500">Full Stack Engineer</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Tomorrow</p>
                <p className="rounded-full bg-[#f59e0b] px-2 py-1 text-center text-xs text-white">
                  10:00 AM
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

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
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Globex Corporation</p>
                <p className="text-sm text-gray-500">Full Stack Engineer</p>
              </div>
              <div className="space-y-1">
                <p className="rounded-full bg-[#3b82f6] px-2 py-1 text-center text-xs font-semibold text-white">
                  Applied
                </p>
                <p className="text-sm text-gray-500">2 days ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default RecentActivityCards;
