import { z } from "zod";

export const transactionSchema = z.object({
  user: z.string().min(1, "User ID is required"),
  bankAccount: z.string().min(1, "Bank Account ID is required"),
  type: z.enum(["income", "expense"]),
  amount: z.number().positive("Amount must be positive"),
  category: z.string().min(1, "Category is required"),
  description: z.string().optional(),
  date: z.date().default(new Date()),
});

export const transactionUpdateSchema = transactionSchema.partial(); // for update scenarios
