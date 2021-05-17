import { Injectable } from '@angular/core';

const TOKEN_KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasToken(): boolean {
    return !!this.getToken();
  }

  getToken(): string {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  setToken(token: string): void {
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  removeToken(): void {
    window.localStorage.removeItem(TOKEN_KEY);
  }
}
