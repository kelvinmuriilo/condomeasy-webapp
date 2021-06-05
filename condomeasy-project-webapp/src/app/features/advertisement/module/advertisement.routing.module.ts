import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertisementDetailsComponent } from '../advertisement-details/advertisement-details.component';
import { AdvertisementComponent } from '../advertisement.component';

const routes: Routes = [
  {
    path: '',
    component: AdvertisementComponent,
  },
  {
    path: 'details/:id',
    component: AdvertisementDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementRoutingModule {}
