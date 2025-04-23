"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function AddApplicationModalContent() {
  return (
    <>
      <InputWrapper>
        <Label htmlFor="company-name">Company Name</Label>
        <Input id="company-name" />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="position">Position</Label>
        <Input id="position" />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="status">Status</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select status" />
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
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="date"
          defaultValue={new Date().toISOString().split("T")[0]}
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          rows={4}
          placeholder="Add any details about the application, requirements, or follow-ups..."
          className="placeholder:text-sm"
        />
      </InputWrapper>

      <div className="text-end">
        <Button>Save Application</Button>
      </div>
    </>
  );
}

function InputWrapper({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-2">{children}</div>;
}
