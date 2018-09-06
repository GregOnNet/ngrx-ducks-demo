import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ServiceService } from './service.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: ServiceService,
      useFactory(store) {
        return new ServiceService(store);
      },
      deps: [Store]
    }
  ]
})
export class FeatureAModule {}
