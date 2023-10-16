import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArithmeticCalculatorService } from '../services/arithmetic-calculator.service';
import { Record } from '../models/Record';
import { RandomString } from '../models/RandomString';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-operation',
  templateUrl: './new-operation.component.html',
  styleUrls: ['./new-operation.component.css']
})
export class NewOperationComponent implements OnInit {

  operationType!: string;
  input1!: number;
  input2!: number;
  operationResult!: string;
  response!: Record;

  operationForm: FormGroup = new FormGroup({
    operationType: new FormControl(),
    input1: new FormControl(),
    input2: new FormControl()
  });

  constructor(
    private arithmeticCalculatorService: ArithmeticCalculatorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  performBasicCalculation() {
    this.arithmeticCalculatorService.performBasicCalculation(
      this.operationType,
      this.operationForm.value.input1,
      this.operationForm.value.input2
    ).subscribe((data) => {
      this.response = data;
      this.operationResult = data.operationResponse;
    }, error => {
      alert("An error ocurred");
      console.error(error.message);
    });
  }

  performSquareRootCalculation() {
    this.arithmeticCalculatorService.performSquareRootCalculation(
      this.operationType,
      this.operationForm.value.input1,
    ).subscribe((data) => {
      this.response = data;
      this.operationResult = data.operationResponse;
    }, error => {
      alert("An error ocurred");
      console.error(error.message);
    })
  }

  getRandomString() {
    this.arithmeticCalculatorService.getRandomString()
    .subscribe((data) => {
      this.response = data;
      this.operationResult = data.operationResponse;
    }, error => {
      alert("An error ocurred");
      console.error(error.message);
    })
  }

  fillOperationType(operationType: string) {
    this.operationType = operationType;
  }

  isBasicOperation() {
    return this.operationType === 'addition' || this.operationType === 'subtraction' || this.operationType === 'multiplication' || this.operationType === 'division';
  }

  isSquareRootOperation() {
    return this.operationType === 'square_root';
  }

  isRandomStringOperation() {
    return this.operationType === 'random_string';
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  navigateToRecords() {
    this.router.navigate(['/user-records']);
  }
}
