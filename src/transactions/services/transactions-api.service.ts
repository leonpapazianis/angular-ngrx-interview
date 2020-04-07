import { of, Observable, throwError } from "rxjs";
import { delay, map, mergeMap } from "rxjs/operators";
import { Transaction } from "../models/transaction.model";
import { TransactionStatus } from "../enums/transaction-status.enum";
import { Injectable } from "@angular/core";
import { transactionsMock } from "../mocks/transactions.mock";

@Injectable({ providedIn: "root" })
export class TransactionsApi {
  getTransactions(username?: string): Observable<Transaction[] | Error> {
    return of(transactionsMock).pipe(
      delay(3000),
      map((transactions: Transaction[]) =>
        transactions.filter(
          (transaction: Transaction) => transaction.userId === username
        )
      ),
      mergeMap(transactions => {
        return transactions.length
          ? of(transactions)
          : throwError(
              new Error("There are no transactions for this username")
            );
      })
    );
  }
}
