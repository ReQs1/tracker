"use server";

import { authedProcedure } from "./procedures";
import { db } from "@/db/drizzle";
import { application } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { applicationsSchema } from "./schemas";

export const addApplicationAction = authedProcedure
  .createServerAction()
  .input(applicationsSchema)
  .handler(async ({ input, ctx }) => {
    const { companyName, position, status, date, notes } = input;
    const userId = ctx.user.id;

    await db.insert(application).values({
      companyName,
      position,
      status,
      date,
      notes,
      userId,
    });

    revalidatePath("/dashboard/applications");
  });
