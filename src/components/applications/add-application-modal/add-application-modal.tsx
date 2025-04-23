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
import AddApplicationModalContent from "@/components/applications/add-application-modal/add-application-modal-content";
import { useState } from "react";

function AddApplicationModal() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

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

        <AddApplicationModalContent onModalClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
}

export default AddApplicationModal;
