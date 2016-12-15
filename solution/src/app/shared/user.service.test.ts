import {
  TestBed,
  inject
} from '@angular/core/testing';

import { 
  BrowserDynamicTestingModule, 
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

import { Observable } from 'rxjs';

import { Http } from '@angular/http';

import { UserService } from './user.service';
import { mockUser, mockUserList } from './user.mock';

describe('When testing the UserService', () => {

  beforeAll(() => {
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: Http, useValue: {} }
      ]
    });
  });

  describe('When calling the method "getUserList"', () => {

    beforeEach(() => {
      let http = TestBed.get(Http);
      http.get = () => Observable.of({
        json: () => mockUserList
      });
      spyOn(http, 'get').and.callThrough();
    });

    it('Should try to use the correct url', () => {
      let http = TestBed.get(Http);
      let service: UserService = TestBed.get(UserService);

      let expectedUrl = 'https://jsonplaceholder.typicode.com/users';

      service.getUserList();
      expect(http.get).toHaveBeenCalledWith(expectedUrl);
    });

    it('Should get back an Observable that emits a list of Users', () => {
      let http = TestBed.get(Http);
      let service: UserService = TestBed.get(UserService);

      service.getUserList().subscribe(users => {
        expect(users).toEqual(mockUserList);
      });
    });

  });

  describe('When calling the method "getUser" with the id 1', () => {

    beforeEach(() => {
      let http = TestBed.get(Http);
      http.get = () => Observable.of({
        json: () => mockUser
      });
      spyOn(http, 'get').and.callThrough();
    });
    

    it('Should try to use the correct url', () => {
      let http = TestBed.get(Http);
      let service: UserService = TestBed.get(UserService);

      let expectedUrl = 'https://jsonplaceholder.typicode.com/users/3';
      let userId = 3;

      service.getUser(userId);
      expect(http.get).toHaveBeenCalledWith(expectedUrl);
    });

    it('Should get back an Observable that emits a particular Users', () => {
      let http = TestBed.get(Http);
      let service: UserService = TestBed.get(UserService);

      let userId = 3;

      service.getUser(userId).subscribe(user => {
        expect(user).toEqual(mockUser);
      });
    });
  });
  
});