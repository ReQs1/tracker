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
import { useZsaAction } from "@/hooks/use-zsa-action";
import { addApplicationAction } from "@/lib/zsa/actions";
import { ApplicationFormValues, applicationsSchema } from "@/lib/zsa/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function AddApplicationModalContent({
  onModalClose,
}: {
  onModalClose: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationsSchema),
    defaultValues: {
      companyName: "",
      position: "",
      status: "applied",
      date: new Date().toISOString().split("T")[0],
      notes: "",
    },
  });

  const { execute, isPending } = useZsaAction({
    fn: addApplicationAction,
    closeModalFn: onModalClose,
    errorToastMessage: "Sorry, couldn't add your application",
  });

  return (
    <form
      className="grid gap-4"
      onSubmit={handleSubmit((values) => execute(values))}
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
        <Select {...register("status")} defaultValue="applied">
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
