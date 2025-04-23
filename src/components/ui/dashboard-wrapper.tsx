import { cn } from "@/lib/utils";

function DashboardWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1400px] px-4 py-6 md:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default DashboardWrapper;
