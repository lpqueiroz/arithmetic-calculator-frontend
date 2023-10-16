import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Token } from '../models/Token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = environment.apiUrl + "/token";

  constructor(
    private httpClient: HttpClient
  ) { }

  getToken(username: string, password: string): Observable<Token> {
    return this.httpClient.post<Token>(this.loginUrl, { username: username, password: password });
  }
}
