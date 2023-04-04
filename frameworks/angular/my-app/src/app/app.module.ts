import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LogginService } from './core/services/loggin.service';
import { AppRoutingModule } from './core/router/app-routing.module';
import { LoginSceneView } from './scenes/app-dashboard/app-dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LoginSceneView,
  ],
  providers: [FormBuilder, LogginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
