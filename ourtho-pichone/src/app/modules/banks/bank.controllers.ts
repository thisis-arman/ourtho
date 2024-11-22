import { httpStatus } from 'http-status';
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { bankServices } from "./bank.services";
import { CreateBankInput } from "./bank.validation";

const createBank = catchAsync(async (req, res) => {
  const bankData: CreateBankInput = req.body;
  const result = await bankServices.createBank(bankData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Bank created successfully",
    data: result,
  });
});

const getAllBanks = catchAsync(async (req, res) => {
  const result = await bankServices.getAllBanks();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Banks retrieved successfully",
    data: result,
  });
});

const deleteBank = catchAsync(async (req, res) => {
  const { id } = req.params;
  await bankServices.deleteBank(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bank deleted successfully",
  });
});

export const bankControllers = {
  createBank,
  getAllBanks,
  deleteBank,
};
