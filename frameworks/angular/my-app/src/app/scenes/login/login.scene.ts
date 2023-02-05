import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'login-scene',
  templateUrl: './login-scene.component.html',
  host: { class: '' },
  styleUrls: ['./login-scene.scss'],
})
export class LoginScene implements OnInit {
  public loginForm = new FormGroup<any>({}) /* : FormGroup = null */;
  public username = new FormControl('', []);
  public password = new FormControl('', []);

  constructor(private fb: FormBuilder) {}

  public ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
