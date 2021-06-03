import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { UserToken } from './user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private username: string;
  private userSubject = new BehaviorSubject<any>(null);

  constructor(private tokenService: TokenService, private router: Router) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

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

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as UserToken;
    this.tokenService.setAuthorities(JSON.stringify(user.profiles));
  }
}
