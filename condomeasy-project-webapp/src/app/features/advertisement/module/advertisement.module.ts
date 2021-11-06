import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*Modules*/
import { AdvertisementRoutingModule } from './advertisement.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
/*Components*/
import { AdvertisementComponent } from '../advertisement.component';
import { AdvertisementFilterComponent } from '../advertisement-filter/advertisement-filter.component';
import { AdvertisementDetailsComponent } from '../advertisement-details/advertisement-details.component';
import { AdvertisementFormComponent } from './../advertisement-form/advertisement-form.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../state/reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdvertisementEffects } from '../state/effects';

@NgModule({
  declarations: [
    AdvertisementComponent,
    AdvertisementFilterComponent,
    AdvertisementDetailsComponent,
    AdvertisementFormComponent,
  ],
  imports: [
    CommonModule,
    AdvertisementRoutingModule,
    SharedModule,
    StoreModule.forFeature('advertisements', reducer),
    EffectsModule.forFeature([AdvertisementEffects]),
  ],
})
export class AdvertisementModule {}
