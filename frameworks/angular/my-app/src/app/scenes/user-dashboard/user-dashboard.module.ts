import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyAppComponentsModule } from '../../components/components.module';
import { ProfileView } from '../../pods/user/profile/profile.component';
import { UserMainView } from '../../pods/user/user-main/user-main.component';
import { GalleryView } from '../../pods/user/gallery/gallery.component';
import { CRUDView } from '../../pods/user/crud/crud.component';

import { UserDashboardComponent } from './user-dashboard.component';
import { UserDashboardRoutingModule } from './user-dashboard.routing';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MyAppComponentsModule,
    RouterModule,
    UserDashboardRoutingModule,
    MatButtonModule,
  ],
  declarations: [
    UserDashboardComponent,
    ProfileView,
    UserMainView,
    GalleryView,
    CRUDView,
  ],
  exports: [],
  providers: [],
})
export class UserDashboardModule {}
