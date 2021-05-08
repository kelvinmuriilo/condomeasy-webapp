import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Components */
import { AppComponent } from './app.component';

/* Modules */
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
