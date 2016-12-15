import { DebugElement } from '@angular/core';

import { BrowserModule, By } from '@angular/platform-browser';

import { 
  BrowserDynamicTestingModule, 
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

import {
  async,
  TestBed,
  getTestBed,
  ComponentFixture,
  ComponentFixtureAutoDetect,
} from '@angular/core/testing';

import { UserComponent } from './user.component';
import { mockUser, User} from '../shared';


describe('When testing the UserComponent', () => {

  let fixture: ComponentFixture<UserComponent>;
  let component: UserComponent;

  beforeAll(() => {
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  });

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    });

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    
  });

  describe('When providing a mock user as an input', () => {

    beforeEach(() => {
      component.user = mockUser;
    });

    it('should render the user in the template', () => {
      fixture.detectChanges();
      let debug = fixture.debugElement.query(By.css('span:nth-child(2)'));
      let element = <HTMLElement>debug.nativeElement;
      expect(element.textContent).toBe('Clementine Bauch');
    });

  });

});
