import TBank from "./bank.interface";
import {  Bank } from "./bank.model";

const createBank = async (bankData: TBank) => {
  const isBankExists = await Bank.findOne({ bankName: bankData.bankName });
  if (isBankExists) {
    throw new Error(`Bank ${bankData.bankName} already exists`);
  }

  const bank = await Bank.create(bankData);
  return bank;
};

const getAllBanks = async () => {
  const banks = await Bank.find().select("_id bankName logo");
  return banks;
};

const deleteBank = async (id: string) => {
  const bank = await Bank.findByIdAndDelete(id);
  if (!bank) {
    throw new Error("Bank not found");
  }
  return bank;
};

export const bankServices = {
  createBank,
  getAllBanks,
  deleteBank,
};
