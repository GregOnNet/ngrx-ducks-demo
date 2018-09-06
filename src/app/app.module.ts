import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DucksModule } from '@co-it/ngrx-ducks';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
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

    DucksModule.register([{ duck: Counter, use: counterActions }]),

    FeatureAModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
