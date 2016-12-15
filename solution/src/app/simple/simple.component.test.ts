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
  ComponentFixtureAutoDetect
} from '@angular/core/testing';

import { SimpleComponent } from './simple.component';


describe('when testing the SimpleComponent', () => {

  describe('when calling the "getMessage" method', () => {

    let component: SimpleComponent;

    beforeEach(() => {
      component = new SimpleComponent();
    });

    it('should return the correct value', () => {
      expect(component.getMessage()).toBe('A simple component');
    })

  });

  describe('when testing the template', () => {
    let fixture: ComponentFixture<SimpleComponent>;
    

    beforeEach(() => {
      
      TestBed.initTestEnvironment(
        BrowserDynamicTestingModule,
        platformBrowserDynamicTesting()
      );
      
      TestBed.configureTestingModule({
        declarations: [ SimpleComponent ]
      });

      fixture = TestBed.createComponent(SimpleComponent);

    });

    it('should show the correct message in the template', () => {
      fixture.detectChanges();
      let debug = fixture.debugElement.query(By.css('p'));
      let element = <HTMLElement>debug.nativeElement;
      expect(element.textContent).toBe('A simple component');
    });

  });

});
