import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService {
  baseUrl: string ="http://localhost:3000";

  private loggedInSource = new Subject<any>();
  loggedIn$ = this.loggedInSource.asObservable();
  // app component will subscribe to "loggedIn$"
  constructor(
    private myHttpThang: Http
  ) { }

  checkLogin() {
    return this.myHttpThang.get(this.baseUrl + '/api/checklogin',
  { withCredentials: true}
)
    .toPromise()
    .then(res => res.json());
  }

  login(email, password) {
    return this.myHttpThang.post(
      this.baseUrl + '/api/login',
      {
        loginEmail: email,
        loginPassword: password
          },
      { withCredentials : true }
    )
    .toPromise()
    .then(res => res.json());
  }

  signup(userInfo) {
    return this.myHttpThang
    .post(
      this.baseUrl + '/api/signup',
      userInfo
    )
    .toPromise()
    .then(res => res.json());
  }

  logout() {
    return this.myHttpThang
    .post(
      this.baseUrl + '/api/logout',
      {},
      { withCredentials: true }
    )
    .toPromise()
    .then(res => res.json());
  }
}
