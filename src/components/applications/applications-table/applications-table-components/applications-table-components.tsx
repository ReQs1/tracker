"use client";

import { Application } from "@/db/schema";
import { useMatchMedia } from "@/hooks/use-match-media";
import ApplicationCard from "./application-card/application-card";
import ApplicationsTableView from "./applications-table-view/applications-table-view";

function ApplicationsTableComponents({
  applications,
}: {
  applications: Application[];
}) {
  const isMobile = useMatchMedia("(max-width: 768px)");

  if (isMobile)
    return (
      <div className="grow space-y-6">
        {applications.map((appl) => (
          <ApplicationCard key={appl.id} appl={appl} />
        ))}
      </div>
    );

  return <ApplicationsTableView applications={applications} />;
}

export default ApplicationsTableComponents;
