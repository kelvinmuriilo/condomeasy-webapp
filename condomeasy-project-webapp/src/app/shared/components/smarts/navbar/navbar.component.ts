import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserService } from 'src/app/core/user/user.service';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state.model';
import { AdvertisementActions } from '../../../../features/advertisement/state/actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbarForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.startNavBarForm();
  }

  logout(): void {
    this.userService.logout();
  }

  reloadAdvertisement() {
    this.store.dispatch(AdvertisementActions.loadAllAdvertisements());
  }

  openSideNavbar(): void {
    this.matDialog.open(SideNavbarComponent, {
      height: '100vh',

      panelClass: [
        'app-full-bleed-dialog',
        'dialog-side-panel',
        'navbar-dialog-config',
      ],
      position: {
        left: '',
      },
    });
  }

  private startNavBarForm = () => {
    this.navbarForm = this.formBuilder.group({
      search: this.formBuilder.control(''),
    });
  };
}
