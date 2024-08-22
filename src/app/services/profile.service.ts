import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile, UpdateProfilePayload } from '../features/interface/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( private _httpClient:HttpClient) { }
  getUserById(id:string) : Observable<Profile>{
    return this._httpClient.get<Profile>(`https://dummyjson.com/users/${id}`)
  }
  UpdateUser(payload:UpdateProfilePayload): Observable<UpdateProfilePayload>{
    return this._httpClient.put<UpdateProfilePayload>(`https://dummyjson.com/users/${payload.id}`, payload)

  }
}
