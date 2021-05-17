import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/dumbs/buttons/button/button.component';
import { InputTextComponent } from './components/dumbs/input-text/input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/smarts/navbar/navbar.component';

const COMPONENTS = [
  ButtonComponent,
  InputTextComponent
];


@NgModule({
  declarations: [    
    ...COMPONENTS, NavbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
