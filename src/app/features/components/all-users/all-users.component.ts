import { Component ,OnInit } from '@angular/core';
import { AllUsers, User } from '../../interface/all-users';
import { AllUsersService } from 'src/app/services/all-users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
   allUsers: User[] = [];

  constructor(private _allUsers:AllUsersService){}
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    this._allUsers.getAllUsers().subscribe({
      next: (res) =>{
        this.allUsers = res.users;
        console.log(res)
      },
      error : (error)=>{
        console.log(error);
        
      }
    })
  }
}
