
import { ZodError } from "zod";
import { TIncomeExpense } from "./incomeExpenses.interface";
import { IncomeExpense } from "./incomeExpenses.model";


// Create a new income/expense entry
const createTransaction = async (transactionData: TIncomeExpense) => {


  const transaction = await IncomeExpense.create(transactionData);
  return transaction;
};

// Retrieve transactions for a specific user
const getTransactions = async (
  userId: string,
  filters: Record<string, any>
) => {
  const query: any = { userId };

  // Add optional filters if provided
  if (filters.type) query.type = filters.type; // Filter by "income" or "expense"
  if (filters.startDate && filters.endDate) {
    query.transactionDate = {
      $gte: new Date(filters.startDate),
      $lte: new Date(filters.endDate),
    };
  }
  if (filters.bankAccountId) query.bankAccountId = filters.bankAccountId;

  const transactions = await IncomeExpense.find(query).sort({
    transactionDate: -1,
  });
  return transactions;
};

// Get summary of income and expenses
const getTransactionSummary = async (userId: string) => {
  const income = await IncomeExpense.aggregate([
    { $match: { userId, type: "income" } },
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);

  const expense = await IncomeExpense.aggregate([
    { $match: { userId, type: "expense" } },
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);

  return {
    totalIncome: income[0]?.total || 0,
    totalExpense: expense[0]?.total || 0,
    balance: (income[0]?.total || 0) - (expense[0]?.total || 0),
  };
};

export const incomeExpenseServices = {
  createTransaction,
  getTransactions,
  getTransactionSummary,
};
