import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Actions, ofType } from "@ngrx/effects";
import {
  TransactionsActionTypes,
  LoadTransactions,
  SaveTransactions,
  LoadTransactionsFailure,
  LoadTransactionsSuccess
} from "../store/transactions.actions";

@Injectable({ providedIn: "root" })
export class TransactionsEvents {
  constructor(private actions$: Actions) {}

  onLoadTransactions(): Observable<LoadTransactions> {
    return this.actions$.pipe(ofType(TransactionsActionTypes.LoadTransactions));
  }

  onLoadTransactionsSuccess(): Observable<LoadTransactionsSuccess> {
    return this.actions$.pipe(
      ofType(TransactionsActionTypes.LoadTransactionsSuccess)
    );
  }

  onLoadTransactionsFailure(): Observable<LoadTransactionsFailure> {
    return this.actions$.pipe(
      ofType(TransactionsActionTypes.LoadTransactionsFailure)
    );
  }

  onSaveTransactions(): Observable<SaveTransactions> {
    return this.actions$.pipe(ofType(TransactionsActionTypes.SaveTransactions));
  }
}
