import mongoose, { Schema, Document, model } from "mongoose";
import { TIncomeExpense } from "./incomeExpenses.interface";

const IncomeExpenseSchema: Schema = new Schema<TIncomeExpense>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    bankAccountId: {
      type: Schema.Types.ObjectId,
      ref: "BankAccount",
      required: true,
    },
    type: { type: String, enum: ["income", "expense"], required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
    transactionDate: { type: Date, required: true },
  },
  { timestamps: true }
);

export const IncomeExpense = model<TIncomeExpense>(
  "IncomeExpense",
  IncomeExpenseSchema
);
