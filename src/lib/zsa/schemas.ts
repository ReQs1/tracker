import { z } from "zod";

export const applicationSchema = z.object({
  noteId: z.number().optional(),
  companyName: z.string().nonempty("Company name is required"),
  position: z.string().nonempty("Position is required"),
  status: z.enum(["applied", "interview", "offer", "rejected"]),
  date: z.string().nonempty("Date is required"),
  notes: z.string().nonempty("Notes are required"),
});

export type ApplicationFormValues = z.infer<typeof applicationSchema>;
