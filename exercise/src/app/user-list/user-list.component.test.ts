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

		it('should display the values from getUserList', () => {

			let fixture = TestBed.createComponent(UserListComponent);

			fixture.detectChanges();

			let elem = fixture.debugElement.query(By.css('li:first-child a')).nativeElement as HTMLLIElement;
			expect(elem.textContent).toEqual('Leanne Graham');
		});

		it('should call the method getUserList from the UserService', () => {
			let fixture = TestBed.createComponent(UserListComponent);
			let service: UserService = TestBed.get(UserService) as UserService; // like DI
			spyOn(service, 'getUserList').and.callThrough();

			fixture.detectChanges();

			expect(service.getUserList).toHaveBeenCalled();
		});
	});

});
