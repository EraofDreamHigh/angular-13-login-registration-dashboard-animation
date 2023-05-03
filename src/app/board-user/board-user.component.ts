import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css'],
  template: `<button (click)="clickHandler(pos)">Click me</button>`
})
export class BoardUserComponent implements OnInit {
  content?: string;
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  logintime1?: string;
  logintime2?: string;
  logintime3?: string;
  DangerClass1: boolean = true;
  PrimaryClass1: boolean = false;
  DangerClass2: boolean = true;
  PrimaryClass2: boolean = false;
  DangerClass3: boolean = true;
  PrimaryClass3: boolean = false;

  constructor(private userService: UserService) {}

  clickHandler(pos: any) {
    if (pos == 1) {
      this.status1 = !this.status1;
      let currenttime = new Date();
      this.logintime1 = currenttime.toLocaleTimeString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
      this.DangerClass1 = !this.DangerClass1;
      this.PrimaryClass1 = !this.PrimaryClass1;
    }
    if (pos == 2) {
      this.status2 = !this.status2;
      let currenttime = new Date();
      this.logintime2 = currenttime.toLocaleTimeString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
      this.DangerClass2 = !this.DangerClass2;
      this.PrimaryClass2 = !this.PrimaryClass2;
    }
    if (pos == 3) {
      this.status3 = !this.status3;
      let currenttime = new Date();
      this.logintime3 = currenttime.toLocaleTimeString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
      this.DangerClass3 = !this.DangerClass3;
      this.PrimaryClass3 = !this.PrimaryClass3;
    }

    console.log('asdfasdf', pos);
  }

  ngOnInit(): void {
    this.content = 'Welcome Back';
    this.logintime1 = '21/02/23, 11:59 AM';
    this.logintime2 = '19/02/23, 10:05 AM';
    this.logintime3 = '21/12/22, 08:45 AM';

    this.userService.getUserBoard().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        this.content = JSON.parse(err.error).message;
      },
    });
  }
}
