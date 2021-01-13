import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Logn} from './logn'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  log_url="https://api09.herokuapp.com/login";
  constructor(private http:HttpClient) { }

  loguser(logdata):Observable<Logn[]>{
    return this.http.post<Logn[]>(this.log_url,logdata)
    .pipe(catchError(this.errorHandler));
   }
   errorHandler(error:HttpErrorResponse){
     return throwError(error)
   }

}
