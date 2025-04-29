import { z } from "zod";

export const applicationSchema = z.object({
  applicationId: z.number().optional(),
  companyName: z.string().nonempty("Company name is required").max(25),
  position: z.string().nonempty("Position is required").max(25),
  status: z.enum(["applied", "interview", "offer", "rejected"]),
  date: z.string().nonempty("Date is required"),
  notes: z.string().nonempty("Notes are required"),
});

export type ApplicationFormValues = z.infer<typeof applicationSchema>;
