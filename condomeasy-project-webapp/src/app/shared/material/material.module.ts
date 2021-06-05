import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

const MATERIAL_MODULES = [
  MatTabsModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatExpansionModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES],
})
export class MaterialModule {}
