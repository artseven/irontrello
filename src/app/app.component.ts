import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoggedIn: boolean = false;

  constructor(
    private sessionThang: SessionService,
    private routerThang: Router
  ) {}

  ngOnInit() {
    this.sessionThang.checkLogin()
    .then((userInfo) => {
      this.routerThang.navigate(['/lists']);
      this.isLoggedIn = true;
    })//Else redirect to /
    .catch(err => {
      this.routerThang.navigate(['/']);
    });

  }

  logMeOut() {
    this.sessionThang.logout()
    .then(() => {
      this.isLoggedIn = false;
      this.routerThang.navigate(['/']);
      this.isLoggedIn = false;
    })
    .catch(() => {

    });
  }

  handleLogin(userFromApi) {
    
  }
}
