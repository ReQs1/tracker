"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pen } from "lucide-react";
import ApplicationFormContent from "../application-form-content/application-form-content";
import { ApplicationStatus } from "../applications-table/applications-table";
import { useZsaAction } from "@/hooks/use-zsa-action";
import { useState } from "react";
import { editApplicationAction } from "@/lib/zsa/actions";

type Props = {
  companyName: string;

  position: string;
  status: ApplicationStatus;
  date: Date;
  notes: string;
  noteId: number;
};

function EditApplicationModal({
  companyName,
  position,
  status,
  date,
  notes,
  noteId,
}: Props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { execute, isPending } = useZsaAction({
    fn: editApplicationAction,
    closeModalFn: handleClose,
    errorToastMessage: "Sorry, couldn't edit the application",
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full cursor-pointer justify-start" variant="ghost">
          <Pen size={16} /> <span>Edit</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-left">
          <DialogTitle className="text-lg">Edit Application</DialogTitle>
          <DialogDescription>
            Update the details of your job application.
          </DialogDescription>
        </DialogHeader>
        <ApplicationFormContent
          execute={execute}
          isPending={isPending}
          defaultValues={{
            companyName: companyName,
            position: position,
            status: status,
            date: date.toISOString().split("T")[0],
            notes: notes,
          }}
          noteId={noteId}
        />
      </DialogContent>
    </Dialog>
  );
}

export default EditApplicationModal;
