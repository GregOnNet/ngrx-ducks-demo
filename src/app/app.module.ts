import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createDucks } from '@co-it/ngrx-ducks';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FeatureAModule } from './feature-a/feature-a.module';
import { metaReducers, reducers } from './reducers';
import { Counter, counterActions } from './reducers/counter.actions';
import { CounterEffects } from './reducers/counter.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CounterEffects]),

    FeatureAModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: Counter,
      useFactory: function(store) {
        return createDucks(counterActions, store);
      },
      deps: [Store]
    }
  ]
})
export class AppModule {}
