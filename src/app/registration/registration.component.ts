import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  regForm: FormGroup;
 
regbutton=false;
  constructor(private FormBuilder: FormBuilder) {
    this.regForm=this.FormBuilder.group({
      fullName:['',[Validators.required, Validators.minLength(6)]],
      mob:['',[Validators.required]],
      dob:['',[Validators.required]],
      remail:['',[Validators.required]],
      rpass:['',[Validators.required,Validators.minLength(4)]]
    })
   }

  ngOnInit(): void {
  }
 register(){
this.regbutton=true;
if(this.regForm.valid){
  console.log('Registration Details', this.regForm.value );
  alert("Registration Successfully Done")
this.regForm.reset();
}else{
  alert("Please Enter Correct Details")
}
   
  
  }
  
 get f(){
   return this.regForm.controls
 }
}
