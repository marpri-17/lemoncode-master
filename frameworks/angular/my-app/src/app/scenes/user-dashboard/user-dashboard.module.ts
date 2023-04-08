import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MyAppComponentsModule } from '../../components/components.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { UserDashboardRoutingModule } from './user-dashboard.routing';
import { UserViewsModule } from '../../pods/user/user-views.module';
import { MusicGalleryService } from '../../pods/user/gallery/gallery.service';

@NgModule({
  imports: [
    MyAppComponentsModule,
    RouterModule,
    UserDashboardRoutingModule,
    MatButtonModule,
    UserViewsModule,
  ],
  declarations: [UserDashboardComponent],
  exports: [],
  providers: [MusicGalleryService],
})
export class UserDashboardModule {}
