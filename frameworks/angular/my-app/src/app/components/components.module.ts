import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component';
import { UserNavBarComponent } from './user-nav-bar/user-nav-bar.component';

@NgModule({
  imports: [MatToolbarModule],
  declarations: [AppNavBarComponent, UserNavBarComponent],
  exports: [AppNavBarComponent, UserNavBarComponent],
  providers: [],
})
export class MyAppComponentsModule {}
