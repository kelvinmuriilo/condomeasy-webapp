import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCondominiumComponent } from './create-condominium.component';

const routes: Routes = [{ path: '', component: CreateCondominiumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCondominiumRoutingModule {}
