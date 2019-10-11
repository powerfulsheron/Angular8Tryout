import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from '../message/message.service';

import { User } from '../../components/users/user';
import { USERS } from '../../components/users/mock-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) { }

  getUsers(): Observable<User[]> {
    this.messageService.add('Fetched users from userService ...');
    return of(USERS);
  }

}
