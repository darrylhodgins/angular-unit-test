import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { User } from './user.model';

@Injectable()
export class UserService implements UserServiceInterface {
	private baseUrl = 'https://jsonplaceholder.typicode.com/users';

	constructor(private http: Http) {}

	public getUserList(): Observable<User[]> {
		return this.http.get(this.baseUrl).map((users) => {
			console.log('MAPPING A USERS', users);
			return users.json();
		});
	}

	public getUser(id: number): Observable<User> {
		return this.http.get(`${this.baseUrl}/${id}`).map((user) => {
			console.log('MAPPING A USER', user);
			return user.json();
		});
	}
}

export interface UserServiceInterface {
	getUserList(): Observable<User[]>;
	getUser(id: number): Observable<User>;
}
