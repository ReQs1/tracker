"use client";

import {
  DesktopFilters,
  MobileFilters,
} from "@/components/applications/header/filters/responsive-header-filters";
import { useMatchMedia } from "@/hooks/use-match-media";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import QueryFilter from "./filters/query-filter";

function ApplicationsHeaderFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const isMobile = useMatchMedia("(max-width: 767px)");

  const activeFilters = [
    searchParams.get("status"),
    searchParams.get("from"),
    searchParams.get("to"),
  ].filter((param) => param).length;

  function handleResetFilters() {
    const params = new URLSearchParams(searchParams);
    params.delete("status");
    params.delete("from");
    params.delete("to");
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <QueryFilter />

      {isMobile ? (
        <MobileFilters
          activeFilters={activeFilters}
          onResetFilters={handleResetFilters}
        />
      ) : (
        <DesktopFilters
          activeFilters={activeFilters}
          onResetFilters={handleResetFilters}
        />
      )}
    </div>
  );
}

export default ApplicationsHeaderFilters;
