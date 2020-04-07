import { TransactionStatus } from "../enums/transaction-status.enum";

export interface Transaction {
  id: number;
  status: TransactionStatus;
  userId: string;
}
