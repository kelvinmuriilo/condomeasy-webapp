import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'condomeasy-project-webapp';
  currentRoute: string;

  constructor(private router: Router) {}

  showNavBar(): boolean {
    this.currentRoute = this.router.url;
    return !this.currentRoute.includes('/login');
  }
}
