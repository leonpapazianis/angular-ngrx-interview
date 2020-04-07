import { Injectable } from "@angular/core";
import {
  LoadTransactions,
  LoadTransactionsSuccess,
  LoadTransactionsFailure,
  SaveTransactions,
  SaveError,
  ClearError
} from "../store/transactions.actions";
import { Transaction } from "../models/transaction.model";
import { TransactionsError } from "../models/transactions-error.model";

@Injectable({ providedIn: "root" })
export class TransactionsActionCreator {
  loadTransactions(userId?: string): LoadTransactions {
    return new LoadTransactions(userId);
  }

  loadTransactionsSuccess(
    transactions: Transaction[]
  ): LoadTransactionsSuccess {
    return new LoadTransactionsSuccess(transactions);
  }

  loadTransactionsFailure(error: TransactionsError): LoadTransactionsFailure {
    return new LoadTransactionsFailure(error);
  }

  saveTransactions(error: Transaction[]): SaveTransactions {
    return new SaveTransactions(error);
  }

  saveError(error: string): SaveError {
    return new SaveError(error);
  }

  clearError(): ClearError {
    return new ClearError();
  }
}
