import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { LoginRequestModel } from 'src/app/features/login/login.model';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  authenticate(login: LoginRequestModel): Observable<string> {
    return this.httpClient.post<string>(`${baseUrl}/authenticate`, login).pipe(
      tap((res) => {
        this.tokenService.setToken(res);
      })
    );
  }

  isAuthenticated(): boolean {
    return this.tokenService.hasToken();
  }

  test(): Observable<any> {
    const login = { username: 'admin', password: 'root1526' };
    return this.httpClient.post<any>(
      `http://b574dec2ef54.ngrok.io/condomeasy-backend-api/v1/authenticate`,
      login
    );
  }
}
