import { Component } from '@angular/core';

@Component({
  selector: 'c1-root',
  template: `
    <h1>My User App</h1>
    <nav>
      <a [routerLink]="['/simple']">Simple</a> |
      <a [routerLink]="['/user-list']">User List</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class RootComponent {}
