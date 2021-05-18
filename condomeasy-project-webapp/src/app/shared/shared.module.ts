import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/dumbs/buttons/button/button.component';
import { InputTextComponent } from './components/dumbs/input-text/input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/smarts/navbar/navbar.component';
import { MainButtonComponent } from './components/dumbs/buttons/main-button/main-button.component';
import { CardComponent } from './components/dumbs/card/card.component';

import { MatCardModule } from '@angular/material/card';

const COMPONENTS = [
  ButtonComponent,
  InputTextComponent,
  NavbarComponent,
  MainButtonComponent,
  CardComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ReactiveFormsModule, MatCardModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
