import { Injectable } from '@angular/core';
import { LOCALSTORAGE } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  hasToken(): boolean {
    return !!this.getToken();
  }

  getToken(): string {
    return window.localStorage.getItem(LOCALSTORAGE.TOKEN_KEY);
  }

  getAuthorities(): Array<string> {
    return JSON.parse(window.localStorage.getItem(LOCALSTORAGE.AUTHORITY_KEY));
  }

  setToken(token: string): void {
    window.localStorage.setItem(LOCALSTORAGE.TOKEN_KEY, token);
  }

  setAuthorities(authority: string): void {
    window.localStorage.setItem(LOCALSTORAGE.AUTHORITY_KEY, authority);
  }

  removeToken(): void {
    window.localStorage.removeItem(LOCALSTORAGE.TOKEN_KEY);
    window.localStorage.removeItem(LOCALSTORAGE.AUTHORITY_KEY);
  }
}
