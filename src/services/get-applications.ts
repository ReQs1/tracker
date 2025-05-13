import { ITEMS_PER_PAGE } from "@/constants/constants";
import { db } from "@/db/drizzle";
import { application } from "@/db/schema";
import { and, desc, eq, gte, ilike, lte, or } from "drizzle-orm";

export async function getApplications(
  searchParams: {
    query: string;
    from: string;
    to: string;
    status: string;
    page: number;
  },
  currentUserId: string,
) {
  const { query, from, to, status, page } = searchParams;
  return await db.query.application.findMany({
    where: and(
      eq(application.userId, currentUserId),
      or(
        ilike(application.companyName, `%${query}%`),
        ilike(application.position, `%${query}%`),
      ),
      status ? eq(application.status, status) : undefined,
      from ? gte(application.date, from) : undefined,
      to ? lte(application.date, to) : undefined,
    ),
    limit: ITEMS_PER_PAGE,
    offset: (page - 1) * ITEMS_PER_PAGE,
    orderBy: [desc(application.date), desc(application.id)],
  });
}
