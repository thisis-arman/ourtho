import { Schema, model } from "mongoose";
import TBank from "./bank.interface";

const bankSchema = new Schema<TBank>(
  {
    bankName: {
      type: String,
      required: [true, "Bank name is required"],
      trim: true,
      unique: true,
    },
    logo: {
      type: String,
      required: [true, "Logo is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

export const Bank = model<TBank>("Bank", bankSchema);
