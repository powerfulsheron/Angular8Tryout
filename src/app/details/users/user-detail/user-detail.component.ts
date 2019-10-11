import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../components/users/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() selectedUser: User;

  constructor() { }

  ngOnInit() {
  }

}
