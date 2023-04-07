import { Component, OnInit } from '@angular/core';
import { LogginService } from 'src/app/core/services/loggin.service';

@Component({
  selector: 'user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.scss'],
})
export class UserNavBarComponent implements OnInit {
  public username: string;

  constructor(private logginService: LogginService) {}

  ngOnInit() {
    this.username = this.logginService.getUsername();
  }
}
