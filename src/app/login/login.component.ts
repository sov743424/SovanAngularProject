import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms'
import { LoginService } from '../login.service'
import { Router } from '@angular/router';
import {StorageService} from '../storage.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  regform:FormGroup;
  loguser:any;
  constructor(private fbuilder:FormBuilder,private service:LoginService,private route:Router,private storage:StorageService) { }

  ngOnInit(): void {
    this.regform=this.fbuilder.group({
      email:[null,[Validators.required,Validators.pattern("^([a-zA-Z0-9.-]+)@([a-zA-Z]{5,12}).([a-zA-Z.]{2,20})$")]],
      password:[null,[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@])[a-zA-Z0-9!@#$%^&*]{6,16}$")]],
    })
  }
  regdata(){
    let form=this.regform.value;
    this.service.loguser(form).subscribe(Response=>{
      this.loguser=Response;
      alert(this.loguser.message)

      this.storage.setData(this.loguser.email,this.loguser.full_name,this.loguser.token,this.loguser.user_id)

      this.route.navigate(['../dashboard'])
    },

    error=>{
      console.log(error);
      alert('Invalid Login')
    }
    )
  }
}
