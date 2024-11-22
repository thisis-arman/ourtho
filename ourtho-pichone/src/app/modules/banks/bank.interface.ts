import { Types } from "mongoose";

type TBank = {
  _id?: Types.ObjectId;
  bankName: string;
  logo: string;
};
export default TBank;