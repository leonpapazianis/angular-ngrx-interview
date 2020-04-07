import { TransactionsState } from "../models/transactions-state.model";
import { TransactionsConfig } from "../enums/transactions-config.enum";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { transactionsAdapter } from "./transactions.reducer";

const { selectEntities, selectAll } = transactionsAdapter.getSelectors();

const featureSelector = createFeatureSelector<TransactionsState>(
  TransactionsConfig.StateKey
);

export const selectTransactionsEntities = createSelector(
  featureSelector,
  selectEntities
);

export const selectTransactions = createSelector(
  featureSelector,
  selectAll
);

export const selectIsLoading = createSelector(
  featureSelector,
  (state: TransactionsState) => state.loading
);

export const selectError = createSelector(
  featureSelector,
  (state: TransactionsState) => state.error
);
