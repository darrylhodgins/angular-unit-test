// import { DebugElement } from '@angular/core';

// import { BrowserModule, By } from '@angular/platform-browser';

// import { 
//   BrowserDynamicTestingModule, 
//   platformBrowserDynamicTesting,
// } from '@angular/platform-browser-dynamic/testing';

// import {
//   async,
//   TestBed,
//   getTestBed,
//   ComponentFixture,
//   ComponentFixtureAutoDetect
// } from '@angular/core/testing';

// import { RootComponent } from './root.component';


// describe('when testing the root component', () => {

//   describe('when testing the class', () => {

//     let component: RootComponent;

//     beforeEach(() => {
//       component = new RootComponent();
//     });

//     it('should return the correct value from the "getMessage" method', () => {
//       expect(component.getMessage()).toBe('Hello World 3');
//     })

//   });

//   describe('when testing the template', () => {
//     let fixture: ComponentFixture<RootComponent>;
    

//     beforeEach(() => {
      
//       TestBed.initTestEnvironment(
//         BrowserDynamicTestingModule,
//         platformBrowserDynamicTesting()
//       );
      
//       TestBed.configureTestingModule({
//         declarations: [ RootComponent ]
//       });

//       fixture = TestBed.createComponent(RootComponent);

//     });

    

//     it('should show the message in the template', () => {
//       fixture.detectChanges();
//       let debug = fixture.debugElement.query(By.css('p'));
//       let element = <HTMLElement>debug.nativeElement;
//       expect(element.textContent).toBe('Hello World 3');
//     });

//   });

// });
