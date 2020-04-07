import { Transaction } from "../models/transaction.model";
import { TransactionStatus } from "../enums/transaction-status.enum";

export const transactionsMock: Transaction[] = [
  {
    id: 1,
    userId: "LP19092",
    status: TransactionStatus.Complete
  },
  {
    id: 2,
    userId: "LP19092",
    status: TransactionStatus.Cancelled
  },
  {
    id: 3,
    userId: "LP19092",
    status: TransactionStatus.Pending
  }
];
