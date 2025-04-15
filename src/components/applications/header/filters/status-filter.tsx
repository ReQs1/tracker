"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useChangeParams } from "@/hooks/use-change-params";
import { useSearchParams } from "next/navigation";

export default function StatusFilter() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  const handleChangeParams = useChangeParams<string>();

  return (
    <div className="mb-4 grid gap-2">
      <p className="text-base font-semibold">Status</p>
      <Select onValueChange={(e) => handleChangeParams("status", e)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="All statuses" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="applied">Applied</SelectItem>
            <SelectItem value="interview">Interview</SelectItem>
            <SelectItem value="offer">Offer</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
