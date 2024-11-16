import mongoose, { Schema, Document } from "mongoose";
import TTransaction from "./transactions.interface";

const TransactionSchema: Schema = new Schema<TTransaction>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    bankAccount: {
      type: Schema.Types.ObjectId,
      ref: "BankAccount",
      required: true,
    },
    type: { type: String, enum: ["income", "expense"], required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true }
);

export const Transaction = mongoose.model<TTransaction>(
  "Transaction",
  TransactionSchema
);
