import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { LoginScene } from './login.scene';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule],
  exports: [],
  declarations: [LoginScene],
  providers: [],
})
export class LoginSceneView {}
