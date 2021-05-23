import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/dumbs/buttons/button/button.component';
import { InputTextComponent } from './components/dumbs/input-text/input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/smarts/navbar/navbar.component';
import { MainButtonComponent } from './components/dumbs/buttons/main-button/main-button.component';
import { CardComponent } from './components/dumbs/card/card.component';

import { MatCardModule } from '@angular/material/card';
import { NgxMaskModule } from 'ngx-mask';
import { InputErrorMessageComponent } from './components/dumbs/input-error-message/input-error-message.component';

const COMPONENTS = [
  ButtonComponent,
  InputTextComponent,
  NavbarComponent,
  MainButtonComponent,
  CardComponent,
  InputErrorMessageComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [...COMPONENTS],
})
export class SharedModule {}
