import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms'
import { SignupService } from '../signup.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  regform:FormGroup;
  user:any;
  constructor(private fbuilder:FormBuilder,private service:SignupService ) { }

  ngOnInit(): void {
    this.regform=this.fbuilder.group({
      firstname:[null,[Validators.required,Validators.minLength(4)]],
      lastname:[null,[Validators.required,Validators.minLength(4)]],
      email:[null,[Validators.required,Validators.pattern("^([a-zA-Z0-9.-]+)@([a-zA-Z]{5,12}).([a-zA-Z.]{2,20})$")]],
      password:[null,[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@])[a-zA-Z0-9!@#$%^&*]{6,16}$")]],
    })
  }

  regdata(){
    let form=this.regform.value;
    this.service.adduser(form).subscribe(Response=>{
      this.user=Response;
      alert(this.user.message)
      console.log(this.user)
    })
  }
}
