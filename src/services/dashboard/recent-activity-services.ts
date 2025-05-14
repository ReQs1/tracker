import { db } from "@/db/drizzle";
import { application } from "@/db/schema";
import { and, asc, desc, eq, gte } from "drizzle-orm";

export const getUpcomingInterviews = async (userId: string) => {
  const today = new Date().toISOString().split("T")[0];

  return await db.query.application.findMany({
    where: and(
      eq(application.userId, userId),
      eq(application.status, "interview"),
      gte(application.date, today),
    ),
    limit: 5,
    orderBy: asc(application.date),
  });
};
export const getRecentApplications = async (userId: string) => {
  return await db.query.application.findMany({
    where: and(
      eq(application.userId, userId),
      eq(application.status, "applied"),
    ),
    limit: 5,
    orderBy: desc(application.created_at),
  });
};
