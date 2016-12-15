import {UserListComponent} from './user-list.component';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
import {UserService} from '../shared/user.service';
import {MockUserService} from '../shared/mock.user.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('user-list', () => {

	beforeAll(() => {
		TestBed.initTestEnvironment(
			BrowserDynamicTestingModule,
			platformBrowserDynamicTesting()
		);
	});

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes([]) // a placeholder to test
			],
			declarations: [
				UserListComponent
			],
			providers: [
				{
					provide: UserService,
					useClass: MockUserService
				}
			]
		});
	});

	describe('during init', () => {

		it('should call the method getUserList from the UserService', () => {

			let fixture = TestBed.createComponent(UserListComponent);

			// fixture.detectChanges();


		});
	});

});
