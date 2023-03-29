import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CRUDView } from './crud/crud.component';
import { GalleryView } from './gallery/gallery.component';
import { ProfileView } from './profile/profile.component';
import { UserMainView } from './user-main/user-main.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [],
  declarations: [UserMainView, GalleryView, CRUDView, ProfileView],
  providers: [],
})
export class UserPodsModule {}
