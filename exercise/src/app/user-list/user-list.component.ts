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
	public users$: Observable<User[]>;

	constructor(private service: UserService) {}

	public ngOnInit(): void {
		console.log('ngOnInit()');
		this.users$ = this.service.getUserList();
	}
}
