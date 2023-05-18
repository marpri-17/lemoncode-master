import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProfileView } from './profile/profile.component';
import { UserMainView } from './user-main/user-main.component';
import { GalleryView } from './gallery/gallery.component';
import { CRUDView } from './crud/crud.component';
import { AppDirectivesModule } from '../../core/directives/directives.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    RouterModule,
    MatButtonModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    AppDirectivesModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ],
  exports: [],
  declarations: [ProfileView, UserMainView, GalleryView, CRUDView],
  providers: [],
})
export class UserViewsModule {}
