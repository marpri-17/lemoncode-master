import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component';
import { UserNavBarComponent } from './user-nav-bar/user-nav-bar.component';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    CommonModule,
  ],
  declarations: [AppNavBarComponent, UserNavBarComponent],
  exports: [AppNavBarComponent, UserNavBarComponent],
  providers: [],
})
export class MyAppComponentsModule {}
