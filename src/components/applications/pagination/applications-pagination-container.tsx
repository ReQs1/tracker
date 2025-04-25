"use client";

import { Button } from "@/components/ui/button";
import { ITEMS_PER_PAGE } from "@/constants/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ApplicationsMobilePagination from "./applications-pagination-components";

type Props = {
  currentPage: number;
  totalApplications: number;
  totalPages: number;
};

function ApplicationsPaginationContainer({
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
    <ApplicationsMobilePagination
      firstItem={firstItem}
      lastItem={lastItem}
      totalApplications={totalApplications}
      totalPages={totalPages}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
    />
  );
}

export default ApplicationsPaginationContainer;
