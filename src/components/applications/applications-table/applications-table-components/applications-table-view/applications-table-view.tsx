import MenuDropdown from "@/components/applications/menu-dropdown/card-menu-dropdown";
import StatusDropdown from "@/components/applications/status-dropdown/status-dropdown";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Application } from "@/db/schema";

function ApplicationsTableView({
  applications,
}: {
  applications: Application[];
}) {
  return (
    <div className="rounded border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="p-4 text-gray-500">Company</TableHead>
            <TableHead className="p-4 text-gray-500">Position</TableHead>
            <TableHead className="p-4 text-gray-500">Status</TableHead>
            <TableHead className="p-4 text-gray-500">Date</TableHead>
            <TableHead className="p-4 text-gray-500">Notes</TableHead>
            <TableHead className="p-4 text-gray-500">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((appl) => (
            <TableRow key={appl.id}>
              <TableCell className="p-4 font-medium whitespace-break-spaces">
                {appl.companyName}
              </TableCell>
              <TableCell className="p-4 whitespace-break-spaces">
                {appl.position}
              </TableCell>
              <TableCell className="p-4">
                <StatusDropdown appl={appl} />
              </TableCell>
              <TableCell className="p-4">
                {new Date(appl.date).toLocaleDateString("en-GB")}
              </TableCell>
              <TableCell className="max-w-xs overflow-hidden p-4 text-ellipsis whitespace-nowrap">
                {appl.notes}
              </TableCell>
              <TableCell className="p-4">
                <MenuDropdown
                  companyName={appl.companyName}
                  date={new Date(appl.date)}
                  applicationId={appl.id}
                  notes={appl.notes}
                  position={appl.position}
                  status={appl.status}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ApplicationsTableView;
