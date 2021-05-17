import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username: string;
  private userSubject = new BehaviorSubject<any>(null);

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string){
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged(){
    return this.tokenService.hasToken();
  }

  getUserName(){
    return this.username;
  }

  private decodeAndNotify(){
    const token = this.tokenService.getToken();
  }
}