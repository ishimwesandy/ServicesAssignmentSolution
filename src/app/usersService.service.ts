import { CounterServiceService } from './counterService.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersServiceService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService:CounterServiceService){}
  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
   this.counterService.incrementInActiveToActive();
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
 this.counterService.incrementActiveToInactive();
  }
}
