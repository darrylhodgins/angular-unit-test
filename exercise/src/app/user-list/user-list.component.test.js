import { UserListComponent } from './user-list.component';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { UserService } from '../shared/user.service';
import { MockUserService } from '../shared/mock.user.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('user-list', function () {
    beforeAll(function () {
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([])
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
    describe('during init', function () {
        it('should display the values from getUserList', function () {
            var fixture = TestBed.createComponent(UserListComponent);
            fixture.detectChanges();
            var elem = fixture.debugElement.query(By.css('li:first-child a')).nativeElement;
            expect(elem.textContent).toEqual('Leanne Graham');
        });
        it('should call the method getUserList from the UserService', function () {
            var fixture = TestBed.createComponent(UserListComponent);
            var service = TestBed.get(UserService);
            spyOn(service, 'getUserList').and.callThrough();
            fixture.detectChanges();
            expect(service.getUserList).toHaveBeenCalled();
        });
    });
});
