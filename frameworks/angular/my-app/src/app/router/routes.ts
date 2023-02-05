import { Routes } from '@angular/router';
import { LoginScene } from '../scenes/login/login.scene';

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

export const routes: Routes = [{ path: '', component: LoginScene }];
