import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import {Signup} from './signup'
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  api_url="https://api09.herokuapp.com/register";
  constructor(private http:HttpClient) { }

  adduser(data):Observable<Signup[]>{
  return this.http.post<Signup[]>(this.api_url,data);
   }
}
