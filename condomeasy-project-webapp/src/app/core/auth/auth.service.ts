import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import {
  LoginRequestModel,
  LoginResponseModel,
} from 'src/app/features/login/login.model';
import { UserService } from '../user/user.service';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  authenticate(login: LoginRequestModel): Observable<LoginResponseModel> {
    return this.httpClient
      .post<LoginResponseModel>(`${baseUrl}/authenticate`, login)
      .pipe(
        tap((res) => {
          this.userService.setToken(res.access_token);
        })
      );
  }

  isAuthenticated(): boolean {
    return this.userService.isLogged();
  }
}
