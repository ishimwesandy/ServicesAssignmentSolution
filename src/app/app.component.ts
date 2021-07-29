import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './usersService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersServiceService],
})
export class AppComponent  {
  //constructor(private userservice: UsersServiceService) {}
  // activeUsers = [];
  // inactiveUsers = [];
  // ngOnInit() {
  //   this.activeUsers = this.userservice.activeUsers;

  //   this.inactiveUsers = this.userservice.inactiveUsers;
  // }
}
