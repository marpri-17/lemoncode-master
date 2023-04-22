import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogginService } from '../../core/services/loggin.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup<any>({});

  public errorLoginConfig = {
    message: 'Loggin failed! Try again',
    action: 'Close',
  };

  private snackbarDismissInterval = 5000;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LogginService,
    private _snackBar: MatSnackBar
  ) {}

  public ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public onClickLogIn(event) {
    event.preventDefault();
    const { email, password } = this.loginForm.controls;
    if (
      this.loginService.login({
        username: email.value,
        password: password.value,
      })
    ) {
      this.router.navigate(['user', 'dashboard']);
    } else {
      this._snackBar.open(
        this.errorLoginConfig.message,
        this.errorLoginConfig.action,
        {
          duration: this.snackbarDismissInterval,
        }
      );
    }
  }
}
