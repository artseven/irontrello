import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rjxs/add/operator/toPromise';

@Injectable()
export class SessionService {

  constructor(
    private myHttpThang: Http
  ) { }

  checkLogin() {
    return this.myHttpThang.get('/checklogin')
    .toPromise()
    .then(res => res.json());
  }
}
