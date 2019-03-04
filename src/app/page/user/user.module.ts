import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { UserUpdateModule } from './user-update/user-update.module';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserUpdateModule,
    UserRoutingModule
  ],
  providers: [UserService]
})
export class UserModule { }
