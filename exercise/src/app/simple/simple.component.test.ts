import {SimpleComponent} from './simple.component';


describe('c1-simple', () => {
	describe('getMessage()', () => {
		it('should return \'A simple component\'', () => {
			let component = new SimpleComponent();

			expect(component.getMessage()).toEqual('A simple component');
		});
	});
});
