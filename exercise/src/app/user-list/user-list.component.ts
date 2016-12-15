import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService, User } from '../shared';

@Component({
  template: `
    <ul>
      <li *ngFor="let user of users$ | async">
        <a [routerLink]="['/user-detail', user.id]">{{ user.name }}</a>
      </li>
    </ul>
  `
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private service: UserService) {}
  
  ngOnInit(): void {
    this.users$ = this.service.getUserList();
  }
}