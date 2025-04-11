import { cn } from "@/lib/utils";

function DashboardWrapper({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return <div className={cn("px-4 py-6", className)}>{children}</div>;
}

export default DashboardWrapper;
