import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }

    let roles = route.data['roles'] as Array<any>;
    let userRoles = this.userService.getAutorities();

    if (this.userService.matchAuthorities(roles, userRoles)) {
      return true;
    } else {
      this.router.navigate(['/forbidden']);
      return false;
    }
  }
}
