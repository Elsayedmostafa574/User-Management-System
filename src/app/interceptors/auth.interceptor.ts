import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private _loaderService:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userPayload = localStorage.getItem('userPayload');
    if(userPayload){
          var token = JSON.parse(userPayload)?.token;
    }
    this._loaderService.isLoading.next(true);
    const newRequest =  request.clone({
      setHeaders : {
        'Authorization' : 'Bearer ' + token
      }
    })
    const finalRequest = newRequest.url.includes('login') ? request : newRequest;
    return next.handle(finalRequest).pipe(
      tap((res) =>{
        if(res.type !== 0){
          this._loaderService.isLoading.next(false);
          console.log(res);
        }
      })
    );
    
  }
}
