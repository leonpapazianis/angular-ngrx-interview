import { Injectable } from "@angular/core";
import { TransactionsEvents } from "../services/transactions-event.service";
import { TransactionsActionCreator } from "../services/transactions-action-creator.service";
import { Effect } from "@ngrx/effects";
import { TransactionsApi } from "../services/transactions-api.service";
import {
  map,
  mergeMap,
  catchError,
  distinctUntilChanged,
  takeUntil
} from "rxjs/operators";
import { Transaction } from "../models/transaction.model";
import { of } from "rxjs";

@Injectable({ providedIn: "root" })
export class TransactionsEffects {
  @Effect()
  public onLoad$ = this.onLoad();

  @Effect()
  public onLoadSuccess$ = this.onLoadSuccess();

  @Effect()
  public onLoadFailure$ = this.onLoadFailure();

  constructor(
    private api: TransactionsApi,
    private events: TransactionsEvents,
    private actions: TransactionsActionCreator
  ) {}

  private onLoad() {
    return this.events.onLoadTransactions().pipe(
      mergeMap(action => {
        return this.api.getTransactions(action.payload).pipe(
          map((transactions: Transaction[]) => {
            return this.actions.loadTransactionsSuccess(transactions);
          }),
          catchError(error => {
            return of(this.actions.loadTransactionsFailure(error));
          })
        );
      })
    );
  }
  private onLoadSuccess() {
    return this.events.onLoadTransactionsSuccess().pipe(
      map(action => {
        return this.actions.saveTransactions(action.payload);
      })
    );
  }

  private onLoadFailure() {
    return this.events.onLoadTransactionsFailure().pipe(
      map(action => {
        return this.actions.saveError(action.payload.message);
      })
    );
  }
}
