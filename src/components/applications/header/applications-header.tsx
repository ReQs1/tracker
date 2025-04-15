import AddApplicationModal from "@/components/applications/add-application-modal/add-application-modal";
import ApplicationsHeaderFilters from "./applications-header-filters";

function ApplicationsHeader() {
  return (
    <>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Job Applications</h1>
          <p className="text-gray-500">
            Track and manage your job applications
          </p>
        </div>
        <AddApplicationModal />
      </div>

      <ApplicationsHeaderFilters />
    </>
  );
}

export default ApplicationsHeader;
