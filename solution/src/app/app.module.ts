import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';

import { RootComponent } from './root/root.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent, UserComponent } from './user-detail';
import { SimpleComponent } from './simple';

import { UserService } from './shared';

@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    RootComponent,
    UserListComponent,
    UserDetailComponent,
    UserComponent,
    SimpleComponent,
  ],
  providers: [ UserService ],
  bootstrap: [ RootComponent ]
})
export class AppModule {}
