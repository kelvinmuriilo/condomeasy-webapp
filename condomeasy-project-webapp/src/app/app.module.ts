import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Components */
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';

/* Modules */
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { HomeComponent } from './features/home/home.component';

import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';

import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxMaskModule } from 'ngx-mask';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LOCALSTORAGE } from './shared/constants';
import { EffectsModule } from '@ngrx/effects';

registerLocaleData(localePt, 'pt');

export function tokenGetter() {
  return localStorage.getItem(LOCALSTORAGE.TOKEN_KEY);
}

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    CoreModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    NgxSpinnerModule,
    NgxMaskModule.forRoot(),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
