import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyAppComponentsModule } from 'src/app/components/components.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { UserDashboardRoutingModule } from './user-dashboard.routing';

@NgModule({
  imports: [MyAppComponentsModule, RouterModule, UserDashboardRoutingModule],
  declarations: [UserDashboardComponent],
  exports: [],
  providers: [],
})
export class UserDashboardModule {}
