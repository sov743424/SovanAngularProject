import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  setData(email:string,full_name:string,token:string,user_id:string){
    window.localStorage.setItem('Email',email);
    window.localStorage.setItem('Fullname',full_name);
    window.localStorage.setItem('Token',token);
    window.localStorage.setItem('Userid',user_id);
  }
  getuserdata(){
    const alldata=[]
    alldata.push(window.localStorage.getItem('Email'),window.localStorage.getItem('Fullname'),window.localStorage.getItem('Userid'))
    return alldata
  }
  constructor() { }
  destroyToken(){
    window.localStorage.clear();
  }
}
