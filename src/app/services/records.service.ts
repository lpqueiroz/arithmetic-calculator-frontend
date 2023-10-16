import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecordView } from '../models/RecordView';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  private recordsViewUrl = environment.apiUrl + "/records";
  private token = JSON.parse(localStorage.getItem('token')!).token;

  constructor(
    private httpClient: HttpClient
  ) { }

  getRecords(): Observable<RecordView[]> {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
    return this.httpClient.get<RecordView[]>(this.recordsViewUrl, { headers: headers });
  }

  deleteRecord(id: number): any {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
    return this.httpClient.delete(`${this.recordsViewUrl}/${id}`, { headers: headers });
  }
}
