import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import {UserServiceInterface} from './user.service';
import 'rxjs/add/operator/map';

import { User } from './user.model';

export const fakeUserList: any[] = [
	{
		id: 1,
		name: 'Leanne Graham',
		username: 'Bret',
		email: 'Sincere@april.biz',
		phone: '1-770-736-8031 x56442',
		website: 'hildegard.org',
	},
	{
		id: 2,
		name: 'Ervin Howell',
		username: 'Antonette',
		email: 'Shanna@melissa.tv',
		phone: '010-692-6593 x09125',
		website: 'anastasia.net',
	}
];

@Injectable()
export class MockUserService implements UserServiceInterface {
	public getUserList(): Observable<User[]> {
		return Observable.of(fakeUserList);
	}

	public getUser(id: number): Observable<User> {
		return Observable.of(fakeUserList[0]);
	}
}
