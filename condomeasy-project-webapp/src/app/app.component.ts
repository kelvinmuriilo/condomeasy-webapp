import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'condomeasy-project-webapp';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.test().subscribe((result) => console.log(result));
  }
}
