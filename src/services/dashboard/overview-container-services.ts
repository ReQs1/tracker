import { db } from "@/db/drizzle";
import { application } from "@/db/schema";
import { and, count, eq, gte, lte, ne } from "drizzle-orm";

const formatDate = (date: Date) => date.toISOString().split("T")[0];

// utils
function getCurrentWeekRange() {
  const now = new Date();

  // Get current day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  let currentDay = now.getDay();

  // Adjust so Monday = 0, Sunday = 6
  currentDay = (currentDay + 6) % 7;

  // Get current week's Monday
  const monday = new Date(now);
  monday.setDate(now.getDate() - currentDay);

  // Get current week's Sunday
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  return {
    monday: formatDate(monday),
    sunday: formatDate(sunday),
  };
}

function getLastWeekRange() {
  const now = new Date();

  // Get current day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  let currentDay = now.getDay();

  // Adjust so Monday = 0, Sunday = 6
  currentDay = (currentDay + 6) % 7;

  // Get last week's Monday
  const lastMonday = new Date(now);
  lastMonday.setDate(now.getDate() - currentDay - 7);

  // Get last week's Sunday
  const lastSunday = new Date(lastMonday);
  lastSunday.setDate(lastMonday.getDate() + 6);

  return {
    lastMonday: formatDate(lastMonday),
    lastSunday: formatDate(lastSunday),
  };
}

function getCurrentMonthRange() {
  const now = new Date();
  const firstDayCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDayCurrentMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
  );

  return {
    firstDay: formatDate(firstDayCurrentMonth),
    lastDay: formatDate(lastDayCurrentMonth),
  };
}

function getLastMonthRange() {
  const now = new Date();
  const firstDayLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const lastDayLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

  return {
    firstDay: formatDate(firstDayLastMonth),
    lastDay: formatDate(lastDayLastMonth),
  };
}

// fetchers

export const getTotalApplicationsCount = async (userId: string) => {
  const usersApplications = await db
    .select({ count: count() })
    .from(application)
    .where(eq(application.userId, userId));

  return usersApplications[0].count;
};

export const getWeeklyApplicationsDifference = async (userId: string) => {
  const { monday: currentWeekMonday, sunday: currentWeekSunday } =
    getCurrentWeekRange();
  const { lastMonday: lastWeekMonday, lastSunday: lastWeekSunday } =
    getLastWeekRange();

  const currentWeekData = await db
    .select({ count: count() })
    .from(application)
    .where(
      and(
        eq(application.userId, userId),
        gte(application.date, currentWeekMonday),
        lte(application.date, currentWeekSunday),
      ),
    );
  const currentWeekCount = currentWeekData[0].count;

  const lastWeekData = await db
    .select({ count: count() })
    .from(application)
    .where(
      and(
        eq(application.userId, userId),
        gte(application.date, lastWeekMonday),
        lte(application.date, lastWeekSunday),
      ),
    );
  const lastWeekCount = lastWeekData[0].count;

  return currentWeekCount - lastWeekCount;
};

export const getInterviewApplications = async (userId: string) => {
  const usersInterviewsCount = await db
    .select({ count: count() })
    .from(application)
    .where(
      and(eq(application.userId, userId), eq(application.status, "interview")),
    );

  return usersInterviewsCount[0].count;
};

export const getWeeklyInterviewsDifference = async (userId: string) => {
  const { monday: currentWeekMonday, sunday: currentWeekSunday } =
    getCurrentWeekRange();
  const { lastMonday: lastWeekMonday, lastSunday: lastWeekSunday } =
    getLastWeekRange();

  const currentWeekData = await db
    .select({ count: count() })
    .from(application)
    .where(
      and(
        eq(application.userId, userId),
        eq(application.status, "interview"),
        gte(application.date, currentWeekMonday),
        lte(application.date, currentWeekSunday),
      ),
    );
  const currentWeekCount = currentWeekData[0].count;

  const lastWeekData = await db
    .select({ count: count() })
    .from(application)
    .where(
      and(
        eq(application.userId, userId),
        eq(application.status, "interview"),
        gte(application.date, lastWeekMonday),
        lte(application.date, lastWeekSunday),
      ),
    );
  const lastWeekCount = lastWeekData[0].count;

  return currentWeekCount - lastWeekCount;
};

export const getResponseRate = async (userId: string) => {
  const totalApplications = await getTotalApplicationsCount(userId);

  if (totalApplications === 0) {
    return 0;
  }

  const respondedApplications = await db
    .select({ count: count() })
    .from(application)
    .where(
      and(eq(application.userId, userId), ne(application.status, "applied")),
    );

  const respondedCount = respondedApplications[0].count;

  return (respondedCount / totalApplications) * 100;
};

async function calculateMonthlyResponseRate(
  userId: string,
  startDate: string,
  endDate: string,
) {
  const totalApplicationsData = await db
    .select({ count: count() })
    .from(application)
    .where(
      and(
        eq(application.userId, userId),
        gte(application.date, startDate),
        lte(application.date, endDate),
      ),
    );
  const totalApplications = totalApplicationsData[0].count;

  if (totalApplications === 0) {
    return 0;
  }

  const respondedApplicationsData = await db
    .select({ count: count() })
    .from(application)
    .where(
      and(
        eq(application.userId, userId),
        ne(application.status, "applied"),
        gte(application.date, startDate),
        lte(application.date, endDate),
      ),
    );
  const respondedCount = respondedApplicationsData[0].count;

  return (respondedCount / totalApplications) * 100;
}

export const getMonthlyResponseRateDifference = async (userId: string) => {
  const { firstDay: currentMonthFirstDay, lastDay: currentMonthLastDay } =
    getCurrentMonthRange();
  const { firstDay: lastMonthFirstDay, lastDay: lastMonthLastDay } =
    getLastMonthRange();

  const currentMonthResponseRate = await calculateMonthlyResponseRate(
    userId,
    currentMonthFirstDay,
    currentMonthLastDay,
  );
  const lastMonthResponseRate = await calculateMonthlyResponseRate(
    userId,
    lastMonthFirstDay,
    lastMonthLastDay,
  );

  return currentMonthResponseRate - lastMonthResponseRate;
};

export const getPendingApplicationsCount = async (userId: string) => {
  const pendingApplicationsCount = await db
    .select({ count: count() })
    .from(application)
    .where(
      and(eq(application.userId, userId), eq(application.status, "applied")),
    );

  return pendingApplicationsCount[0].count;
};
