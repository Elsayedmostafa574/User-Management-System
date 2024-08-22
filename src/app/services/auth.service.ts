import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginPayload, LoginResponse } from '../features/interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient) { }
  login(payload:LoginPayload) : Observable<LoginResponse>{
    return this._httpClient.post<LoginResponse>('https://dummyjson.com/auth/login',payload)
  }
}
