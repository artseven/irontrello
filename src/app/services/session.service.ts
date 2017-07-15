import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService {
  baseUrl: string ="http://localhost:3000";

  constructor(
    private myHttpThang: Http
  ) { }

  checkLogin() {
    return this.myHttpThang.get(this.baseUrl + '/api/checklogin')
    .toPromise()
    .then(res => res.json());
  }

  login() {
    return this.myHttpThang.post(this.baseUrl + '/api/login')
    .toPromise()
    .then(res => res.json());
  }
}
