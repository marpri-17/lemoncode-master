import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CRUDView } from '../../pods/user/crud/crud.component';
import { GalleryView } from '../../pods/user/gallery/gallery.component';
import { ProfileView } from '../../pods/user/profile/profile.component';
import { UserMainView } from '../../pods/user/user-main/user-main.component';
import { UserDashboardComponent } from './user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    children: [
      // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: UserMainView },
      { path: 'gallery', component: GalleryView },
      { path: 'crud', component: CRUDView },
      { path: 'profile', component: ProfileView },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDashboardRoutingModule {}
