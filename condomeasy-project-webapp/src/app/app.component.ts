import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './core/auth/auth.service';
import { LOCALSTORAGE } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'condomeasy-project-webapp';
  currentRoute: string;

  constructor(
    private router: Router,
    private jwtHelperService: JwtHelperService
  ) {}

  ngOnInit(): void {
    const token = window.localStorage.getItem(LOCALSTORAGE.TOKEN_KEY);
    const tokenIsExpired = this.jwtHelperService.isTokenExpired(token);
    if (tokenIsExpired) {
      localStorage.clear();
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/advertisements']);
    }
  }

  showNavBar(): boolean {
    this.currentRoute = this.router.url;
    if (
      this.currentRoute.includes('/login') ||
      this.currentRoute.includes('/signup')
    ) {
      return false;
    }

    return true;
  }
}
