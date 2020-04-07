import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Transaction } from "../../models/transaction.model";
import { TransactionsRepository } from "../../services/transactions-repository.service";
import { TransactionsCommand } from "../../services/transactions-command.service";
import { FormControl } from "@angular/forms";
import { takeUntil, withLatestFrom, filter } from "rxjs/operators";

@Component({
  selector: "transactions-list",
  templateUrl: "./transactions-list.component.html",
  styleUrls: ["./transactions-list.component.css"]
})
export class TransactionsListComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | undefined>;
  transactions$: Observable<Transaction[]>;
  username = new FormControl();
  destroy$ = new Subject();

  constructor(
    private repository: TransactionsRepository,
    private command: TransactionsCommand
  ) {}

  ngOnInit() {
    this.setIsLoading()
      .setTransactions()
      .setError()
      .disableInputWhenLoading()
      .clearErrorsWhenNewText();
  }

  loadTransactions() {
    this.command.loadTransactions(this.username.value);
  }

  setTransactions(): this {
    this.transactions$ = this.repository.getAllTransactions();
    return this;
  }

  setIsLoading() {
    this.isLoading$ = this.repository.isLoading();
    return this;
  }

  setError(): this {
    this.error$ = this.repository.getError();
    return this;
  }

  disableInputWhenLoading(): this {
    this.isLoading$.pipe(takeUntil(this.destroy$)).subscribe(isLoading => {
      isLoading ? this.username.disable() : this.username.enable();
    });
    return this;
  }

  clearErrorsWhenNewText() {
    return this;
  }
}
