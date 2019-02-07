import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createDuckService } from '@co-it/ngrx-ducks';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { FeatureAModule } from './feature-a/feature-a.module';
import { metaReducers, reducers } from './reducers';
import { Counter } from './reducers/counter.actions';
import { CounterEffects } from './reducers/counter.effects';

export const registerCounter = {
  provide: Counter,
  useFactory: createCounterService,
  deps: [Store]
};

export function createCounterService(store: Store<unknown>) {
  return createDuckService(Counter, store);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CounterEffects]),

    FeatureAModule,
    StoreDevtoolsModule.instrument()
  ],
  bootstrap: [AppComponent],
  providers: [registerCounter]
})
export class AppModule {}
