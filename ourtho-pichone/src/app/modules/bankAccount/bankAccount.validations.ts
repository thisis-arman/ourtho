import { z } from "zod";

export const bankAccountValidationSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  accountName: z.string().min(1, "Account name is required"),
  accountNumber: z.string().min(1, "Account number is required"),
  bankName: z.string().min(1, "Bank name is required"),
  balance: z.number().nonnegative("Balance cannot be negative"),
});

export default {
    bankAccountValidationSchema
}
export const bankAccountUpdateSchema = bankAccountValidationSchema.partial(); // for update scenarios
