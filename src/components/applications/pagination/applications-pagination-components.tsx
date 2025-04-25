import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  firstItem: number;
  lastItem: number;
  totalApplications: number;
  totalPages: number;
  currentPage: number;
  handlePageChange: (newPage: number) => void;
};

export default function ApplicationsMobilePagination({
  firstItem,
  lastItem,
  totalApplications,
  totalPages,
  currentPage,
  handlePageChange,
}: Props) {
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
