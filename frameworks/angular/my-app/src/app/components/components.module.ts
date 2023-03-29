import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component';
import { UserNavBarComponent } from './user-nav-bar/user-nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, RouterModule],
  declarations: [AppNavBarComponent, UserNavBarComponent],
  exports: [AppNavBarComponent, UserNavBarComponent],
  providers: [],
})
export class MyAppComponentsModule {}
