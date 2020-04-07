import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TransactionsModule } from "../transactions/transactions.module";
import {
  StoreModule,
  META_REDUCERS,
  MetaReducer,
  ActionReducer
} from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { storeLogger } from "ngrx-store-logger";
import { storeFreeze } from "ngrx-store-freeze";
import { FormsModule } from "@angular/forms";

export function logger(reducer: ActionReducer<any>) {
  return storeLogger({})(reducer);
}

export function metaReducerFactory() {
  return [logger, storeFreeze];
}

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    TransactionsModule
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: META_REDUCERS,
      useFactory: metaReducerFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
