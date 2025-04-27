"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { useZsaAction } from "@/hooks/use-zsa-action";
import { deleteApplicationAction } from "@/lib/zsa/actions";

function DeleteApplicationModal({
  appl,
  isOpen,
  onOpenChange,
}: {
  appl: {
    companyName: string;
    position: string;
    applicationId: number;
  };
  isOpen: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClose = () => {
    onOpenChange(false);
  };

  const { execute, isPending } = useZsaAction({
    fn: deleteApplicationAction,
    closeModalFn: handleClose,
    errorToastMessage: "Could not delete the application. Please try again.",
  });

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this application? This action cannot
            be undone.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 rounded-md border bg-gray-100 p-3">
          <p>{appl.companyName}</p>
          <p className="text-sm text-gray-500">{appl.position}</p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row-reverse sm:gap-2">
          <Button
            className="min-w-24 cursor-pointer bg-red-400 transition-colors hover:bg-red-600"
            size="lg"
            disabled={isPending}
            onClick={() => execute({ applicationId: appl.applicationId })}
          >
            {isPending ? <Spinner className="h-4 w-4" /> : "Delete"}
          </Button>
          <Button
            className="cursor-pointer"
            variant="outline"
            size="lg"
            disabled={isPending}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteApplicationModal;
