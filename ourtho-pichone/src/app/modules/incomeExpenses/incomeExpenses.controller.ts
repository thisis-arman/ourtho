import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { incomeExpenseServices } from "./incomeExpense.services";

// Create a new income/expense entry
const createTransaction = catchAsync(async (req, res) => {
  const transaction = await incomeExpenseServices.createTransaction(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Transaction created successfully",
    data: transaction,
  });
});

// Retrieve transactions for a user
const getTransactions = catchAsync(async (req, res) => {
  const { userId } = req.params; // Assume userId is passed as a URL parameter
  const { type, startDate, endDate, bankAccountId } = req.query; // Filters

  const transactions = await incomeExpenseServices.getTransactions({
    userId,
    type,
    startDate,
    endDate,
    bankAccountId,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Transactions retrieved successfully",
    data: transactions,
  });
});

// Get a summary of income and expenses
const getTransactionSummary = catchAsync(async (req, res) => {
  const { userId } = req.params; // Assume userId is passed as a URL parameter
  const summary = await incomeExpenseServices.getTransactionSummary(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Transaction summary retrieved successfully",
    data: summary,
  });
});

export const incomeExpenseControllers = {
  createTransaction,
  getTransactions,
  getTransactionSummary,
};
