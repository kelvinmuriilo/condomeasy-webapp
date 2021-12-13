import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Advertisement } from '../model/advertisement-model';
import { AdvertisementService } from '../service/advertisement.service';

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.css'],
})
export class AdvertisementDetailsComponent implements OnInit, OnDestroy {
  subs: Array<Subscription> = [];
  advertisement: Advertisement;

  constructor(
    private activatedRoute: ActivatedRoute,
    private advertisementService: AdvertisementService
  ) {}

  ngOnInit(): void {
    this.loadAdvertisement();
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  private loadAdvertisement(): void {
    let id: number;
    const subRoute = this.activatedRoute.params.subscribe((params) => {
      id = params['id'];
    });

    const sub = this.advertisementService
      .getAdvertisementById(id)
      .subscribe((ads) => {
        this.advertisement = ads.data;
      });

    this.subs.push(subRoute);
    this.subs.push(sub);
  }
}
