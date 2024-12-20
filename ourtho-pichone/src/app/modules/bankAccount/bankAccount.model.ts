import mongoose, { model, Schema } from "mongoose";
import { TBankAccount } from "./bankAccount.interface";

const BankAccountSchema: Schema = new Schema<TBankAccount>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    accountName: { type: String, required: true },
    accountNumber: { type: String, required: true, unique: true },
    bankName: { type: String, required: true },
    balance: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

export const BankAccount = model<TBankAccount>(
  "BankAccount",
  BankAccountSchema
);
