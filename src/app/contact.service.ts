import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import {Contact} from './contact'
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  api_url="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }

users(data):Observable<Contact[]>{
  return this.http.post<Contact[]>(this.api_url,data);
}
}