import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private _router:Router){}
   userPayload = localStorage.getItem('userPayload');
  adminId : number = JSON.parse(this.userPayload || '').id;

  logout() : void{
    localStorage.removeItem('userPayload');
    this._router.navigate(['/login']);
  }
}
