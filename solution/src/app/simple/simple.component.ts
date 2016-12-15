import { Component } from '@angular/core';

@Component({
  selector: 'c1-simple',
  template: `
    <p>{{ getMessage() }}</p>
  `
})
export class SimpleComponent {
  getMessage(): string {
    return 'A simple component';
  }
}
