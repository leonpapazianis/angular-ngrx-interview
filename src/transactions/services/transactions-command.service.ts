import { Injectable } from "@angular/core";
import { LoadTransactions, LoadTransactionsSuccess, LoadTransactionsFailure, SaveTransactions } from "../store/transactions.actions";
import { Transaction } from "../models/transaction.model";
import { TransactionsError } from "../models/transactions-error.model";
import {TransactionsState} from '../models/transactions-state.model';
import { Store } from "@ngrx/store";
import { TransactionsActionCreator } from "./transactions-action-creator.service";

@Injectable({providedIn: 'root'})
export class TransactionsCommand {

  constructor(private store: Store<TransactionsState>, private actions: TransactionsActionCreator) {}

  loadTransactions(userId?: string): this {
    this.store.dispatch(this.actions.loadTransactions(userId));
    return this;
  }
  
  clearError(): this {
    this.store.dispatch(this.actions.clearError());
    return this;
  }
}