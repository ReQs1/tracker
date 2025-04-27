"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useZsaAction } from "@/hooks/use-zsa-action";
import { editApplicationAction } from "@/lib/zsa/actions";
import React from "react";
import ApplicationFormContent from "../application-form-content/application-form-content";
import { ApplicationStatus } from "../applications-table/applications-table";

type Props = {
  companyName: string;

  position: string;
  status: ApplicationStatus;
  date: Date;
  notes: string;
  noteId: number;
  isOpen: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

function EditApplicationModal({
  companyName,
  position,
  status,
  date,
  notes,
  noteId,
  isOpen,
  onOpenChange,
}: Props) {
  const handleClose = () => {
    onOpenChange(false);
  };

  const { execute, isPending } = useZsaAction({
    fn: editApplicationAction,
    closeModalFn: handleClose,
    errorToastMessage: "Sorry, couldn't edit the application",
  });

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
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
