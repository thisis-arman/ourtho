import { Types } from "mongoose";

export type TIncomeExpense= {
  _id?: string;
  userId: Types.ObjectId;
  bankAccountId: Types.ObjectId;
  type: "income" | "expense"; 
  amount: number;
  category: string; //category, e.g., Salary, Food, Rent
  description?: string; //optional description
  transactionDate: Date; //date of the transaction

}
