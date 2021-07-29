import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersServiceService } from '../usersService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],

})
export class ActiveUsersComponent implements OnInit {
 users: string[];
  constructor(private userservice :UsersServiceService){

  }
  ngOnInit(){
    this.users=this.userservice.activeUsers
  }
  onSetToInactive(id: number) {
    this.userservice.setToInactive(id)
  }
}
