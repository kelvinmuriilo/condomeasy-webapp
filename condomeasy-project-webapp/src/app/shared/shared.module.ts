import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/dumbs/buttons/button/button.component';
import { InputTextComponent } from './components/dumbs/inputs/input-text/input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/smarts/navbar/navbar.component';
import { MainButtonComponent } from './components/dumbs/buttons/main-button/main-button.component';
import { CardComponent } from './components/dumbs/card/card.component';

import { MatCardModule } from '@angular/material/card';
import { NgxMaskModule } from 'ngx-mask';
import { InputErrorMessageComponent } from './components/dumbs/inputs/input-error-message/input-error-message.component';
import { MaterialModule } from './material/material.module';
import { InputSearchComponent } from './components/dumbs/inputs/input-search/input-search.component';
import { SideNavbarComponent } from './components/smarts/navbar/side-navbar/side-navbar.component';
import { RouterModule } from '@angular/router';
import { InputSelectComponent } from './components/dumbs/inputs/input-select/input-select.component';
import { InputImageComponent } from './components/dumbs/inputs/input-image/input-image.component';
import { InputTextAreaComponent } from './components/dumbs/inputs/input-text-area/input-text-area.component';

const COMPONENTS = [
  ButtonComponent,
  InputTextComponent,
  NavbarComponent,
  MainButtonComponent,
  CardComponent,
  InputErrorMessageComponent,
  InputSearchComponent,
  SideNavbarComponent,
  InputSelectComponent,
  InputImageComponent,
  InputTextAreaComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    NgxMaskModule.forRoot(),
    MaterialModule,
    RouterModule,
  ],
  exports: [...COMPONENTS, MaterialModule, NgxMaskModule],
})
export class SharedModule {}
