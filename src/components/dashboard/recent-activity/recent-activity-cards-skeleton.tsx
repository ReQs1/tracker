import { Skeleton } from "@/components/ui/skeleton";

function RecentActivityCardsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Skeleton className="h-[236px]" />
      <Skeleton className="h-[236px]" />
    </div>
  );
}

export default RecentActivityCardsSkeleton;
