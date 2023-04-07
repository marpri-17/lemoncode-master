import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LogginService } from '../services/loggin.service';

@Injectable()
export class isAlreadyLoggedGuard implements CanActivate {
  constructor(private logginService: LogginService, private router: Router) {}

  canActivate() {
    this.logginService.isLogged();
    if (this.logginService.isLogged()) {
      this.router.navigate(['user', 'dashboard']);
      return false;
    } else {
      return true;
    }
  }
}
