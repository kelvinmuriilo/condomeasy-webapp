import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*Modules*/
import { AdvertisementRoutingModule } from './advertisement.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
/*Components*/
import { AdvertisementComponent } from '../advertisement.component';
import { AdvertisementFilterComponent } from '../advertisement-filter/advertisement-filter.component';
import { AdvertisementDetailsComponent } from '../advertisement-details/advertisement-details.component';

@NgModule({
  declarations: [
    AdvertisementComponent,
    AdvertisementFilterComponent,
    AdvertisementDetailsComponent,
  ],
  imports: [CommonModule, AdvertisementRoutingModule, SharedModule],
})
export class AdvertisementModule {}
