import { EntityState } from "@ngrx/entity";
import { Transaction } from "./transaction.model";

export interface TransactionsState extends EntityState<Transaction> {
  loading: boolean;
  error?: string;
}
