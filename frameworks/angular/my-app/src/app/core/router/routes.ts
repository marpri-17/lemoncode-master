import { Routes } from '@angular/router';
import { AboutComponent } from '../../pods/about/about.component';
import { HomeComponent } from '../../pods/home/home.component';
import { LoginComponent } from '../../pods/login/login.component';
import { AppDashboardScene } from '../../scenes/app-dashboard/app-dashboard.component';
import { isLogginAuthGuard } from '../guards/isLogginAuthGuard';
import { isAlreadyLoggedGuard } from '../guards/isAlreadyLoggedGuard';

export const routes: Routes = [
  {
    path: '',
    component: AppDashboardScene,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [isAlreadyLoggedGuard],
      },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      // { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  {
    path: 'user',
    loadChildren: () =>
      import('../../scenes/user-dashboard/user-dashboard.module').then(
        (m) => m.UserDashboardModule
      ),
    canActivate: [isLogginAuthGuard],
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
