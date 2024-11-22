import { Types } from "mongoose";

export type TBankAccount= {
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
