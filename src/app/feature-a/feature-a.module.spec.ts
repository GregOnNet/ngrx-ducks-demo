import { TestBed } from '@angular/core/testing';

import { AppModule } from '../app.module';
import { ServiceService } from './service.service';

describe('FeatureAModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
  });

  it('should create an instance', () => {
    expect(TestBed.get(ServiceService)).toBeDefined();
  });
});
