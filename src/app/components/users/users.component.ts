import { Component, OnInit } from '@angular/core';
import { User } from './user';

import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  user: User = {
    id: 1,
    name: 'Lorenzo'
  };

  selectedUser : User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void { // Le getter recoit maintenant un observable car le traitement est asynch
    this.userService.getUsers().subscribe(users => this.users = users); // Genre de promise ~ une fois que users est loadé on assigne
  }

}
