import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { metaReducers, reducers } from './store';
import { registerCounter } from './store/counter';
import { CounterEffects } from './store/counter/counter.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CounterEffects]),
    StoreDevtoolsModule.instrument()
  ],
  bootstrap: [AppComponent],
  providers: [registerCounter]
})
export class AppModule {}
