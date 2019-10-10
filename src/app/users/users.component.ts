import { Component, OnInit } from '@angular/core';
import { User } from './user';
// import user mocks constant
import { USERS } from './mock-user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = USERS;

  user : User = {
    id: 1,
    name: 'Lorenzo'
  };

  selectedUser : User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  constructor() { }

  ngOnInit() {
  }

}
