/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CounterServiceService } from './counterService.service';

describe('Service: CounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterServiceService]
    });
  });

  it('should ...', inject([CounterServiceService], (service: CounterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
