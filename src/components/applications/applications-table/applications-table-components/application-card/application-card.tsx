"use client";

import ApplicationDetailsModal from "@/components/applications/application-details-modal/application-details-modal";
import CardHeaderContent from "@/components/applications/applications-table/applications-table-components/application-card/application-card-header";
import MenuDropdown from "@/components/applications/menu-dropdown/card-menu-dropdown";
import StatusDropdown from "@/components/applications/status-dropdown/status-dropdown";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Application } from "@/db/schema";
import { renderTextWithLinks } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { useState } from "react";

function ApplicationCard({ appl }: { appl: Application }) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <>
      <Card key={appl.id}>
        <CardHeader className="flex justify-between border-b px-4 [.border-b]:pb-4">
          <CardHeaderContent
            companyName={appl.companyName}
            position={appl.position}
          />
          <MenuDropdown
            status={appl.status}
            date={new Date(appl.date)}
            companyName={appl.companyName}
            position={appl.position}
            notes={appl.notes}
            applicationId={appl.id}
          />
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="inline-flex items-center gap-2 text-sm">
              <Calendar size={16} color="gray" />{" "}
              {new Date(appl.date).toLocaleDateString("en-GB")}
            </p>
            <StatusDropdown appl={appl} />
          </div>
          <p className="line-clamp-2 text-sm break-all whitespace-pre-line text-gray-500">
            {renderTextWithLinks(appl.notes)}
          </p>
          <button
            className="cursor-pointer rounded-sm p-1 text-sm transition-colors hover:bg-gray-100"
            onClick={() => setIsDetailsOpen(true)}
          >
            View Details
          </button>
        </CardContent>
      </Card>

      {/* Modal for application details */}
      {isDetailsOpen && (
        <ApplicationDetailsModal
          isOpen={isDetailsOpen}
          onOpenChange={setIsDetailsOpen}
          companyName={appl.companyName}
          position={appl.position}
          status={appl.status}
          date={new Date(appl.date)}
          notes={appl.notes}
        />
      )}
    </>
  );
}

export default ApplicationCard;
