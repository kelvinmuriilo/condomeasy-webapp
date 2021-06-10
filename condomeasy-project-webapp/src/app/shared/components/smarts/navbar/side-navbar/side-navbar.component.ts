import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/core/user/user.service';
import { AdvertisementFormComponent } from 'src/app/features/advertisement/advertisement-form/advertisement-form.component';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
})
export class SideNavbarComponent implements OnInit {
  @Output() logoutEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private userService: UserService,
    private matDialogRef: MatDialogRef<SideNavbarComponent>,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.matDialogRef.close();
    this.userService.logout();
  }

  openDialogCreateAdvertisement(): void {
    this.matDialogRef.close();
    this.matDialog.open(AdvertisementFormComponent, {
      width: '500px',
      disableClose: true,
    });
  }
}
