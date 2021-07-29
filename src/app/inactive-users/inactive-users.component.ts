import { UsersServiceService } from './../usersService.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],


})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userservice :UsersServiceService){

  }

  ngOnInit(){
    this.users=this.userservice.inactiveUsers
  }
  onSetToActive(id: number) {
   this.userservice.setToActive(id);
  }
}
