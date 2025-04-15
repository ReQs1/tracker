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
import AddModalContent from "@/components/applications/add-application-modal/add-application-modal-content";

function AddApplicationModal() {
  return (
    <Dialog>
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

        <AddModalContent />
      </DialogContent>
    </Dialog>
  );
}

export default AddApplicationModal;
