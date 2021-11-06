import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { User, UserResponseModel, UserToken } from './user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LOCALSTORAGE } from 'src/app/shared/constants';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private username: string;
  private userSubject = new BehaviorSubject<User>(null);

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.username;
  }

  getAutorities(): Array<any> {
    return this.tokenService.getAuthorities();
  }

  matchAuthorities(roles: Array<any>, userRoles: Array<any>): boolean {
    return roles?.some((role) => {
      return userRoles?.some(
        (userrole) => userrole.authority === role.authority
      );
    });
  }

  getUserFromApi(username: string): Observable<UserResponseModel> {
    return this.httpClient.get<UserResponseModel>(
      `${baseUrl}/user/username/${username}`
    );
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as UserToken;
    window.localStorage.setItem(LOCALSTORAGE.USER_NAME, user.sub);
    this.tokenService.setAuthorities(JSON.stringify(user.profiles));
  }
}
