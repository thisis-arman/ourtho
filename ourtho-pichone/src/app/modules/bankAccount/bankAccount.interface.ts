import { Types } from "mongoose";

export interface IBankAccount {
  _id?: string;
  userId: Types.ObjectId; // references User
  accountName: string;
  accountNumber: string;
  bankName: string;
  accountType:string[];
  balance: number;
  createdAt?: Date;
  updatedAt?: Date;
}
