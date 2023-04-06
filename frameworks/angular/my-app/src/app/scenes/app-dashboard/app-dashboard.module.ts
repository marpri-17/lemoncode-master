import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AppDashboardScene } from './app-dashboard.component';
import { MyAppComponentsModule } from '../../components/components.module';
import { AboutComponent } from '../../pods/about/about.component';
import { HomeComponent } from '../../pods/home/home.component';
import { LoginComponent } from '../../pods/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    MyAppComponentsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports: [],
  declarations: [
    AppDashboardScene,
    LoginComponent,
    HomeComponent,
    AboutComponent,
  ],
  providers: [],
})
export class LoginSceneView {}
