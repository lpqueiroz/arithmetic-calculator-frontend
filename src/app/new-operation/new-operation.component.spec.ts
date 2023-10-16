import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOperationComponent } from './new-operation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArithmeticCalculatorService } from '../services/arithmetic-calculator.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewOperationComponent', () => {
  let component: NewOperationComponent;
  let fixture: ComponentFixture<NewOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule], 
      providers: [ArithmeticCalculatorService],
      declarations: [ NewOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
