import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/user/user.service';
import { LOCALSTORAGE } from 'src/app/shared/constants';
import { AppState } from 'src/app/state/app.state.model';
import { AdvertisementFilterComponent } from './advertisement-filter/advertisement-filter.component';
import { Advertisement } from './model/advertisement-model';
import { AdvertisementService } from './service/advertisement.service';
import { AdvertisementActions } from './state/actions';
import { selectAdvertisements } from './state/selectors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css'],
})
export class AdvertisementComponent implements OnInit {
  advertisements: Array<Advertisement>;

  constructor(
    private advertisementService: AdvertisementService,
    private toastrService: ToastrService,
    private matDialog: MatDialog,
    private router: Router,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listenSelectorAdvertisement();
    this.loadAdvertisement();
  }

  openFiltersDialog(): void {
    this.matDialog.open(AdvertisementFilterComponent, {
      width: '100%',
      panelClass: ['app-full-bleed-dialog'],
    });
  }

  redirectToAdvetisementDetails(id: number) {
    this.router.navigate(['advertisements/details', id]);
  }

  private loadAdvertisement(): void {
    this.store.dispatch(AdvertisementActions.loadAllAdvertisements());
  }

  private listenSelectorAdvertisement(): void {
    this.store.pipe(select(selectAdvertisements)).subscribe((ads) => {
      const adv = JSON.parse(JSON.stringify(ads));
      this.advertisements = adv.sort((a, b) => b.id - a.id);
    });
  }
}
