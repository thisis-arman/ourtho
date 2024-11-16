import { Types } from "mongoose";

type TTransaction = {
  _id?: string;
  user: Types.ObjectId;
  bankAccount: Types.ObjectId;
  type: "income" | "expense";
  amount: number;
  category: string;
  description?: string;
  date: Date;
};
export default TTransaction;
