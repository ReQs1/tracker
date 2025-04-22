"use client";

import { Button } from "@/components/ui/button";
import { ITEMS_PER_PAGE } from "@/constants/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  currentPage: number;
  totalApplications: number;
  totalPages: number;
};

function PaginationContainer({
  currentPage,
  totalApplications,
  totalPages,
}: Props) {
  if (totalPages === 0) {
    return null;
  }

  const firstItem = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const lastItem = Math.min(currentPage * ITEMS_PER_PAGE, totalApplications);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", newPage.toString());
    router.push(`${pathname}?${params}`);
  };

  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-500">
        {firstItem}-{lastItem} of {totalApplications}
      </p>
      <div className="flex items-center gap-2">
        <Button
          className="cursor-pointer"
          variant="outline"
          size="icon"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          aria-label="Previous Page"
        >
          <ChevronLeft />
        </Button>
        <p className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </p>
        <Button
          className="cursor-pointer"
          variant="outline"
          size="icon"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          aria-label="Next Page"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default PaginationContainer;
