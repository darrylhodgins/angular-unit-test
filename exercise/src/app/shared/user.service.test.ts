import {UserService} from './user.service';
import {TestBed} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
import {MockHttp} from './mock.http.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import {fakeUserList} from './mock.user.service';

describe('user.service', () => {

	beforeAll(() => {
		TestBed.initTestEnvironment(
			BrowserDynamicTestingModule,
			platformBrowserDynamicTesting()
		);
	});

	beforeEach(() => {

		TestBed.configureTestingModule({
			providers: [
				UserService,
				{
					provide: Http,
					useClass: MockHttp
				}
			]
		});
	});

	describe('getUserList()', () => {
		it('should use the right url', () => {
			let service: UserService = TestBed.get(UserService) as UserService; // like DI
			let http: Http = TestBed.get(Http) as Http; // like DI

			spyOn(http, 'get').and.returnValue(Observable.of({json: () => fakeUserList}));

			let result = service.getUserList();

			expect(http.get).toHaveBeenCalled();
			expect(http.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
			console.log(result);
		});

		it('should return an Observable<Users>', (done) => {
			let service: UserService = TestBed.get(UserService) as UserService; // like DI
			let http: Http = TestBed.get(Http) as Http; // like DI

			spyOn(http, 'get').and.returnValue(Observable.of({json: () => fakeUserList}));

			let result = service.getUserList();

			result.subscribe((users) => {
				expect(users).toEqual(fakeUserList);
				done();
			});
		});
	});

	describe('getUser()', () => {

	});

});
