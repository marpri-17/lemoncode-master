import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LogginService } from 'src/app/core/services/loggin.service';

@Component({
  selector: 'user-header',
  templateUrl: './user-header.component.html',
})
export class UserHeaderComponent implements OnInit {
  public isLogged: boolean = false;
  public username: string = null;

  constructor(private logginService: LogginService, private router: Router) {}

  public ngOnInit() {
    if (this.logginService.isLogged()) {
      this.isLogged = true;
      this.username = this.logginService.getUsername();
    }
  }

  public onLogout() {
    this.logginService.logout();
    this.resetOnLogOut();
    this.router.navigate(['home']);
  }

  private resetOnLogOut() {
    this.isLogged = false;
    this.username = null;
  }
}
