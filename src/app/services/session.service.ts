import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rjxs/add/operator/toPromise';

@Injectable()
export class SessionService {
  baseUrl: string ="http://localhost:3000";

  constructor(
    private myHttpThang: Http
  ) { }

  checkLogin() {
    return this.myHttpThang.get(this.baseUrl + '/checklogin')
    .toPromise()
    .then(res => res.json());
  }
}