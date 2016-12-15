var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UserService } from '../shared';
var UserListComponent = (function () {
    function UserListComponent(service) {
        this.service = service;
    }
    UserListComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit()');
        this.users$ = this.service.getUserList();
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    Component({
        template: "\n\t\t<ul>\n\t\t\t<li *ngFor=\"let user of users$ | async\">\n\t\t\t\t<a [routerLink]=\"['/user-detail', user.id]\">{{ user.name }}</a>\n\t\t\t</li>\n\t\t</ul>\n\t"
    }),
    __metadata("design:paramtypes", [UserService])
], UserListComponent);
export { UserListComponent };
