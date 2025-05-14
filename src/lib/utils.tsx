import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";
import { differenceInCalendarDays } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getStatusColor = (status: string) => {
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

export const renderTextWithLinks = (text: string) => {
  const urlRegex = /(https?:\/\/\S+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noreferrer "
          className="break-all text-blue-600 hover:underline"
        >
          {part}
        </a>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

export function formatOverviewDifference(count: number, percentage: boolean) {
  if (percentage) {
    return count >= 0 ? `+${count.toFixed(0)}%` : `${count.toFixed(0)}%`;
  }

  return count >= 0 ? `+${count}` : `${count}`;
}

export function formatDifferenceInTimestamp(
  earlierDate: Date,
  laterDate: Date,
) {
  const difference = differenceInCalendarDays(laterDate, earlierDate);

  if (difference < -1) {
    return `${Math.abs(difference)} days ago`;
  } else if (difference === -1) {
    return "Yesterday";
  } else if (difference === 0) {
    return "Today";
  } else if (difference === 1) {
    return "Tomorrow";
  } else {
    return `in ${difference} days`;
  }
}
