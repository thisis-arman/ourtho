import mongoose, { Schema, Document, model } from "mongoose";
import { TBudget } from "./budget.interface";

const BudgetSchema: Schema = new Schema<TBudget>(
  {
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  { timestamps: true }
);

export const BudgetModel = model<TBudget & Document>(
  "Budget",
  BudgetSchema
);
