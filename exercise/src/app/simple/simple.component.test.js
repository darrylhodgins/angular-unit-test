import { SimpleComponent } from './simple.component';
describe('c1-simple', function () {
    describe('getMessage()', function () {
        it('should return \'A simple component\'', function () {
            var component = new SimpleComponent();
            expect(component.getMessage()).toEqual('A simple component');
        });
    });
});
