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

import { Plus } from "lucide-react";
import ApplicationFormContent from "@/components/applications/application-form-content/application-form-content";
import { useState } from "react";
import { useZsaAction } from "@/hooks/use-zsa-action";
import { addApplicationAction } from "@/lib/zsa/actions";

function AddApplicationModal() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { execute, isPending } = useZsaAction({
    fn: addApplicationAction,
    closeModalFn: handleClose,
    errorToastMessage: "Sorry, couldn't add the application",
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="inline-flex cursor-pointer items-center gap-4 self-start md:self-auto"
          size="lg"
        >
          <Plus color="white" />
          <span>Add Application</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-left">
          <DialogTitle className="text-lg">Add New Application</DialogTitle>
          <DialogDescription>
            Enter the details of the company you've applied to or plan to apply
            to.
          </DialogDescription>
        </DialogHeader>

        <ApplicationFormContent
          execute={execute}
          isPending={isPending}
          defaultValues={{
            companyName: "",
            position: "",
            status: "applied",
            date: new Date().toISOString().split("T")[0],
            notes: "",
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

export default AddApplicationModal;
