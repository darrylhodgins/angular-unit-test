import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { UserService, User } from '../shared';

@Component({
  template: `
    <c1-user [user]="user$ | async"></c1-user>
  `
})
export class UserDetailComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private service: UserService,
  ) {}

  ngOnInit(): void {
    this.user$ = this.route.params
      .map(params => +params['id'])
      .mergeMap((id: number) => this.service.getUser(id));
  }
}