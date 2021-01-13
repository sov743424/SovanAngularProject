import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms'
import { ContactService } from '../contact.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  conform:FormGroup;
  user:any
  constructor(private fbuilder:FormBuilder,private service:ContactService ) { }


  ngOnInit(): void {
    this.conform=this.fbuilder.group({
      name:[null,[Validators.required,Validators.minLength(4)]],
      email:[null,[Validators.required,Validators.pattern("^([a-zA-Z0-9.-]+)@([a-zA-Z]{5,12}).([a-zA-Z.]{2,20})$")]],
      subject:[null,[Validators.required,Validators.minLength(4)]],
      msg:[null,[Validators.required,Validators.minLength(4)]]
    })
  }
  condata(){
    let form=this.conform.value;
    this.service.users(form).subscribe(Response=>{
      this.user=Response;
      alert('Feedback Has Been Sent')
      console.log(this.user)
    })
  }
}
