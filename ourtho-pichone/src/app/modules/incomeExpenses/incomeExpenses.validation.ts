import { z } from "zod";

export const incomeExpenseSchema = z.object({
    userId: z.string().min(1, "User ID is required"),
    bankAccountId: z.string().min(1, "Bank Account ID is required"),
    type: z.enum(["income", "expense"]),
    amount: z.number().positive("Amount must be positive"),
category: z.string().min(1, "Category is required"),
description: z.string().optional(),
transactionDate: z.date({ required_error: "Transaction date is required" }),
});
