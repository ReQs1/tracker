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
import { ApplicationFormValues, applicationSchema } from "@/lib/zsa/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { ApplicationStatus } from "../applications-table/applications-table";

export default function ApplicationFormContent({
  execute,
  isPending,
  defaultValues,
  applicationId,
}: {
  execute: any;
  isPending: boolean;
  applicationId?: number;
  defaultValues: {
    companyName: string;
    position: string;
    status: ApplicationStatus;
    date: string;
    notes: string;
  };
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      companyName: defaultValues.companyName,
      position: defaultValues.position,
      status: defaultValues.status,
      date: defaultValues.date,
      notes: defaultValues.notes,
    },
  });

  return (
    <form
      className="grid gap-4"
      onSubmit={handleSubmit((values) => execute({ ...values, applicationId }))}
    >
      <InputWrapper>
        <Label htmlFor="company-name">Company Name</Label>
        <Input id="company-name" {...register("companyName")} />
        {errors.companyName?.message && (
          <p className="text-red-400">{errors.companyName.message}</p>
        )}
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="position">Position</Label>
        <Input id="position" {...register("position")} />
        {errors.position?.message && (
          <p className="text-red-400">{errors.position.message}</p>
        )}
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="status">Status</Label>
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
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
          )}
        />

        {errors.status?.message && (
          <p className="text-red-400">{errors.status.message}</p>
        )}
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="date">Date</Label>
        <Input id="date" type="date" {...register("date")} />
        {errors.date?.message && (
          <p className="text-red-400">{errors.date.message}</p>
        )}
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          rows={4}
          placeholder="Add any details about the application, requirements, or follow-ups..."
          className="placeholder:text-sm"
          {...register("notes")}
        />
        {errors.notes?.message && (
          <p className="text-red-400">{errors.notes.message}</p>
        )}
      </InputWrapper>

      <div className="text-end">
        <Button disabled={isPending} className="cursor-pointer">
          Save Application
        </Button>
      </div>
    </form>
  );
}

function InputWrapper({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-2">{children}</div>;
}
