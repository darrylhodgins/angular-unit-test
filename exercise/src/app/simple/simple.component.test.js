import { SimpleComponent } from './simple.component';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
describe('c1-simple', function () {
    describe('getMessage()', function () {
        it('should return \'A simple component\'', function () {
            var component = new SimpleComponent();
            expect(component.getMessage()).toEqual('A simple component');
        });
    });
    describe('when rendering the template', function () {
        beforeAll(function () {
            TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
        });
        beforeEach(function () {
            TestBed.configureTestingModule({
                declarations: [
                    SimpleComponent
                ]
            });
        });
        it('should show the correct message in a paragraph', function () {
            var fixture = TestBed.createComponent(SimpleComponent);
            fixture.detectChanges();
            var debug = fixture.debugElement.query(By.css('p'));
            var element = debug.nativeElement;
            expect(element.textContent).toEqual('\"A simple component\"');
        });
    });
});
