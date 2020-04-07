import { Action } from "@ngrx/store";
import { Transaction } from "../models/transaction.model";
import { TransactionsError } from "../models/transactions-error.model";

export enum TransactionsActionTypes {
  LoadTransactions = "[Transactions] LoadTransactions",
  LoadTransactionsSuccess = "[Transactions] LoadTransactionsSuccess",
  LoadTransactionsFailure = "[Transactions] LoadTransactionsFailure",
  SaveTransactions = "[Transactions] SaveTransactions",
  SaveError = "[Transactions] SaveError",
  ClearError = "[Transactions] ClearError"
}

export class LoadTransactions implements Action {
  public readonly type = TransactionsActionTypes.LoadTransactions;
  constructor(public readonly payload?: string) {}
}

export class LoadTransactionsSuccess implements Action {
  public readonly type = TransactionsActionTypes.LoadTransactionsSuccess;
  constructor(public readonly payload?: Transaction[]) {}
}
export class LoadTransactionsFailure implements Action {
  public readonly type = TransactionsActionTypes.LoadTransactionsFailure;
  constructor(public readonly payload?: TransactionsError) {}
}

export class SaveTransactions implements Action {
  public readonly type = TransactionsActionTypes.SaveTransactions;
  constructor(public readonly payload: Transaction[]) {}
}

export class SaveError implements Action {
  public readonly type = TransactionsActionTypes.SaveError;
  constructor(public readonly payload: string) {}
}

export class ClearError implements Action {
  public readonly type = TransactionsActionTypes.ClearError;
}

export type TransactionsActions =
  | LoadTransactions
  | LoadTransactionsSuccess
  | LoadTransactionsFailure
  | SaveTransactions
  | SaveError
  | ClearError;
