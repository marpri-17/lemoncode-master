import { Injectable } from '@angular/core';
import { ILoggin } from '../models/logging.model';
import { MOCK_USER } from '../constants';

@Injectable({ providedIn: 'root' })
export class LogginService {
  public isUserLogIn: boolean = false;

  private userLogged: ILoggin = null;

  private sessionStorageKey = 'myappLogginInfo';

  constructor() {
    const savedLogedInfo = this.recoverLoginInfo();
    if (savedLogedInfo) {
      this.login(savedLogedInfo);
    }
  }

  public login(login: ILoggin): boolean {
    if (
      login.username === MOCK_USER.username &&
      login.password === MOCK_USER.password
    ) {
      this.userLogged = login;
      this.isUserLogIn = true;
    }

    return this.isLogged();
  }

  public logout(): void {
    this.clearUserLogged();
    this.userLogged = null;
    this.isUserLogIn = false;
  }

  public isLogged(): boolean {
    return this.isUserLogIn;
  }

  public getUsername(): string {
    return this.userLogged.username;
  }

  private setUserLogged(login: ILoggin) {
    sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(login));
    this.userLogged = login;
  }

  private recoverLoginInfo(): ILoggin | null {
    const sessionStorageInfo = sessionStorage.getItem(this.sessionStorageKey);
    if (sessionStorageInfo) {
      return JSON.parse(sessionStorageInfo);
    }
    return null;
  }

  private clearUserLogged() {
    this.userLogged = null;
  }
}
