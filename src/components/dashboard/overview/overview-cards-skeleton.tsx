import { Skeleton } from "@/components/ui/skeleton";

export default function OverviewCardsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Skeleton className="h-[144px]" />
      <Skeleton className="h-[144px]" />
      <Skeleton className="h-[144px]" />
      <Skeleton className="h-[144px]" />
    </div>
  );
}
