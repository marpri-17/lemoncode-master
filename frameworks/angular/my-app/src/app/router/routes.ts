import { Routes } from '@angular/router';
import { LoginScene } from '../scenes/login/login.scene';
import { UserDashboardComponent } from '../scenes/user-dashboard/user-dashboard.component';

interface AppRoutes {
  login: string;
  dashboard: LoggedUserRoutes;
}

interface LoggedUserRoutes {
  home: 'string';
}

const loggedUserPaths = {
  home: '/dashboard',
};

export const routes: Routes = [
  { path: '', component: LoginScene },
  {
    path: 'user',
    loadChildren: () =>
      import('../scenes/user-dashboard/user-dashboard.module').then(
        (m) => m.UserDashboardModule
      ),
  },
];
