import { Component, OnInit } from '@angular/core';

import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  formEmail: string;
  formPassword: string;

  constructor(
    private sessionThang: SessionService
  ) { }

  ngOnInit() {
  }

  submitLogin() {
    this.sessionThang.login(this.formEmail, this.formPassword )
      .then(() => {
        alert('ZOMG login success');
      })
      .catch((theError) => {
        console.log(theError);
        alert('ERROR');
      });
  }

}
