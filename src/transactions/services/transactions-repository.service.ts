import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { TransactionsState } from "../models/transactions-state.model";
import {
  selectIsLoading,
  selectTransactions,
  selectError
} from "../store/transactions.selectors";
import { Observable } from "rxjs";
import { Transaction } from "../models/transaction.model";

@Injectable({ providedIn: "root" })
export class TransactionsRepository {
  constructor(private store$: Store<TransactionsState>) {}

  isLoading(): Observable<boolean> {
    return this.store$.select(selectIsLoading);
  }

  getAllTransactions(): Observable<Transaction[]> {
    return this.store$.select(selectTransactions);
  }

  getError(): Observable<string | undefined> {
    return this.store$.select(selectError);
  }
}
