import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { MockApiService } from '../../services/mock-api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserListRoutingModule
  ],
  exports: [],
  providers: [MockApiService],
})
export class UserListModule { }
