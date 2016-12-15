import { UserService } from './user.service';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MockHttp } from './mock.http.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { fakeUserList } from './mock.user.service';
describe('user.service', function () {
    beforeAll(function () {
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });
    beforeEach(function () {
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
    describe('getUserList()', function () {
        it('should use the right url', function () {
            var service = TestBed.get(UserService);
            var http = TestBed.get(Http);
            spyOn(http, 'get').and.returnValue(Observable.of({ json: function () { return fakeUserList; } }));
            var result = service.getUserList();
            expect(http.get).toHaveBeenCalled();
            expect(http.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
            console.log(result);
        });
        it('should return an Observable<Users>', function (done) {
            var service = TestBed.get(UserService);
            var http = TestBed.get(Http);
            spyOn(http, 'get').and.returnValue(Observable.of({ json: function () { return fakeUserList; } }));
            var result = service.getUserList();
            result.subscribe(function (users) {
                expect(users).toEqual(fakeUserList);
                done();
            });
        });
    });
    describe('getUser()', function () {
    });
});
