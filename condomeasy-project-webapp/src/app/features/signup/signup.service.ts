import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { SignupModel } from './signup.model';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private httpClient: HttpClient) {}

  send(signup: SignupModel): Observable<any> {
    return this.httpClient.post<any>(`${baseUrl}/user`, signup);
  }
}
