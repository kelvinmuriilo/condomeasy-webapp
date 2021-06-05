import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdvertisementFilterComponent } from './advertisement-filter/advertisement-filter.component';
import { Advertisement } from './model/advertisement-model';
import { AdvertisementService } from './service/advertisement.service';

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
    private router: Router
  ) {}

  ngOnInit(): void {
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
    this.advertisementService.getAdvertisements().subscribe(
      (ads) => {
        this.advertisements = ads.data;
      },
      (err) => {
        this.toastrService.error(err.message);
      }
    );
  }
}
