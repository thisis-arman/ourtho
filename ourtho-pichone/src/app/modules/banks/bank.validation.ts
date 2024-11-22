import { z } from "zod";

export const createBankZodSchema = z.object({
  bankName: z.string().min(1, "Bank name is required"),
  logo: z.string().url("Logo must be a valid URL"),
});

export type CreateBankInput = z.infer<typeof createBankZodSchema>;
