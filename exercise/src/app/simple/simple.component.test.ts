import {SimpleComponent} from './simple.component';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';


describe('c1-simple', () => {

	describe('getMessage()', () => {
		it('should return \'A simple component\'', () => {
			let component = new SimpleComponent();

			expect(component.getMessage()).toEqual('A simple component');
		});
	});

	describe('when rendering the template', () => {

		beforeAll(() => {
			TestBed.initTestEnvironment(
				BrowserDynamicTestingModule,
				platformBrowserDynamicTesting()
			);
		});

		beforeEach(() => {
			TestBed.configureTestingModule({
				// we don't need to import BrowserModule or anything because we're not using ng-if or anything
				declarations: [
					SimpleComponent
				]
			});
		});

		it('should show the correct message in a paragraph', () => {
			let fixture = TestBed.createComponent(SimpleComponent);

			fixture.detectChanges();

			let debug = fixture.debugElement.query(By.css('p'));

			let element = debug.nativeElement as HTMLElement;

			expect (element.textContent).toEqual('\"A simple component\"');

		});
	});
});
