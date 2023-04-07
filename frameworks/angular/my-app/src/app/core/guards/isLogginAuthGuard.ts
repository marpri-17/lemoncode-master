import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LogginService } from '../services/loggin.service';

@Injectable()
export class isLogginAuthGuard implements CanActivate {
  constructor(private logginService: LogginService, private router: Router) {}

  canActivate() {
    if (this.logginService.isLogged()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
