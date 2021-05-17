import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';


const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
    ) { }

  autenticate(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${baseUrl}/auth`, {username, password})
    .pipe(tap(res => {
      this.tokenService.setToken(res.token);
    }));
  }
}
