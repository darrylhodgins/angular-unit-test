import { UserListComponent } from './user-list.component';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { UserService } from '../shared/user.service';
import { MockUserService } from '../shared/mock.user.service';
describe('user-list', function () {
    beforeAll(function () {
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });
    beforeEach(function () {
        TestBed.configureTestingModule({
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
    describe('during init', function () {
        it('should call the method getUserList from the UserService', function () {
            var fixture = TestBed.createComponent(UserListComponent);
        });
    });
});
