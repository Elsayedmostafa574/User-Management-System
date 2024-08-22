import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AllUsers } from '../features/interface/all-users';

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {

  constructor(private _httpClient:HttpClient) { }
  getAllUsers() : Observable<AllUsers>{
    return this._httpClient.get<AllUsers>('https://dummyjson.com/users')
  }
 
}
