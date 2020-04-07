import { TransactionsState } from "../models/transactions-state.model";
import {
  TransactionsActions,
  TransactionsActionTypes
} from "./transactions.actions";
import { createEntityAdapter } from "@ngrx/entity";
import { Transaction } from "../models/transaction.model";

export const transactionsAdapter = createEntityAdapter<Transaction>({
  selectId: (entity: Transaction) => entity.id
});

const transactionsInitialState = {
  ...transactionsAdapter.getInitialState(),
  loading: false,
  error: undefined
};

export function transactionsReducer(
  state: TransactionsState = transactionsInitialState,
  action: TransactionsActions
): TransactionsState {
  switch (action.type) {
    case TransactionsActionTypes.LoadTransactions: {
      return {
        ...state,
        loading: true,
        error: undefined
      };
    }
    case TransactionsActionTypes.SaveError: {
      return {
        ...state,
        error: action.payload
      };
    }
    case TransactionsActionTypes.ClearError: {
      return {
        ...state,
        error: undefined
      };
    }
    case TransactionsActionTypes.LoadTransactionsFailure: {
      return {
        ...state,
        loading: false
      };
    }
    case TransactionsActionTypes.LoadTransactionsSuccess: {
      return {
        ...state,
        loading: false,
        error: undefined
      };
    }
    case TransactionsActionTypes.SaveTransactions: {
      return transactionsAdapter.upsertMany(action.payload, state);
    }
    default:
      return state;
  }
}
