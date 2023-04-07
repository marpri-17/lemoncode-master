import { Injectable } from '@angular/core';
import { ILogging } from '../models/logging.model';
import { MOCK_USER } from '../constants';

@Injectable({ providedIn: 'root' })
export class LogginService {
  public isUserLogIn: boolean = false;

  private userLogged: ILogging = null;

  private sessionStorageKey = 'myappLogginInfo';

  constructor() {
    const savedLogedInfo = this.recoverLoginInfo();
    if (savedLogedInfo) {
      this.login(savedLogedInfo);
    }
  }

  public login(login: ILogging): boolean {
    if (
      login.username === MOCK_USER.username &&
      login.password === MOCK_USER.password
    ) {
      this.setUserLogged(login);
      return true;
    }

    return false;
  }

  public logout(): void {
    this.userLogged = null;
    this.isUserLogIn = false;
  }

  public isLogged(): boolean {
    return this.isUserLogIn;
  }

  public getUsername(): string {
    if (this.isLogged) {
      return this.userLogged.username;
    }
    return null;
  }

  private setUserLogged(login: ILogging) {
    sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(login));
    this.userLogged = login;
    this.isUserLogIn = true;
  }

  private recoverLoginInfo(): ILogging | null {
    const sessionStorageInfo = sessionStorage.getItem(this.sessionStorageKey);
    if (sessionStorageInfo) {
      return JSON.parse(sessionStorageInfo);
    }
    return null;
  }
}
