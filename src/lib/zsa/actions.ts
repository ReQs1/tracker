"use server";

import { authedProcedure } from "./procedures";
import { db } from "@/db/drizzle";
import { application } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { applicationSchema } from "./schemas";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const addApplicationAction = authedProcedure
  .createServerAction()
  .input(applicationSchema)
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

export const editApplicationAction = authedProcedure
  .createServerAction()
  .input(applicationSchema)
  .handler(async ({ input, ctx }) => {
    const { companyName, position, status, date, notes } = input;
    const userId = ctx.user.id;

    const usersNote = await db.query.application.findFirst({
      where: eq(application.id, input.noteId!),
    });

    if (!usersNote) {
      throw new Error("Note not found.");
    }

    if (usersNote.userId !== userId) {
      throw new Error("You do not have permission to edit this note.");
    }

    await db
      .update(application)
      .set({
        companyName,
        position,
        status,
        date,
        notes,
      })
      .where(eq(application.id, input.noteId!));

    revalidatePath("/dashboard/applications");
  });

export const editApplicationStatusAction = authedProcedure
  .createServerAction()
  .input(
    z.object({
      noteId: z.number(),
      status: z.enum(["applied", "interview", "offer", "rejected"]),
    }),
  )
  .handler(async ({ input, ctx }) => {
    const userId = ctx.user.id;

    const usersNote = await db.query.application.findFirst({
      where: eq(application.id, input.noteId),
    });

    if (!usersNote) {
      throw new Error("Note not found.");
    }

    if (usersNote.userId !== userId) {
      throw new Error("You do not have permission to edit this note.");
    }

    await db
      .update(application)
      .set({
        status: input.status,
      })
      .where(eq(application.id, input.noteId));

    revalidatePath("/dashboard/applications");
  });

export const deleteApplicationAction = authedProcedure
  .createServerAction()
  .input(
    z.object({
      noteId: z.number(),
    }),
  )
  .handler(async ({ input, ctx }) => {
    const userId = ctx.user.id;

    const usersNote = await db.query.application.findFirst({
      where: eq(application.id, input.noteId!),
    });

    if (!usersNote) {
      throw new Error("Note not found.");
    }

    if (usersNote.userId !== userId) {
      throw new Error("You do not have permission to delete this note.");
    }

    await db.delete(application).where(eq(application.id, input.noteId));

    revalidatePath("/dashboard/applications");
  });
