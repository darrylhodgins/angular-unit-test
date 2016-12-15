import { Component, Input } from '@angular/core';
import { User } from '../shared'

@Component({
  selector: 'c1-user',
  template: `
    <h2>User #{{ user?.id }} Detail</h2>
    <span>{{ user?.name }}</span>
    <span>{{ user?.username }}</span>
    <span>{{ user?.email }}</span>
    <span>{{ user?.phone }}</span>
    <span>{{ user?.website }}</span>
  `,
  styles: [`
    span {
      display: block;
    }
  `]
})
export class UserComponent {
  @Input() user: User;
}