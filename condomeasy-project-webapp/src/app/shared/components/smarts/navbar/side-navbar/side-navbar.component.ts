import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
})
export class SideNavbarComponent implements OnInit {
  @Output() logoutEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private userService: UserService,
    private matDialogRef: MatDialogRef<SideNavbarComponent>
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.matDialogRef.close();
    this.userService.logout();
  }
}
