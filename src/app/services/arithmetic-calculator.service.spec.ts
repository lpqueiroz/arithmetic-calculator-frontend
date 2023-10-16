import { TestBed } from '@angular/core/testing';

import { ArithmeticCalculatorService } from './arithmetic-calculator.service';

describe('ArithmeticCalculatorService', () => {
  let service: ArithmeticCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArithmeticCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
