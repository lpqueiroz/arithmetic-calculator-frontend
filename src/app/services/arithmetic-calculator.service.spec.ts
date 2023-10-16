import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArithmeticCalculatorService } from './arithmetic-calculator.service';

describe('ArithmeticCalculatorService', () => {
  let service: ArithmeticCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [ArithmeticCalculatorService]
    });
    service = TestBed.inject(ArithmeticCalculatorService);
  });
});
