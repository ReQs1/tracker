import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useChangeParams } from "@/hooks/use-change-params";
import { useSearchParams } from "next/navigation";

export default function DateFilter() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const handleChangeSearch = useChangeParams<Date | undefined>();

  return (
    <div>
      <p className="mb-4 text-base font-semibold">Date Range</p>
      <div className="flex flex-col justify-between gap-2 md:flex-row">
        <div className="grow space-y-2">
          <p className="text-sm text-gray-500">From</p>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start font-normal"
              >
                {from ? new Date(from).toLocaleDateString() : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={from ? new Date(from) : undefined}
                onSelect={(e) => handleChangeSearch("from", e)}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="grow space-y-2">
          <p className="text-sm text-gray-500">To</p>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start font-normal"
              >
                {to ? new Date(to).toLocaleDateString() : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={to ? new Date(to) : undefined}
                onSelect={(e) => handleChangeSearch("to", e)}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
