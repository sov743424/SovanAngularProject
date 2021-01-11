import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import {Logn} from './logn'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  log_url="https://api09.herokuapp.com/login";
  constructor(private http:HttpClient) { }

  loguser(logdata):Observable<Logn[]>{
    return this.http.post<Logn[]>(this.log_url,logdata);
   }
}
