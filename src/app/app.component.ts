import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'state-management';
  isLoading = false;
  constructor(private _router: Router , private _loaderService:LoaderService) {}
  ngOnInit(): void {
    this.loader();
    this.mainNavigate();

  }
  mainNavigate() {
    if (localStorage.getItem('userPayload')) {
      this._router.navigate(['/sidebar/users']);
    } else {
      this._router.navigate(['/login']);
    }
  }
  loader() : void {
    this._loaderService.isLoading.subscribe({
      next : (loader)=>{
        this.isLoading = loader;
      }
    })
  }
}
