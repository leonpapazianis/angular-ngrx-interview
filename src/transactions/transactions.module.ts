import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { TransactionsConfig } from "./enums/transactions-config.enum";
import { transactionsReducer } from "./store/transactions.reducer";
import { EffectsModule } from "@ngrx/effects";
import { TransactionsEffects } from "./store/transactions.effects";
import { TransactionsApi } from "./services/transactions-api.service";
import { TransactionsEvents } from "./services/transactions-event.service";
import { TransactionsCommand } from "./services/transactions-command.service";
import { TransactionsRepository } from "./services/transactions-repository.service";
import { TransactionsActionCreator } from "./services/transactions-action-creator.service";
import { TransactionsListComponent } from "./components/transactions-list/transactions-list.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  exports: [TransactionsListComponent],
  declarations: [TransactionsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(TransactionsConfig.StateKey, transactionsReducer),
    EffectsModule.forFeature([TransactionsEffects])
  ],
  providers: [
    TransactionsApi,
    TransactionsEvents,
    TransactionsCommand,
    TransactionsActionCreator,
    TransactionsRepository
  ]
})
export class TransactionsModule {}
