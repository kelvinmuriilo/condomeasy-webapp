import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, SignupRoutingModule, SharedModule],
})
export class SignupModule {}
