import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ListFilter } from "lucide-react";
import StatusFilter from "./status-filter";
import DateFilter from "./date-filter";

export function MobileFilters({
  activeFilters,
  onResetFilters,
}: {
  activeFilters: number;
  onResetFilters: () => void;
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="mb-4 flex h-10 items-center rounded-sm border px-2 hover:bg-gray-50">
          <div className="inline-flex items-center gap-2">
            <ListFilter size={16} />
            <span>Filters</span>
            {activeFilters > 0 ? (
              <span className="rounded-full bg-gray-100 px-2 py-1">
                {activeFilters}
              </span>
            ) : null}
          </div>
        </AccordionTrigger>
        <AccordionContent className="rounded-sm border p-4">
          <StatusFilter />
          <DateFilter />
          <div className="mt-6 text-end">
            <Button
              className="cursor-pointer"
              variant="ghost"
              onClick={onResetFilters}
            >
              Clear filters
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function DesktopFilters({
  activeFilters,
  onResetFilters,
}: {
  activeFilters: number;
  onResetFilters: () => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="inline-flex cursor-pointer items-center gap-2"
          variant="outline"
        >
          <ListFilter size={16} />
          <span>Filters</span>
          {activeFilters > 0 ? (
            <span className="rounded-full bg-gray-100 px-2 py-1">
              {activeFilters}
            </span>
          ) : null}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <StatusFilter />
        <DateFilter />
        <div className="mt-6 text-end md:text-center">
          <Button
            className="cursor-pointer"
            variant="ghost"
            onClick={onResetFilters}
          >
            Clear filters
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
