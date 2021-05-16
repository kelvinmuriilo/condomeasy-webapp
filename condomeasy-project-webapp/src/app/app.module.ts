import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Components */
import { AppComponent } from './app.component';

/* Modules */
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './features/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
