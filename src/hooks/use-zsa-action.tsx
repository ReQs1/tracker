import toast from "react-hot-toast";
import { TAnyZodSafeFunctionHandler } from "zsa";
import { useServerAction } from "zsa-react";

export const useZsaAction = ({
  fn,
  errorToastMessage,
  closeModalFn,
}: {
  fn: TAnyZodSafeFunctionHandler;
  errorToastMessage: string;
  closeModalFn: () => void;
}) => {
  return useServerAction(fn, {
    onSuccess: () => {
      closeModalFn();
    },
    onError: () => {
      toast.error(`${errorToastMessage}`, {
        position: "bottom-center",
      });
    },
  });
};
