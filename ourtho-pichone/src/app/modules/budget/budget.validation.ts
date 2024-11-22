import { z } from "zod";

export const budgetSchema = z.object({
  amount: z.number().positive("Amount must be positive"),
  category: z.string().min(1, "Category is required"),
  startDate: z.date(),
  endDate: z.date(),
});