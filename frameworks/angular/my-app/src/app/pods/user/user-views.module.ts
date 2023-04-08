import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ProfileView } from './profile/profile.component';
import { UserMainView } from './user-main/user-main.component';
import { GalleryView } from './gallery/gallery.component';
import { CRUDView } from './crud/crud.component';

@NgModule({
  imports: [RouterModule, MatButtonModule, CommonModule],
  exports: [],
  declarations: [ProfileView, UserMainView, GalleryView, CRUDView],
  providers: [],
})
export class UserViewsModule {}
