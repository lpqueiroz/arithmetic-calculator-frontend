import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Record } from '../models/Record';
import { RandomString } from '../models/RandomString';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticCalculatorService {

  private basicCalculationUrl = environment.apiUrl + "/arithmetic-calculation/basic";
  private squareRootCalculationUrl = environment.apiUrl + "/arithmetic-calculation/square-root";
  private randomStringUrl = environment.apiUrl + "/random-string";
  private token = JSON.parse(localStorage.getItem('token')!).token;

  constructor(
    private httpClient: HttpClient
  ) { }


  performBasicCalculation(operationType: string, input1: number, input2: number): Observable<Record> {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
    return this.httpClient.post<Record>(this.basicCalculationUrl, { operation_type: operationType, first_input: input1, second_input: input2 }, { headers: headers });
  }

  performSquareRootCalculation(operationType: string, input: number): Observable<Record> {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
    return this.httpClient.post<Record>(this.squareRootCalculationUrl, { operation_type: operationType, input: input }, { headers: headers });
  }

  getRandomString(): Observable<Record> {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
    return this.httpClient.get<Record>(this.randomStringUrl, { headers: headers });
  }
}
