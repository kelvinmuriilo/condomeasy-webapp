import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { AuthGuard } from './core/auth/auth.guard';
import { UserRole } from './core/user/user.model';
import { ForbiddenComponent } from './core/forbidden/forbidden.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'advertisements',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./features/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'advertisements',
    /*  canActivate: [AuthGuard],
    data: {
      roles: [{ authority: UserRole.ADMIN }, { authority: UserRole.USER }],
    }, */
    loadChildren: () =>
      import('./features/advertisement/module/advertisement.module').then(
        (m) => m.AdvertisementModule
      ),
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
