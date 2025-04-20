import { ApplicationStatus } from "@/components/applications/applications-table/applications-table";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getStatusColor = (status: ApplicationStatus) => {
  switch (status) {
    case "applied":
      return "bg-blue-500 hover:bg-blue-700";
    case "rejected":
      return "bg-red-500 hover:bg-red-700";
    case "offer":
      return "bg-green-500 hover:bg-green-700";
    case "interview":
      return "bg-amber-500 hover:bg-amber-600";
    default:
      throw new Error("wrong status as a function argument");
  }
};
