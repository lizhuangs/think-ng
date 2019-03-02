import { Injectable } from '@angular/core';
import { User } from './user';
import { users } from './mock.users';

@Injectable()
export class UserService {

  list(): User[] {
    return users;
  }
}
